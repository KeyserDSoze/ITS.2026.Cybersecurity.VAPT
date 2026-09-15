# 02 — Technical Foundations for Pentesting — Guida docente

## Obiettivo docente

Questa lezione deve costruire il ponte tra i fondamentali di rete/web e il ragionamento del pentester.

Non serve trasformarla in un corso completo di networking. Lo studente deve arrivare a capire abbastanza bene il percorso:

```text
hostname
↓
DNS
↓
IP
↓
TCP connection
↓
TLS
↓
HTTP request
↓
application
↓
backend/data
```

Il risultato desiderato è che sappia leggere una request e chiedersi **quale parte controlla identità, oggetto, azione e stato**.

## Durata suggerita

Circa **2–2,5 ore**, modulabili in base al livello emerso nel modulo 00.

```text
00:00–00:10  apertura: cosa succede quando clicco?
00:10–00:35  DNS, IP, TCP e porte
00:35–00:50  TLS e cosa HTTPS non garantisce
00:50–01:20  HTTP request/response anatomy
01:20–01:35  authentication, session, authorization
01:35–02:05  demo Follow the Request
02:05–02:25  laboratorio / dossier
02:25–02:30  debrief
```

Se dal baseline emergono lacune importanti, dedicare più tempo ai primi due blocchi.

## Preparazione

Aprire:

- lezione 02;
- dossier `labs/02-technical-foundations/`;
- browser DevTools;
- `curl`;
- una semplice applicazione UmbraMarket o, in alternativa, usare soltanto gli artefatti simulati.

Preparare alla lavagna:

```text
CLIENT → ? → ? → ? → SERVER
```

## Apertura — «Cosa succede quando clicco?»

Mostrare un URL semplice:

```text
https://shop.umbramarket.lab/profile
```

Chiedere:

> «Dal momento in cui premo Invio al momento in cui vedo la pagina, quante cose devono succedere?»

Annotare qualsiasi risposta sensata senza ordinare subito.

Poi costruire insieme la sequenza:

```text
nome
↓
risoluzione
↓
connessione
↓
canale TLS
↓
request
↓
response
```

Il punto non è ricordare ogni dettaglio del protocollo: è capire **dove osservare quando qualcosa cambia**.

## DNS

Partire da:

```text
shop.umbramarket.lab → 10.10.10.20
```

Domande:

- «Il nome e l'IP sono la stessa cosa?»
- «Più nomi possono puntare allo stesso IP?»
- «Lo stesso IP può servire applicazioni differenti?»

Collegare alla reconnaissance futura:

> «Se conosco solo l'IP potrei non conoscere ancora tutta la superficie applicativa.»

Non approfondire record DNS non necessari in questa fase.

## TCP e porte

Usare una metafora limitata:

```text
IP    = macchina raggiunta
porta = servizio/processo a cui stiamo tentando di parlare
```

Poi correggere eventuali semplificazioni eccessive.

Domanda fondamentale:

> «Se la porta 443 è aperta, cosa sappiamo esattamente?»

Riprendere il metodo del modulo 00.

## TLS

Messaggio da fissare:

> **HTTPS protegge il canale; non rende automaticamente sicura l'applicazione.**

Esempio:

```text
HTTPS + autorizzazione sbagliata = comunicazione cifrata di dati che non avresti dovuto ricevere
```

Questa frase prepara molto bene il modulo 07.

## HTTP — anatomia della request

Scrivere una richiesta alla lavagna:

```http
GET /api/orders/1001?format=full HTTP/1.1
Host: shop.umbramarket.lab
Cookie: session=abc123
Accept: application/json
```

Chiedere agli studenti di identificare:

- metodo;
- path;
- object identifier;
- query parameter;
- hostname;
- elemento che potrebbe rappresentare la sessione;
- formato atteso.

Poi mostrare una response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"orderId":1001,"owner":"alice","total":49.90}
```

Domanda:

> «Quali parti della coppia request/response sono fatti? Quali conclusioni richiedono ancora test?»

## GET / POST / PUT / DELETE

Non insegnarli come tabella da memorizzare.

Usare un oggetto `order`:

```text
GET    leggo
POST   creo/avvio un'azione
PUT    modifico/sostituisco
DELETE elimino
```

Poi precisare:

> «È una convenzione. Il comportamento reale lo decide l'applicazione e dobbiamo osservarlo.»

## Status code

Usare solo quelli utili all'inizio:

```text
200  risposta riuscita
302  redirect
400  request non accettata
401  identità richiesta/non valida
403  identità nota ma azione/accesso non consentito
404  risorsa non trovata — oppure comportamento volutamente indistinguibile
500  errore server
```

Fare attenzione a non insegnare `401 = non autenticato`, `403 = autenticato` come verità universale dell'implementazione. Presentarli come semantica attesa, poi osservare il comportamento reale.

## Authentication, Session, Authorization

Scrivere:

```text
AUTHENTICATION → chi sei?
SESSION        → come l'app ricorda chi sei tra una request e l'altra?
AUTHORIZATION  → puoi fare questa azione su questo oggetto?
```

Usare Alice:

```text
Alice fa login
↓
session cookie
↓
GET /api/orders/1001
```

Poi chiedere:

> «Quale pezzo dovrebbe impedire ad Alice di leggere l'ordine 1002 di Bob?»

Risposta: authorization server-side, non il semplice fatto di avere una sessione valida.

Non svolgere ancora tutto l'IDOR/BOLA: basta piantare il seme.

## Demo — Follow the Request

La demo deve essere lenta e verbalizzata.

### 1. Browser

Aprire una funzionalità anonima.

Dire:

> «Per ora non sto cercando vulnerabilità. Sto cercando di capire il comportamento normale.»

### 2. DevTools / proxy

Osservare la request.

Domande alla classe:

- «Qual è l'endpoint?»
- «Che metodo usa?»
- «Ci sono parametri controllabili?»
- «Che status code riceviamo?»

### 3. Login

Eseguire login e confrontare prima/dopo.

Cercare insieme:

- cookie;
- token;
- endpoint differenti;
- dati nuovi nella response.

### 4. Riproduzione con curl

Riprodurre una richiesta semplice.

Non focalizzarsi sulla sintassi del comando.

Verbalizzare:

> «Sto togliendo il browser per capire quali parti della request sono realmente necessarie.»

### 5. Modifica innocua

Cambiare un header o parametro non distruttivo e osservare.

Domanda:

> «Cosa abbiamo modificato? Cosa è rimasto uguale? Quale effetto è osservabile?»

## Laboratorio — Follow the Request

Consegnare gli artefatti del dossier in ordine.

Obiettivo:

> «Ricostruite cosa sta succedendo. Non cercate una vulnerabilità: cercate il modello del sistema.»

### GUIDED

Per una funzionalità devono produrre:

```text
METHOD
PATH
PARAMETERS
SESSION/AUTH ELEMENT
STATUS
RESPONSE DATA
```

### INDEPENDENT

Chiedere:

> «Quali elementi della request sono indispensabili perché il server la tratti come autenticata?»

### CHALLENGE

Dare due request quasi identiche con comportamento differente e far individuare **la variabile che potrebbe spiegare la differenza**.

## Domande da fare durante il laboratorio

- «Questa request è anonima o autenticata? Come lo sai?»
- «Dov'è l'identificatore dell'oggetto?»
- «Quali input può controllare l'utente?»
- «Quale elemento sembra rappresentare lo stato/sessione?»
- «Il 200 dimostra che l'operazione è corretta dal punto di vista della sicurezza?»
- «Se togliessi il cookie, cosa ti aspetteresti?»
- «Come distingueresti due possibili spiegazioni?»

## Misconception da intercettare

### HTTPS = applicazione sicura

Usare immediatamente l'esempio di un controllo accessi errato su HTTPS.

### Cookie = password

Spiegare che il cookie di sessione può rappresentare una sessione già autenticata ma non coincide necessariamente con la credenziale originaria.

### 200 = tutto corretto

Un `200 OK` descrive il risultato HTTP, non la correttezza dell'autorizzazione.

### L'interfaccia web è l'applicazione

Far vedere che la UI genera request verso endpoint e API che possono essere analizzati separatamente.

### L'endpoint “segreto” è protetto

Introduzione leggera al concetto:

> «Conoscere o non conoscere un URL non deve sostituire un controllo di accesso.»

## Debrief

Disegnare insieme:

```text
Browser
  ↓ request
Web/API
  ↓
Application logic
  ↓
Data
  ↑
response
```

Poi aggiungere:

```text
IDENTITY
SESSION
AUTHORIZATION
INPUT
```

nelle posizioni dove gli studenti pensano vengano gestite.

Chiudere con:

> «Nel pentesting web quasi tutto quello che faremo parte dal saper leggere una request e capire quale assunzione del server stiamo verificando.»

## Evidenze da osservare

Un buon deliverable `Request Anatomy` dovrebbe:

- riportare una request reale/simulata completa abbastanza da capirla;
- annotare metodo, path, parametri e auth/session;
- associare la response corretta;
- distinguere ciò che è osservato da ciò che è dedotto;
- proporre almeno una domanda di test coerente.

## Adattamento del livello

### Classe debole

Lavorare insieme su una singola request colorando/annotando ogni campo.

Fare una breve esercitazione manuale su:

```text
URL → host → path → query
```

prima di parlare di cookie/token.

### Classe media

Dossier completo e riproduzione con `curl`.

### Classe forte

Dare request ridondanti e chiedere di capire:

- cosa è essenziale;
- cosa è browser noise;
- quali elementi cambiano tra utenti;
- come formulare una prima ipotesi di authorization/session testing.

## Collegamento al modulo 03

Chiudere con:

> «Ora sappiamo leggere una singola interazione. Nella prossima lezione allarghiamo lo sguardo: quali host, porte, servizi, hostname ed endpoint compongono davvero la superficie d'attacco?»