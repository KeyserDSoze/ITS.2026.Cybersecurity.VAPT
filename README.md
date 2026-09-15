# ITS Umbria 2026 — Vulnerability Assessment & Penetration Testing

Materiale didattico del corso **Vulnerability Assessment & Penetration Testing** del percorso Cybersecurity di ITS Umbria.

## Obiettivo del corso

Il corso non è pensato come una semplice raccolta di tool o comandi. L'obiettivo è sviluppare il metodo di lavoro di un penetration tester:

1. comprendere il contesto e lo scope;
2. costruire la superficie d'attacco;
3. formulare e verificare ipotesi;
4. identificare e validare vulnerabilità;
5. dimostrare l'impatto in modo controllato e autorizzato;
6. raccogliere evidenze riproducibili;
7. valutare rischio e priorità;
8. proporre remediation;
9. comunicare i risultati a interlocutori tecnici e non tecnici.

Il percorso è costruito attorno a teoria essenziale, demo, laboratorio e challenge progressive.

## Materiale studente online

Il materiale destinato agli studenti viene pubblicato anche come web app React tramite GitHub Pages:

**https://keyserdsoze.github.io/ITS.2026.Cybersecurity.VAPT/**

La piattaforma offre tema chiaro/scuro, avanzamento persistente sul dispositivo, ripresa dell'ultima lezione, checklist, note personali, autoverifiche e download PDF della singola lezione. I contenuti web e i PDF vengono generati dalla stessa sorgente Markdown presente in `lessons/` e dai dossier presenti in `labs/`.

Il frontend è in [`site/`](site/README.md) e viene pubblicato dalla GitHub Action [`pages.yml`](.github/workflows/pages.yml).

## Struttura della repository

```text
.
├── docs/          # impostazione del corso, syllabus e metodologia
├── lessons/       # sorgente Markdown delle singole lezioni
├── labs/          # simulazioni, dossier, setup e challenge pubbliche
├── instructor/    # guida docente: tempi, demo, domande, debrief e conduzione d'aula
├── templates/     # template per finding e report
├── resources/     # riferimenti e risorse esterne
├── assets/        # immagini e materiale statico riutilizzabile
└── site/          # web app React per gli studenti + generazione PDF
```

`instructor/` non viene caricato nel portale studenti, ma rimane comunque pubblico perché fa parte di questa repository. Per materiale realmente riservato usare una repository privata separata.

## Principio didattico

Il filo conduttore è:

```text
Target autorizzato
      ↓
Cosa conosco?
      ↓
Cosa posso scoprire?
      ↓
Qual è la superficie d'attacco?
      ↓
Quali ipotesi posso formulare?
      ↓
Come le verifico?
      ↓
Qual è l'impatto reale?
      ↓
Come documento e correggo il problema?
```

I tool sono strumenti per implementare una decisione tecnica, non sostituti del ragionamento.

## Uso autorizzato

Tutte le tecniche e i laboratori descritti in questa repository devono essere utilizzati **esclusivamente su sistemi propri, ambienti di laboratorio o target per cui esista un'autorizzazione esplicita**.

## Materiale d'esame

> **IMPORTANTE — questa repository è pubblica.**
>
> Materiale d'esame, soluzioni, flag, credenziali riservate, rubriche non pubbliche e infrastrutture predisposte per una prova valutativa **non devono essere inseriti in questa repository**, in nessun branch.

GitHub non offre branch privati all'interno di una repository pubblica. Quando verrà predisposto il materiale d'esame, sarà mantenuto fuori da questa repository o in una repository privata separata.

Vedi anche [`docs/REPOSITORY_POLICY.md`](docs/REPOSITORY_POLICY.md).

## Stato

Repository in costruzione per l'edizione 2026 del corso.
