# 06 — Web Injection & Input Handling — Guida docente

## Obiettivo docente

Far smettere gli studenti di pensare all'injection come a una collezione di payload e portarli a ragionare su:

```text
INPUT
↓
CONTESTO
↓
INTERPRETE
↓
COMPORTAMENTO ATTESO
↓
ANOMALIA
↓
CONFERMA
↓
IMPATTO
```

Il concetto chiave è: **un payload senza contesto è soltanto una stringa**.

## Durata suggerita

Circa **3 ore**.

```text
00:00–00:15  apertura: dove finisce questo input?
00:15–00:40  input non fidato e interpreti
00:40–01:05  famiglie di injection
01:05–01:30  baseline, detection e conferma
01:30–01:50  demo ragionata
01:50–02:30  laboratorio Input to Evidence
02:30–02:50  causa e remediation
02:50–03:00  debrief
```

## Preparazione

Aprire:

- lezione 06;
- `labs/06-web-injection/`;
- gli artefatti baseline/anomalia/conferma;
- eventuale target didattico locale.

Preparare una scheda:

```text
INPUT
CONTESTO IPOTIZZATO
BASELINE
TEST
DIFFERENZA
CONFERMA
IMPATTO
CAUSA
REMEDIATION
```

## Apertura

Scrivere:

```text
GET /products?category=chairs
```

Chiedere:

> «Qual è la vulnerabilità?»

La risposta corretta è: **non lo sappiamo**.

Poi chiedere:

- dove potrebbe finire `category`?
- database?
- template HTML?
- filesystem?
- comando?
- log?

Questa discussione prepara tutta la lezione.

## Input non fidato

Usare esempi provenienti dal modulo 05:

- query string;
- path parameter;
- body JSON;
- cookie;
- header;
- filename.

Domanda:

> «Quale di questi è fidato perché arriva dal browser?»

Risposta: nessuno automaticamente.

## Il concetto di interprete

Disegnare:

```text
USER INPUT
   ↓
APPLICATION
   ↓
SQL / HTML / SHELL / FILESYSTEM
```

Spiegare che il problema nasce quando dati controllabili acquistano **significato sintattico** per il sistema che li interpreta.

## Famiglie di injection

Non fare una maratona di payload.

Per ogni famiglia usare quattro domande:

```text
DOVE FINISCE L'INPUT?
CHI LO INTERPRETA?
QUAL È IL SEGNALE MINIMO?
QUAL È LA CORREZIONE ALLA CAUSA?
```

### SQL Injection

Causa concettuale:

```text
dati e query SQL non correttamente separati
```

Far emergere prepared statements/parameterized query come correzione strutturale.

### XSS

Insistere sul contesto di output:

```text
HTML text
attribute
JavaScript
URL
```

Il browser è l'interprete finale.

### Command Injection

Concentrarsi sull'errore architetturale: input concatenato a una shell/comando.

### Path Traversal

Concentrarsi sulla costruzione di percorsi e sui confini della directory prevista.

## Baseline prima del test

Questo è il punto più importante della lezione.

Prima di modificare:

```text
cosa invio normalmente?
cosa ricevo normalmente?
quanto è stabile la risposta?
```

Dire:

> «Se non conoscete la baseline, non sapete che cosa è cambiato.»

## Detection ≠ conferma ≠ impatto

Disegnare tre livelli:

```text
DETECTION
vedo un comportamento anomalo

CONFIRMATION
l'anomalia è riproducibile e coerente con l'ipotesi

IMPACT
dimostro una conseguenza concreta, se serve e se è autorizzato
```

Evidenziare che non sempre è necessario arrivare all'ultimo livello.

## Demo ragionata

Usare il dossier simulato.

Mostrare prima soltanto la baseline.

Chiedere:

> «Che cosa vi aspettereste cambiando l'input in modo innocuo?»

Poi mostrare l'artefatto anomalo.

Domande:

- che cosa è cambiato?
- è riproducibile?
- quale spiegazione alternativa esiste?
- basta un errore 500 per concludere injection?

Solo dopo mostrare la conferma simulata.

## Errore 500

Usarlo come misconception intenzionale.

Scrivere:

```text
500 ≠ SQL injection
```

Un errore può derivare da moltissime cause.

La domanda corretta è:

> «Quale relazione tra input e output possiamo dimostrare?»

## Laboratorio — Input to Evidence

### GUIDED

Dare gli artefatti in sequenza, non tutti insieme.

1. baseline;
2. primo input modificato;
3. risposta anomala;
4. seconda verifica;
5. eventuale conferma.

Dopo ogni artefatto chiedere di aggiornare:

```text
FACTS
HYPOTHESIS
CONFIDENCE
NEXT TEST
```

### INDEPENDENT

Dare un secondo input e chiedere agli studenti di decidere **quale famiglia di test avrebbe senso**, senza eseguirla immediatamente.

Devono motivare:

```text
input → contesto ipotizzato → test scelto
```

### CHALLENGE

Presentare un test che non produce il risultato atteso.

Domanda:

> «Il target non è vulnerabile oppure la nostra ipotesi sul contesto era sbagliata?»

Chiedere come distinguere le due possibilità.

## Causa e remediation

Dopo aver trovato un problema, vietare per qualche minuto la parola “filter”.

Chiedere:

> «Come correggiamo la classe di problema, non questa singola stringa?»

Portare verso:

- separazione dati/codice;
- query parametrizzate;
- encoding contestuale;
- API sicure al posto della shell;
- allowlist/normalizzazione per percorsi;
- validation come misura complementare.

## Domande ricorrenti

- «Dove finisce questo input?»
- «Chi lo interpreta?»
- «Qual è la baseline?»
- «Qual è la minima differenza osservabile?»
- «È riproducibile?»
- «Quale altra causa è possibile?»
- «Abbiamo detection o conferma?»
- «Serve davvero dimostrare altro?»
- «La remediation elimina la causa?»

## Misconception da intercettare

### Payload che funziona = ho capito la vulnerabilità

No: devono capire il contesto e la causa.

### 500 = injection

No.

### Payload più aggressivo = prova migliore

Spesso una PoC minima è professionalmente migliore.

### Bloccare caratteri = remediation universale

No: insegnare correzioni strutturali.

### XSS = alert box

L'alert è solo una possibile dimostrazione; il problema è l'interpretazione di input non fidato nel browser.

## Debrief

Costruire alla lavagna:

```text
INPUT
↓
CONTESTO IPOTIZZATO
↓
EVIDENZA OSSERVATA
↓
CONTESTO CONFERMATO / SMENTITO
↓
CAUSA
↓
REMEDIATION
```

Chiedere a ogni gruppo di raccontare **un momento in cui l'evidenza ha cambiato l'ipotesi**.

Questo vale più del semplice “abbiamo trovato SQLi”.

## Evidenze da osservare

Un buon finding:

- contiene una baseline;
- mostra una modifica controllata;
- collega input e differenza osservata;
- evita overclaim;
- distingue detection e impact;
- spiega la causa;
- propone remediation strutturale.

## Adattamento del livello

### Classe debole

Dichiarare il contesto e chiedere di interpretare output già pronti.

### Classe media

Dare solo input + baseline e lasciare che formulino il test.

### Classe forte

Inserire:

- encoding diverso;
- contesto inatteso;
- filtro che modifica l'input;
- errore fuorviante;
- test valido per una famiglia ma inutile per un'altra.

## Collegamento al modulo 07

Chiudere con:

> «Finora abbiamo chiesto: cosa succede se controllo un input? Nel prossimo modulo chiediamo qualcosa di diverso: anche se la request è perfettamente valida, il server controlla davvero che io sia autorizzato a farla?»

Questo introduce authentication, authorization e API security.