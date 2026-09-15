# Student Web App

Frontend pubblico del corso, pubblicato tramite GitHub Pages.

## Funzioni

- React + Vite;
- tema light/dark persistito in `localStorage`;
- avanzamento, ultima lezione, checklist, quiz e note persistiti localmente;
- contenuti generati automaticamente da `../lessons/*/README.md`;
- quiz opzionali tramite `../lessons/<slug>/quiz.json`;
- PDF A4 generato automaticamente per ogni lezione durante la build;
- nessun backend e nessun account studente.

## Sviluppo locale

```bash
cd site
npm install
npm run dev
```

## Build completa

```bash
npm run build
```

La build esegue tre fasi:

1. converte le lezioni Markdown in `public/content/lessons.json`;
2. genera un PDF per ciascuna lezione in `public/pdfs/`;
3. crea il sito statico Vite in `dist/`.

## Aggiungere interattività a una lezione

È possibile aggiungere `quiz.json` nella directory della lezione. Schema:

```json
[
  {
    "id": "q1",
    "question": "Domanda",
    "options": ["A", "B", "C"],
    "correct": 1,
    "explanation": "Spiegazione mostrata dopo la risposta."
  }
]
```

`correct` è l'indice zero-based dell'opzione corretta.
