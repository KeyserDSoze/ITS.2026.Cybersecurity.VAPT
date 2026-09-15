# Instructor Guide

Questa cartella contiene il materiale **per il docente**: scalette d'aula, tempi suggeriti, domande da porre, demo, modalità di lancio dei laboratori e debrief.

Non viene caricata dal portale studenti GitHub Pages. È però parte della repository pubblica, quindi **non deve contenere materiale d'esame riservato, soluzioni segrete, flag, credenziali private o answer key che si desidera mantenere nascosta**.

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

Un file per ogni modulo:

```text
instructor/
├── README.md
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

Il materiale studente rimane invece in:

```text
lessons/    teoria e percorso studente
labs/       simulazioni, dossier e artefatti
site/       portale studenti e PDF
```

## Template della guida docente

Ogni modulo segue la stessa struttura.

### 1. Obiettivo docente

Che cambiamento vogliamo vedere nel modo di ragionare degli studenti.

### 2. Durata suggerita

Una scansione temporale flessibile. I tempi verranno adattati quando sarà definito il monte ore reale del corso.

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

Cosa dovrebbe essere presente nelle note o nel deliverable degli studenti.

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

La guida non deve essere letta come uno script rigido. È un supporto per mantenere coerenti:

- obiettivo della lezione;
- ritmo;
- domande alla classe;
- livello di hint;
- qualità del debrief;
- collegamento tra un modulo e il successivo.

Quando il livello della classe è incerto, privilegiare il percorso GUIDED e aumentare l'autonomia solo quando gli studenti riescono a spiegare il proprio ragionamento.

## Materiale riservato

Quando verranno creati esami, soluzioni riservate o rubriche non pubbliche, dovranno essere conservati in una repository privata separata o in storage privato. Un branch della presente repository pubblica non è una protezione.