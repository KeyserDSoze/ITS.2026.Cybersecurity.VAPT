# Instructor Guide

Questa cartella contiene il materiale **per il docente**: calendario reale, metodo di conduzione, runbook slide-by-slide, demo, domande, laboratori e debrief.

Non viene caricata dal portale studenti GitHub Pages. È però parte della repository pubblica, quindi non deve contenere soluzioni riservate, flag, credenziali private o answer key che si desidera mantenere nascosta.

## Da dove partire

Se devi tenere lezione, apri in quest'ordine:

1. [`START-HERE.md`](START-HERE.md) — bussola rapida da tenere aperta durante il corso;
2. [`PRE-FLIGHT-CHECKLIST.md`](PRE-FLIGHT-CHECKLIST.md) — controllo tecnico e materiale prima dell'aula;
3. [`30-HOUR-SCHEDULE.md`](30-HOUR-SCHEDULE.md) — calendario operativo per le **30 ore reali** disponibili;
4. [`COURSE-RUNBOOK.md`](COURSE-RUNBOOK.md) — metodo generale di conduzione, gestione hint e adattamento della classe;
5. [`presentations/`](presentations/README.md) — regia slide-by-slide delle otto giornate;
6. la guida del singolo modulo, quando serve più profondità.

Il piano da 30 ore usa una regola prudenziale: ogni incontro da 4 ore contiene **circa 3 ore di attività pianificata**, lasciando spazio a due pause da almeno 15 minuti e a circa 30 minuti complessivi di elasticità per setup, domande, recupero e debrief.

## Moduli disponibili

| Modulo | Guida docente | Focus |
|---:|---|---|
| 00 | [`00-baseline-and-mindset.md`](00-baseline-and-mindset.md) | baseline, fatti vs ipotesi, mindset |
| 01 | [`01-vapt-engagement.md`](01-vapt-engagement.md) | kickoff, scope e Rules of Engagement |
| 02 | [`02-technical-foundations.md`](02-technical-foundations.md) | DNS, TCP/TLS, HTTP, sessione |
| 03 | [`03-recon-enumeration.md`](03-recon-enumeration.md) | recon, enumeration e attack surface |
| 04 | [`04-vulnerability-assessment.md`](04-vulnerability-assessment.md) | scanner vs assessment, CVE/CVSS, validazione |
| 05 | [`05-web-pentesting-foundations.md`](05-web-pentesting-foundations.md) | proxy, mapping web, ruoli e input |
| 06 | [`06-web-injection.md`](06-web-injection.md) | input handling, contesto, detection e conferma |
| 07 | [`07-auth-api-security.md`](07-auth-api-security.md) | authentication, authorization, API e BOLA |
| 08 | [`08-controlled-exploitation.md`](08-controlled-exploitation.md) | exploitability, PoC minima e stop condition |
| 09 | [`09-post-exploitation.md`](09-post-exploitation.md) | security context, privilege boundary e attack path |
| 10 | [`10-reporting.md`](10-reporting.md) | finding, severity, remediation ed executive summary |
| 11 | [`11-ai-assisted-pentesting.md`](11-ai-assisted-pentesting.md) | AI come assistente, verifica e human checkpoint |
| 12 | [`12-capstone.md`](12-capstone.md) | conduzione del mini-assessment end-to-end |

## Struttura

```text
instructor/
├── START-HERE.md
├── PRE-FLIGHT-CHECKLIST.md
├── 30-HOUR-SCHEDULE.md
├── COURSE-RUNBOOK.md
├── presentations/                 # regia slide-by-slide delle 8 giornate
├── 00-baseline-and-mindset.md
├── 01-vapt-engagement.md
├── 02-technical-foundations.md
├── 03-recon-enumeration.md
├── 04-vulnerability-assessment.md
├── 05-web-pentesting-foundations.md
├── 06-web-injection.md
├── 07-auth-api-security.md
├── 08-controlled-exploitation.md
├── 09-post-exploitation.md
├── 10-reporting.md
├── 11-ai-assisted-pentesting.md
└── 12-capstone.md
```

Materiale complementare:

```text
lessons/        teoria e percorso studente
labs/           simulazioni, dossier e artefatti
presentations/  PowerPoint per le giornate d'aula
resources/      riferimenti + cheat sheet studente
site/           portale studenti e PDF
```

## Template della guida docente

Ogni modulo segue la stessa struttura.

### 1. Obiettivo docente

Che cambiamento vogliamo vedere nel modo di ragionare degli studenti.

### 2. Durata suggerita

Una scansione temporale flessibile. Quando la guida del singolo modulo propone più tempo di quello disponibile nel piano reale, **prevale `30-HOUR-SCHEDULE.md`**: la guida completa serve come bacino di esempi, domande e varianti.

### 3. Preparazione prima della lezione

Cosa aprire, controllare e predisporre prima dell'ingresso degli studenti.

### 4. Apertura

Domanda, scenario o provocazione con cui iniziare la lezione senza anticipare subito la teoria.

### 5. Concetti da raccontare

Non una trascrizione delle slide, ma i punti che il docente deve far emergere nella discussione.

### 6. Demo

Sequenza della dimostrazione e soprattutto **cosa verbalizzare mentre la si esegue**.

### 7. Laboratorio

Come consegnare il dossier, quali informazioni non anticipare e quando fornire eventuali hint.

### 8. Domande da fare alla classe

Domande utili a verificare il ragionamento durante la lezione.

### 9. Errori/misconception da osservare

Segnali che indicano che un concetto non è ancora chiaro.

### 10. Debrief

Come chiudere l'attività e collegare ciò che è successo al lavoro professionale.

### 11. Evidenze da osservare

Cosa dovrebbe essere presente nelle note o nel deliverable.

### 12. Adattamento del livello

Come accorciare, rallentare o alzare la difficoltà a seconda della classe.

## Regola didattica comune

Il docente dovrebbe continuamente riportare la classe a questa sequenza:

```text
COSA SO?
   ↓
COME LO SO?
   ↓
COSA STO IPOTIZZANDO?
   ↓
QUALE TEST MINIMO MI SERVE?
   ↓
COSA MI ASPETTO DI OSSERVARE?
   ↓
COSA POSSO CONCLUDERE ADESSO?
```

Il corso non premia l'uso del maggior numero di tool. Premia la capacità di prendere decisioni tecniche supportate da evidenze.

## Uso delle guide

Le guide non sono script rigidi. Servono a mantenere coerenti obiettivo, ritmo, domande, livello di hint, qualità del debrief e collegamento tra moduli.

Quando il livello della classe è incerto, privilegiare il percorso GUIDED e aumentare l'autonomia solo quando riusciamo a far spiegare il ragionamento dietro le scelte.

## Materiale riservato

Il materiale realmente riservato dell'esame — soluzioni, flag, credenziali, answer key, rubriche private e infrastruttura valutativa — deve restare in una repository privata separata o in storage privato. Un branch di questa repository pubblica non è una protezione.
