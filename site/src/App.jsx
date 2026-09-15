import { useEffect, useState } from 'react';
import { loadProgress, loadTheme, saveProgress, saveTheme } from './storage.js';

const BASE = import.meta.env.BASE_URL;

function routeFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('lesson/')) return { page: 'lesson', slug: hash.slice('lesson/'.length) };
  return { page: 'home' };
}

function navigate(path) {
  window.location.hash = path ? `#/${path}` : '#/';
}

function App() {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [route, setRoute] = useState(routeFromHash);
  const [theme, setTheme] = useState(loadTheme);
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    const onHash = () => {
      setRoute(routeFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) navigate('');
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    fetch(`${BASE}content/lessons.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then(setCourse)
      .catch((err) => setError(err.message));
  }, []);

  const updateProgress = (updater) => {
    setProgress((current) => typeof updater === 'function' ? updater(current) : updater);
  };

  if (error) return <Status title="Impossibile caricare il corso" detail={error} />;
  if (!course) return <Status title="Caricamento materiale…" />;

  const lesson = route.page === 'lesson'
    ? course.lessons.find((item) => item.slug === route.slug)
    : null;

  return (
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} completed={Object.keys(progress.completed).length} total={course.lessons.length} />
      {route.page === 'lesson' && lesson ? (
        <LessonPage course={course} lesson={lesson} progress={progress} updateProgress={updateProgress} />
      ) : route.page === 'lesson' ? (
        <Status title="Lezione non trovata" detail="Il collegamento potrebbe essere cambiato." />
      ) : (
        <Home course={course} progress={progress} />
      )}
      <Footer />
    </div>
  );
}

function Header({ theme, setTheme, completed, total }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigate('')} aria-label="Vai alla home">
        <span className="brand-mark">VAPT</span>
        <span><strong>ITS Umbria</strong><small>Cybersecurity · 2026</small></span>
      </button>
      <div className="topbar-actions">
        <span className="mini-progress" title="Lezioni completate">{completed}/{total}</span>
        <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Cambia tema">
          {theme === 'dark' ? '☀︎' : '☾'}
        </button>
      </div>
    </header>
  );
}

function Home({ course, progress }) {
  const completedCount = course.lessons.filter((lesson) => progress.completed[lesson.slug]).length;
  const percentage = course.lessons.length ? Math.round((completedCount / course.lessons.length) * 100) : 0;
  const resume = course.lessons.find((lesson) => lesson.slug === progress.lastLesson)
    || course.lessons.find((lesson) => !progress.completed[lesson.slug])
    || course.lessons[0];

  return (
    <main>
      <section className="hero container">
        <div>
          <span className="eyebrow">Vulnerability Assessment & Penetration Testing</span>
          <h1>Impara il metodo.<br />Poi scegli gli strumenti.</h1>
          <p>Missioni guidate, teoria applicata, dossier simulati, autonomia progressiva e reporting. Il tuo avanzamento rimane salvato sul dispositivo.</p>
          {resume && <button className="primary" onClick={() => navigate(`lesson/${resume.slug}`)}>Riprendi da {resume.title} →</button>}
        </div>
        <div className="progress-card">
          <span>Il tuo percorso</span>
          <strong>{percentage}%</strong>
          <div className="progress-track"><div style={{ width: `${percentage}%` }} /></div>
          <small>{completedCount} lezioni completate su {course.lessons.length}</small>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div><span className="eyebrow">Percorso</span><h2>Lezioni</h2></div>
          <p>Segui l'ordine suggerito: all'inizio sarai molto guidato, poi le indicazioni diminuiranno fino al capstone.</p>
        </div>
        <div className="lesson-grid">
          {course.lessons.map((lesson) => (
            <button key={lesson.slug} className={`lesson-card ${progress.completed[lesson.slug] ? 'is-complete' : ''}`} onClick={() => navigate(`lesson/${lesson.slug}`)}>
              <div className="lesson-number">{String(lesson.number).padStart(2, '0')}</div>
              <div>
                <h3>{lesson.title.replace(/^\d+\s*[—-]\s*/, '')}</h3>
                <p>{lesson.summary}</p>
                {lesson.lab && <span className="lab-badge">Dossier simulato incluso</span>}
              </div>
              <span className="card-status">{progress.completed[lesson.slug] ? '✓ Completata' : 'Apri →'}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function LessonPage({ course, lesson, progress, updateProgress }) {
  const index = course.lessons.findIndex((item) => item.slug === lesson.slug);
  const previous = course.lessons[index - 1];
  const next = course.lessons[index + 1];
  const checklist = progress.checklist[lesson.slug] || {};
  const storedNotes = progress.notes[lesson.slug];
  const notebook = typeof storedNotes === 'string' ? { free: storedNotes } : (storedNotes || {});
  const entryQuiz = (lesson.quiz || []).filter((question) => question.phase === 'entry');
  const exitQuiz = (lesson.quiz || []).filter((question) => question.phase !== 'entry');

  useEffect(() => {
    updateProgress((current) => ({ ...current, lastLesson: lesson.slug }));
  }, [lesson.slug]);

  const setChecklist = (key, value) => updateProgress((current) => ({
    ...current,
    checklist: {
      ...current.checklist,
      [lesson.slug]: { ...(current.checklist[lesson.slug] || {}), [key]: value },
    },
  }));

  const setNotebookField = (field, value) => updateProgress((current) => {
    const existing = current.notes[lesson.slug];
    const currentNotebook = typeof existing === 'string' ? { free: existing } : (existing || {});
    return {
      ...current,
      notes: {
        ...current.notes,
        [lesson.slug]: { ...currentNotebook, [field]: value },
      },
    };
  });

  const toggleComplete = () => updateProgress((current) => ({
    ...current,
    completed: { ...current.completed, [lesson.slug]: !current.completed[lesson.slug] },
  }));

  return (
    <main className="lesson-layout container">
      <aside className="lesson-sidebar">
        <button className="back-link" onClick={() => navigate('')}>← Tutte le lezioni</button>
        <div className="toc-card">
          <strong>In questa lezione</strong>
          {lesson.headings.map((heading) => (
            <button key={heading.id} onClick={() => document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{heading.text}</button>
          ))}
          {lesson.lab && <button onClick={() => document.getElementById('lab-simulation')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Dossier di laboratorio</button>}
        </div>
      </aside>

      <div className="lesson-main">
        <header className="lesson-hero">
          <span className="eyebrow">Lezione {String(lesson.number).padStart(2, '0')}</span>
          <h1>{lesson.title.replace(/^\d+\s*[—-]\s*/, '')}</h1>
          <p>{lesson.summary}</p>
          <div className="lesson-actions">
            <a className="secondary" href={`${BASE}${lesson.pdf}`} download>↓ Scarica PDF</a>
            <button className={progress.completed[lesson.slug] ? 'complete active' : 'complete'} onClick={toggleComplete}>
              {progress.completed[lesson.slug] ? '✓ Lezione completata' : 'Segna come completata'}
            </button>
          </div>
        </header>

        {entryQuiz.length > 0 && (
          <Quiz
            lesson={lesson}
            questions={entryQuiz}
            progress={progress}
            updateProgress={updateProgress}
            eyebrow="Test di ingresso"
            title="Parti da qui: quanto ne sai già?"
            intro={`${entryQuiz.length} domande rapide. Non è un voto: rispondi senza cercare le soluzioni e usa il risultato per capire cosa devi consolidare.`}
          />
        )}

        <article className="markdown-card lesson-markdown" dangerouslySetInnerHTML={{ __html: lesson.html }} />

        {lesson.lab && <LabDossier lab={lesson.lab} />}

        {exitQuiz.length > 0 && (
          <Quiz
            lesson={lesson}
            questions={exitQuiz}
            progress={progress}
            updateProgress={updateProgress}
            eyebrow="Autoverifica finale"
            title="Ora applica il metodo"
            intro={`${exitQuiz.length} domande applicate per controllare se sai usare i concetti della lezione, non soltanto riconoscerne le definizioni.`}
          />
        )}

        <ProgressPanel checklist={checklist} setChecklist={setChecklist} hasLab={Boolean(lesson.lab)} />
        <Notebook notebook={notebook} setField={setNotebookField} />

        <nav className="lesson-nav">
          {previous ? <button onClick={() => navigate(`lesson/${previous.slug}`)}>← {previous.title.replace(/^\d+\s*[—-]\s*/, '')}</button> : <span />}
          {next ? <button onClick={() => navigate(`lesson/${next.slug}`)}>{next.title.replace(/^\d+\s*[—-]\s*/, '')} →</button> : <button onClick={() => navigate('')}>Torna al percorso →</button>}
        </nav>
      </div>
    </main>
  );
}

function LabDossier({ lab }) {
  return (
    <section className="lab-card" id="lab-simulation">
      <div className="lab-heading">
        <div>
          <span className="eyebrow">Simulazione guidata</span>
          <h2>{lab.title.replace(/^Lab\s+\d+\s*[—-]\s*/i, '')}</h2>
          <p>{lab.summary}</p>
        </div>
        <span className="fiction-badge">Dati fittizi</span>
      </div>

      <div className="lab-flow" aria-label="Metodo di analisi">
        <span>Osserva</span><b>→</b><span>Interpreta</span><b>→</b><span>Formula ipotesi</span><b>→</b><span>Scegli il prossimo test</span><b>→</b><span>Raccogli evidenza</span>
      </div>

      <article className="lab-markdown lesson-markdown" dangerouslySetInnerHTML={{ __html: lab.html }} />

      {lab.artifacts?.length > 0 && (
        <div className="artifact-section">
          <div className="artifact-heading">
            <span className="eyebrow">Artefatti simulati</span>
            <h3>Aprili uno alla volta, come se arrivassero durante l'assessment</h3>
            <p>Non cercare subito la “vulnerabilità”. Per ogni output scrivi prima ciò che puoi affermare e ciò che rimane da verificare.</p>
          </div>
          <div className="artifact-list">
            {lab.artifacts.map((artifact, index) => (
              <details className="artifact" key={artifact.name} open={index === 0}>
                <summary>
                  <span className="artifact-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{artifact.name}</span>
                </summary>
                <pre><code>{artifact.content}</code></pre>
              </details>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ProgressPanel({ checklist, setChecklist, hasLab }) {
  const items = [
    ['theory', 'Ho completato la lettura guidata e gli esempi'],
    ...(hasLab ? [['lab', 'Ho analizzato il dossier simulato senza saltare direttamente alle conclusioni']] : []),
    ['guided', 'Ho completato l’attività GUIDED della lezione'],
    ['independent', 'Ho provato almeno un passaggio in autonomia'],
    ['evidence', 'Ho ordinato evidenze, note o deliverable prodotti'],
  ];
  const done = items.filter(([key]) => checklist[key]).length;
  return (
    <section className="activity-card">
      <div className="activity-head"><div><span className="eyebrow">Checkpoint</span><h2>Prima di andare avanti</h2></div><strong>{done}/{items.length}</strong></div>
      <div className="checklist">
        {items.map(([key, label]) => (
          <label key={key}><input type="checkbox" checked={Boolean(checklist[key])} onChange={(event) => setChecklist(key, event.target.checked)} /><span>{label}</span></label>
        ))}
      </div>
    </section>
  );
}

function Notebook({ notebook, setField }) {
  const fields = [
    ['facts', 'Fatti osservati', 'Che cosa hai verificato direttamente?'],
    ['hypotheses', 'Ipotesi', 'Quali spiegazioni o rischi vuoi ancora verificare?'],
    ['tests', 'Test da eseguire', 'Qual è il prossimo test minimo e perché?'],
    ['evidence', 'Evidenze', 'Request, response, output o risultati che supportano le conclusioni.'],
    ['findings', 'Possibili finding', 'Problemi che potrebbero diventare finding dopo validazione.'],
    ['free', 'Appunti liberi', 'Dubbi, comandi, riferimenti o note personali.'],
  ];

  return (
    <section className="notes-card">
      <div><span className="eyebrow">Taccuino del pentester</span><h2>Costruisci il ragionamento mentre lavori</h2></div>
      <p>Rimane soltanto su questo browser. Tieni separati fatti, ipotesi, test ed evidenze: è la stessa disciplina che userai nel report.</p>
      {fields.map(([key, label, placeholder]) => (
        <div key={key} className="notebook-field">
          <strong>{label}</strong>
          <textarea
            value={notebook[key] || ''}
            onChange={(event) => setField(key, event.target.value)}
            placeholder={placeholder}
            rows={key === 'free' ? 5 : 4}
          />
        </div>
      ))}
    </section>
  );
}

function Quiz({ lesson, questions, progress, updateProgress, eyebrow = 'Autoverifica', title = 'Controlla se il concetto è chiaro', intro }) {
  const saved = progress.quiz[lesson.slug] || {};
  const answeredCount = questions.filter((question) => Number.isInteger(saved[question.id])).length;
  const correctCount = questions.filter((question) => saved[question.id] === question.correct).length;

  const answer = (questionId, optionIndex) => updateProgress((current) => ({
    ...current,
    quiz: { ...current.quiz, [lesson.slug]: { ...(current.quiz[lesson.slug] || {}), [questionId]: optionIndex } },
  }));

  return (
    <section className="quiz-card">
      <div className="activity-head">
        <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
        <strong>{correctCount}/{questions.length}</strong>
      </div>
      {intro && <p className="quiz-intro">{intro}</p>}
      <p className="quiz-progress">Risposte date: {answeredCount}/{questions.length}</p>
      {questions.map((question, qIndex) => {
        const selected = saved[question.id];
        const answered = Number.isInteger(selected);
        const correct = answered && selected === question.correct;
        return (
          <div className="question" key={question.id}>
            <h3>{qIndex + 1}. {question.question}</h3>
            <div className="answers">
              {question.options.map((option, optionIndex) => (
                <button key={option} className={answered && optionIndex === selected ? (correct ? 'selected correct' : 'selected wrong') : ''} onClick={() => answer(question.id, optionIndex)}>{option}</button>
              ))}
            </div>
            {answered && <p className={correct ? 'feedback correct-text' : 'feedback wrong-text'}>{correct ? 'Corretto. ' : 'Non ancora. '}{question.explanation}</p>}
          </div>
        );
      })}
    </section>
  );
}

function Status({ title, detail }) {
  return <main className="status container"><h1>{title}</h1>{detail && <p>{detail}</p>}<button className="primary" onClick={() => navigate('')}>Torna alla home</button></main>;
}

function Footer() {
  return <footer className="footer container"><span>ITS Umbria · Cybersecurity · VAPT 2026</span><span>Solo sistemi propri, di laboratorio o esplicitamente autorizzati.</span></footer>;
}

export default App;
