# 00 — Baseline & Pentester Mindset — Guida docente

## Obiettivo docente

Questa prima attività non deve sembrare una verifica scolastica. Serve a capire **come ragionano gli studenti** e quali fondamentali tecnici devono essere ripresi.

Il risultato che vogliamo ottenere è che la classe inizi a distinguere tre cose:

```text
FATTO OSSERVATO
IPOTESI
PROSSIMO TEST
```

Se alla fine della lezione uno studente evita frasi come «porta 443 = sito sicuro» o «banner nginx = server sicuramente nginx», la lezione ha già prodotto un cambiamento utile.

## Durata suggerita

Circa **2 ore**, modulabili.

```text
00:00–00:10  apertura e contesto
00:10–00:25  test di ingresso individuale
00:25–00:40  discussione delle risposte
00:40–01:00  mini teoria sul metodo
01:00–01:30  laboratorio First Look
01:30–01:50  confronto tra gruppi
01:50–02:00  debrief e collegamento al corso
```

Se la classe ha fondamentali deboli, questa attività può occupare più tempo e diventare il punto da cui adattare il modulo 02.

## Preparazione prima della lezione

Aprire:

- la lezione 00 sul portale;
- il dossier `labs/00-baseline-and-mindset/`;
- il taccuino del pentester nel portale;
- una lavagna con tre colonne:

```text
FACTS | HYPOTHESES | QUESTIONS / NEXT TESTS
```

Non preparare una lunga introduzione teorica. La parte più utile viene dalle risposte degli studenti.

## Apertura

Iniziare con una domanda molto semplice:

> «Se un cliente vi dà soltanto un IP o un URL e vi dice “guardate questo sistema”, qual è la prima cosa che fate?»

Lasciare rispondere liberamente.

Probabili risposte:

- «Nmap»;
- «Burp»;
- «cerco vulnerabilità»;
- «apro il sito»;
- «chiedo cosa posso fare».

Non correggere subito. Annotare le risposte e usarle più tardi.

Domanda successiva:

> «Prima ancora di scegliere uno strumento: che cosa sappiamo davvero?»

Questa deve diventare la domanda ricorrente del corso.

## Test di ingresso

Far completare il quiz senza consultare Internet o appunti.

Spiegare chiaramente:

- non è valutato;
- serve a capire da dove partire;
- gli errori sono utili al docente;
- non interessa il punteggio individuale davanti alla classe.

Durante il quiz osservare soprattutto **quanto velocemente rispondono** e quali domande generano dubbi.

## Discussione del test

Non leggere tutte le soluzioni una dopo l'altra.

Scegliere 4-5 domande che permettono di aprire concetti importanti:

### IP vs dominio

Domanda da fare:

> «Un IP corrisponde necessariamente a un solo sito?»

Portare la classe verso virtual hosting, DNS e distinzione tra nome e destinazione di rete senza approfondire ancora troppo.

### Porta aperta

Domanda:

> «Se vedo 443 aperta, cosa so? E cosa NON so?»

Risposta attesa:

```text
SO: un servizio TCP è raggiungibile su quella porta.
NON SO: tecnologia, applicazione, vulnerabilità, sicurezza del servizio.
```

### Authentication vs authorization

Usare un esempio quotidiano:

```text
badge aziendale = chi sei
porta della sala server = puoi entrare qui?
```

### CVE

Domanda:

> «Se trovo una CVE associata a una versione che credo di aver identificato, ho trovato una vulnerabilità?»

Far emergere il concetto di **ipotesi da validare**.

## Il modello mentale del corso

Scrivere alla lavagna:

```text
osservazione → ipotesi → test → evidenza → conclusione
```

Poi mostrare un esempio volutamente sbagliato:

```text
443 open
↓
HTTPS
↓
Nginx
↓
CVE
↓
vulnerabile
```

Chiedere alla classe:

> «In quanti punti abbiamo fatto un salto logico?»

Trasformarlo insieme in:

```text
443 open                         FACT
↓
provo HTTPS                      TEST
↓
ottengo una risposta HTTP        EVIDENCE
↓
header dichiara nginx            FACT
↓
forse nginx è davvero il backend HYPOTHESIS
↓
cerco altre evidenze             NEXT TEST
```

Questa è probabilmente la parte più importante della prima lezione.

## Laboratorio — First Look

Consegnare il dossier senza spiegare cosa devono trovare.

Dire soltanto:

> «Siete all'inizio di un assessment autorizzato. Questi sono i primi dati che avete raccolto. Voglio sapere che cosa sapete, che cosa pensate e cosa fareste dopo.»

### Regola

Non accettare frasi senza chiedere:

> «Come lo sai?»

Esempi:

Studente:
> «È Nginx.»

Docente:
> «Come lo sai?»

Studente:
> «C'è scritto nell'header.»

Docente:
> «Quindi che cosa sai esattamente?»

Risposta migliore:
> «La risposta dichiara Nginx. Non ho ancora verificato che sia davvero il software che serve la richiesta.»

## Cosa osservare durante il lab

Non guardare solo chi arriva alla risposta corretta.

Osservare:

- chi parte immediatamente da un tool;
- chi prende appunti;
- chi distingue fatti e inferenze;
- chi fa domande sullo scope;
- chi cerca subito una CVE;
- chi è capace di dire «non lo so ancora»;
- chi propone un test coerente con l'informazione precedente.

Queste informazioni serviranno per calibrare le lezioni successive.

## Domande da fare ai gruppi

Usare domande brevi:

- «Qual è il fatto più forte che avete?»
- «Quale vostra frase è invece un'ipotesi?»
- «Quale test vi darebbe più informazione con meno rumore?»
- «Questa informazione diventerebbe un finding?»
- «C'è qualcosa che avete scoperto ma che non siete autorizzati a testare?»
- «Se questo test desse risultato negativo, cosa cambierebbe?»

Evitare di dire immediatamente quale sia il test corretto.

## Misconception da intercettare

### Tool-first thinking

```text
Ho Nmap → faccio una scansione
```

Da trasformare in:

```text
Ho una domanda → scelgo il test/strumento che può rispondere
```

### Banner = verità

Spiegare che banner e header sono evidenze utili, ma la loro interpretazione deve essere proporzionata.

### CVE = vulnerabilità confermata

Correggere immediatamente questa equivalenza.

### Più dati = assessment migliore

Far capire che raccogliere informazioni senza una domanda può creare solo rumore.

## Debrief

Far scegliere a ogni gruppo:

1. un fatto di cui è sicuro;
2. un'ipotesi iniziale che ha dovuto correggere;
3. il prossimo test che farebbe;
4. una cosa che non farebbe senza chiarire lo scope.

Poi tornare alla domanda iniziale:

> «Qual è la prima cosa che fate quando ricevete un target?»

La risposta finale desiderata non è il nome di un tool. È qualcosa come:

> «Capisco cosa so, qual è lo scope e quale informazione mi serve per decidere il passo successivo.»

## Evidenze da osservare nel deliverable

Nel taccuino dovrebbero comparire almeno:

```text
FACTS
- dati osservati e formulati con precisione

HYPOTHESES
- interpretazioni dichiarate come tali

NEXT TESTS / QUESTIONS
- test collegati a una specifica ipotesi
```

Segnale positivo: lo studente usa parole come «indica», «suggerisce», «dichiara», «da verificare» invece di trasformare ogni indizio in una certezza.

## Adattamento del livello

### Classe molto debole

Ridurre gli artefatti e lavorare collettivamente su uno alla volta.

Fermarsi di più su:

- IP/DNS;
- porte;
- HTTP;
- autenticazione/autorizzazione.

### Classe media

Usare il dossier completo e confronto tra gruppi.

### Classe forte

Non aumentare il numero di tool. Aumentare l'ambiguità.

Chiedere:

- quali spiegazioni alternative esistono?
- quale test distingue due ipotesi?
- che confidence assegneresti alla conclusione?
- quale informazione non è abbastanza forte per il report?

## Collegamento alla lezione successiva

Chiudere con:

> «Oggi abbiamo visto che prima di testare dobbiamo sapere cosa possiamo affermare. Nella prossima lezione aggiungeremo un'altra domanda: cosa siamo autorizzati a fare?»

Questo porta direttamente a Scope & Engagement.