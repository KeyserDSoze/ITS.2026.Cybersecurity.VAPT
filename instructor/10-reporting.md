# 10 — Professional Reporting — Guida docente

## Obiettivo docente

Far capire che il report non è l'ultima formalità del pentest: è **il prodotto che permette al cliente di decidere e correggere**.

Il modello da fissare è:

```text
EVIDENZA
↓
CAUSA
↓
RIPRODUZIONE
↓
IMPATTO
↓
SEVERITY MOTIVATA
↓
REMEDIATION
↓
MESSAGGIO PER IL DESTINATARIO
```

## Durata suggerita

Circa **3 ore**.

```text
00:00–00:15  apertura: tre versioni dello stesso finding
00:15–00:40  audience e struttura report
00:40–01:10  anatomia del finding
01:10–01:35  impact, severity e remediation
01:35–01:55  executive summary
01:55–02:30  laboratorio From Evidence to Report
02:30–02:50  peer review / presentazione
02:50–03:00  debrief
```

## Preparazione

Aprire:

- lezione 10;
- `labs/10-reporting/`;
- finding template;
- report template;
- almeno un evidence pack dei moduli precedenti.

Preparare tre versioni dello stesso problema:

```text
1. scanner output
2. appunto grezzo del tester
3. finding professionale
```

## Apertura

Mostrare i tre testi e chiedere:

> «Quale consegnereste a uno sviluppatore? Quale a un manager? Quale non consegnereste affatto?»

Usare la discussione per introdurre audience e trasformazione dell'evidenza.

## Due audience

Alla lavagna:

```text
TECNICO
vuole capire, riprodurre, correggere, retestare

MANAGEMENT
vuole capire rischio, priorità, impatto, limiti
```

Chiedere quali informazioni sono utili a entrambi e quali no.

## Anatomia del finding

Costruire un finding dal vivo usando un caso già noto alla classe.

Ordine consigliato:

```text
Titolo
Asset
Descrizione / causa
Prerequisiti
Evidence
Steps to reproduce
Impact
Severity rationale
Remediation
Retest
```

Non scrivere tutto subito: chiedere alla classe cosa manca dopo ogni sezione.

## Titolo

Confrontare:

```text
Burp High issue
```

con:

```text
Controllo di autorizzazione insufficiente consente accesso agli ordini di altri utenti
```

Domanda:

> «Quale titolo aiuta il cliente a capire il problema senza sapere quale tool abbiamo usato?»

## Descrizione e causa

Usare la formula:

```text
Il sistema consente ______
perché non verifica / gestisce correttamente ______.
```

Questo aiuta gli studenti a non limitarsi al sintomo.

## Evidence

Insistere su sufficienza e minimizzazione.

Chiedere:

- quale request è davvero necessaria?
- quale response dimostra il problema?
- possiamo rimuovere dati inutili?
- le credenziali sono sanitizzate?

## Steps to reproduce

Farli leggere a un altro gruppo che non ha eseguito il test.

Se quel gruppo non riesce a capire cosa fare, gli step non sono abbastanza chiari.

## Impact

Scrivere due frasi:

```text
A. Un attaccante potrebbe fare danni gravi.
B. Un utente autenticato standard può leggere i dati ordine appartenenti a un altro cliente.
```

Chiedere perché B è migliore.

Messaggio:

> «Descriviamo ciò che l'evidenza sostiene; non vendiamo paura.»

## Severity

Far motivare la severity a voce prima di scriverla.

Domande:

- chi può sfruttare?
- da dove?
- servono privilegi?
- quali dati/funzioni sono coinvolti?
- quanto è riproducibile?
- qual è il contesto business?

Il numero CVSS può supportare, ma non sostituire la motivazione.

## Remediation

Confrontare:

```text
Sanitizzare input
Aggiornare il server
Migliorare la sicurezza
```

con remediation causali e verificabili.

Domanda:

> «Come sapremo durante il retest che la correzione è davvero efficace?»

## Executive summary

Imporre un vincolo: nessun nome di tool nei primi paragrafi.

Struttura:

```text
perché abbiamo testato
cosa abbiamo testato
postura generale
rischi principali
priorità
limitazioni
```

Far leggere una frase ad alta voce e chiedere se sarebbe comprensibile a un manager non tecnico.

## Laboratorio — From Evidence to Report

### GUIDED

Partire da un finding già validato.

Far completare una sezione per volta e fare brevi checkpoint collettivi.

Domande:

- «Questa frase è un fatto o interpretazione?»
- «Quale evidence la supporta?»
- «L'impatto è dimostrato?»
- «La remediation corregge la causa?»

### INDEPENDENT

Secondo finding senza walkthrough.

### CHALLENGE

Executive summary + doppia presentazione:

```text
2 minuti tecnico
2 minuti manager
```

La stessa vulnerabilità deve essere raccontata con profondità diversa, non con fatti diversi.

## Peer review

Fornire checklist:

```text
chiaro?
riproducibile?
evidence sufficiente?
fatti separati da ipotesi?
impact concreto?
severity motivata?
remediation causale?
```

La peer review deve produrre almeno una modifica reale al finding.

## Misconception da intercettare

- più screenshot = migliore evidence;
- executive summary = elenco vulnerabilità;
- CVSS = rischio business;
- remediation generica = sufficiente;
- impact più drammatico = finding migliore;
- output scanner può essere incollato nel report.

## Debrief

Prendere un finding debole e riscriverlo collettivamente in cinque minuti.

Poi chiedere:

> «Che cosa è cambiato tecnicamente?»

Risposta: quasi nulla. È cambiata la capacità di comunicare il lavoro tecnico.

## Evidenze da osservare

Un buon report:

- permette riproduzione;
- usa evidence minima ma sufficiente;
- separa fatto e interpretazione;
- motiva severity;
- descrive impact concreto;
- propone remediation verificabile;
- dichiara limitazioni;
- adatta il linguaggio al pubblico.

## Adattamento del livello

### Classe debole

Fornire finding con sezioni da riordinare/correggere.

### Classe media

Partire da evidence pack grezzo.

### Classe forte

Inserire evidence contraddittorie o incomplete e chiedere cosa **non** può essere scritto nel report.

## Collegamento al modulo 11

Chiudere con:

> «Molte parti del reporting sembrano perfette per l'AI: riassumere, riscrivere, organizzare. Ma cosa succede quando l'AI aggiunge un impatto che non abbiamo mai osservato o inventa una CVE?»

Questo introduce il modulo AI-assisted.