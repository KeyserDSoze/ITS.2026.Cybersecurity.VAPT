# 01 — VAPT, Scope & Engagement — Guida docente

## Obiettivo docente

Far capire che un penetration test professionale **inizia prima dei tool**. Gli studenti devono imparare a trasformare una richiesta vaga del cliente in:

```text
OBIETTIVO
SCOPE
OUT OF SCOPE
APPROCCIO
VINCOLI
STOP CONDITION
DELIVERABLE
```

Il comportamento da allenare è: quando manca un'informazione importante, lo studente fa una domanda invece di inventare un'assunzione.

## Durata suggerita

Circa **2 ore**, modulabili.

```text
00:00–00:10  scenario cliente senza dettagli
00:10–00:30  raccolta domande della classe
00:30–00:50  scope, RoE, black/grey/white box
00:50–01:05  VA vs PT e PTES come struttura
01:05–01:35  laboratorio Client Kickoff
01:35–01:55  review dei briefing
01:55–02:00  chiusura
```

## Preparazione

Aprire:

- lezione 01;
- `labs/01-vapt-engagement/`;
- scenario UmbraMarket;
- una lavagna divisa in:

```text
CLIENTE HA DETTO | NOI DOBBIAMO CHIEDERE
```

Non mostrare subito tutte le informazioni disponibili nel dossier.

## Apertura — interpreta il cliente

Dire alla classe soltanto:

> «Siamo UmbraMarket. Stiamo per pubblicare una nuova piattaforma e vogliamo sapere se è sicura. Fateci un penetration test.»

Poi smettere di parlare.

Se chiedono «qual è l'IP?», rispondere:

> «Perché vi serve?»

Se chiedono «possiamo usare Metasploit?», rispondere:

> «Che cosa state cercando di dimostrare?»

L'obiettivo dell'apertura è creare un piccolo disagio produttivo: si accorgono che non possono partire davvero senza informazioni.

## Domande che vogliamo far emergere

Non consegnare questa lista prima dell'esercizio. Usarla come checklist docente:

- qual è l'obiettivo di business?
- quali domini/IP/app/API sono in scope?
- ci sono asset esclusi?
- produzione o staging?
- black, grey o white box?
- vengono forniti account?
- quali ruoli?
- ci sono finestre temporali?
- sono consentiti test che modificano dati?
- exploitation consentita?
- social engineering consentito?
- DoS esplicitamente escluso?
- chi contattiamo in caso di anomalia?
- quali sono le stop condition?
- come gestiamo evidenze e dati raccolti?
- cosa deve contenere il deliverable?

Non è importante che nella prima iterazione le trovino tutte. È importante discutere **perché una domanda cambia il piano di test**.

## Scope vs Rules of Engagement

Spiegazione da mantenere semplice:

```text
SCOPE = DOVE posso testare
RoE   = COME posso testare
```

Esempio:

```text
shop.umbramarket.lab       IN SCOPE
admin.umbramarket.lab      OUT OF SCOPE

Enumeration HTTP           CONSENTITA
DoS                         VIETATO
Modifica ordini reali       VIETATA
PoC minima su dati demo     CONSENTITA
```

Poi chiedere:

> «Se durante il test scopro `admin.umbramarket.lab`, posso testarlo?»

Risposta desiderata:

> «No. Posso documentare la scoperta e chiedere se lo scope può essere esteso.»

## Black / Grey / White Box

Non presentarle come definizioni da memorizzare.

Disegnare tre situazioni:

### Black box

```text
cliente → URL → tester
```

Domanda:

> «Che cosa guadagniamo in realismo e che cosa perdiamo in copertura/tempo?»

### Grey box

```text
cliente → URL + account standard → tester
```

Domanda:

> «Quali controlli diventano più facili da verificare?»

Portare la discussione verso authorization, sessioni, workflow autenticati.

### White box

```text
cliente → architettura + codice/config + account → tester
```

Domanda:

> «È meno “vero” come penetration test oppure risponde semplicemente a un obiettivo diverso?»

Il messaggio deve essere che l'approccio dipende dall'obiettivo, non da una gerarchia di prestigio.

## VA vs PT

Usare due frasi:

```text
Scanner: "questa configurazione potrebbe essere vulnerabile"
Pentest: "in queste condizioni ho verificato che produce questo impatto"
```

Poi complicare:

> «E se per dimostrare l'impatto dovessi rischiare di interrompere produzione?»

Risposta: il valore della prova deve essere bilanciato con RoE, rischio e stop condition.

## PTES

Presentarlo come **mappa del lavoro**, non checklist religiosa.

Scrivere:

```text
Pre-engagement
↓
Intelligence Gathering
↓
Threat Modeling
↓
Vulnerability Analysis
↓
Exploitation
↓
Post-Exploitation
↓
Reporting
```

Domanda:

> «Quale fase stiamo facendo adesso?»

Risposta: pre-engagement.

Poi sottolineare che saltarla rende fragili tutte le altre.

## Demo — due incarichi

Mostrare:

### A

> «Scansionate questo IP.»

### B

> «Valutate se un utente Internet non autenticato può accedere a dati cliente della nuova applicazione.»

Chiedere ai gruppi di scrivere in 3 minuti come cambierebbe il loro piano.

Far emergere:

- obiettivo misurabile;
- cosa conta come evidenza;
- cosa non serve necessariamente fare;
- differenza tra attività tecnica e domanda di rischio.

## Laboratorio — Client Kickoff

Consegnare il primo artefatto del dossier.

Regola per il docente: **non anticipare le risposte alle domande che non hanno ancora fatto**.

Se chiedono qualcosa di utile, fornire l'informazione corrispondente dal dossier.

Questo trasforma il laboratorio in una piccola simulazione di kickoff reale.

### GUIDED

Devono arrivare almeno a:

```text
OBJECTIVE
IN SCOPE
OUT OF SCOPE
APPROACH
ALLOWED / NOT ALLOWED
ESCALATION CONTACT
DELIVERABLE
```

### INDEPENDENT

Far scrivere una versione di una pagina come se dovesse essere approvata dal cliente.

### CHALLENGE

Chiedere:

> «Quali ambiguità restano e quale rischio operativo/contrattuale creano?»

## Come rispondere durante il laboratorio

Quando uno studente propone un'attività, chiedere:

- «Dove è autorizzata?»
- «Quale obiettivo supporta?»
- «Che impatto potrebbe avere?»
- «Quando ti fermeresti?»
- «Che cosa faresti se trovassi un asset correlato ma fuori scope?»

Queste domande devono diventare automatiche nel corso.

## Misconception da intercettare

### “Appartiene al cliente, quindi posso testarlo”

No. Proprietà e autorizzazione non sono la stessa cosa.

### “Black box è sempre più realistico e quindi migliore”

No. Può essere appropriato per un obiettivo, inefficiente per un altro.

### “Pentest = exploitation”

No. L'exploitation è una possibile fase e può anche non essere necessaria.

### “Se non è scritto che è vietato, è consentito”

Da correggere. Le attività sensibili devono essere chiaramente concordate.

### “Scope = lista IP”

Lo scope può includere applicazioni, API, ruoli, ambienti, dati e vincoli funzionali.

## Review dei deliverable

Prendere 2-3 briefing anonimi o volontari e leggerli come cliente.

Per ogni documento chiedere:

> «Se firmassimo questo documento oggi, domani tester e cliente avrebbero la stessa idea di cosa succederà?»

Individuare ambiguità concrete.

Esempi:

```text
"testare il sito"          troppo vago
"non fare danni"           troppo vago
"orario lavorativo"        quale timezone/fascia?
"testare gli account"      quali account/ruoli?
```

## Debrief

Chiudere facendo completare alla classe la frase:

> «Prima di lanciare il primo comando, un pentester deve…»

Punti desiderati:

- capire l'obiettivo;
- conoscere lo scope;
- conoscere i limiti;
- sapere cosa costituisce successo/evidenza;
- sapere quando fermarsi e chi contattare.

## Evidenze da osservare

Un buon deliverable:

- separa chiaramente scope/out-of-scope;
- descrive l'obiettivo in modo verificabile;
- evita formule generiche;
- include almeno una stop condition;
- rende chiaro chi può essere contattato;
- non assume permessi mai concessi.

## Adattamento del livello

### Classe debole

Fornire categorie di domande:

```text
TARGET
ACCOUNT
TEMPO
TECNICHE
DATI
CONTATTI
DELIVERABLE
```

Lasciare che formulino loro le domande specifiche.

### Classe media

Scenario aperto e informazioni rilasciate soltanto su richiesta.

### Classe forte

Aggiungere conflitti realistici:

- marketing vuole testare prima del go-live;
- IT non vuole scansioni in una certa fascia;
- un fornitore terzo gestisce un sottodominio;
- il cliente non sa se l'API sia inclusa.

Chiedere come documenterebbero le decisioni.

## Collegamento al modulo 02

Chiudere con:

> «Ora sappiamo cosa siamo autorizzati a testare. Il prossimo problema è capire che cosa succede davvero quando interagiamo con il sistema.»

Questo introduce DNS, TCP/TLS, HTTP, sessioni e request anatomy.