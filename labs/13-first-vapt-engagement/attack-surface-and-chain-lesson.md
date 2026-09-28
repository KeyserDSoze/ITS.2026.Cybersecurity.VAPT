# UmbraMarket — Attack Surface & Attack Chain
## Come ragionare su un'organizzazione prima, durante e dopo un VAPT

> Materiale studenti.  
> Tutti i sistemi, utenti, processi, comportamenti e dati descritti sono fittizi e fanno parte del laboratorio didattico.

---

# 1. Perché questa lezione

Quando si parla di penetration testing è facile pensare subito a:

- scanner;
- porte;
- vulnerabilità;
- payload;
- exploit;
- strumenti.

Ma un'azienda non è soltanto un insieme di server.

È un sistema composto da:

~~~text
PERSONE
PROCESSI
IDENTITÀ
TECNOLOGIE
SPAZI
FORNITORI
DOCUMENTI
ABITUDINI
TEMPO
~~~

Il primo obiettivo di un tester non è quindi:

> “Dove posso lanciare un attacco?”

ma:

> “Come funziona questa organizzazione, quali confini di sicurezza esistono e dove potrebbero rompersi?”

Da qui nasce il concetto di:

~~~text
ATTACK SURFACE
~~~

e, quando iniziamo a collegare più condizioni tra loro:

~~~text
ATTACK CHAIN
~~~

---

# 2. Attack Surface: cosa significa davvero

La attack surface è l'insieme dei punti attraverso i quali un attaccante potrebbe:

- ottenere informazioni;
- entrare in contatto con un processo;
- raggiungere un sistema;
- utilizzare un'identità;
- influenzare una decisione;
- accedere a dati;
- aumentare i propri privilegi;
- ottenere una nuova posizione o capacità.

Non tutto ciò che appartiene alla attack surface è una vulnerabilità.

Esempio:

~~~text
rete Wi-Fi guest
~~~

è superficie di attacco.

Non significa automaticamente:

~~~text
Wi-Fi guest vulnerabile
~~~

Allo stesso modo:

~~~text
porta 8080 aperta
~~~

è superficie di attacco.

Non significa automaticamente:

~~~text
servizio compromesso
~~~

La distinzione fondamentale è:

~~~text
ESISTE
≠
È VULNERABILE
~~~

---

# 3. Le principali superfici di attacco

Per ragionare in modo completo possiamo dividere la superficie in più categorie.

## Technical

- servizi di rete;
- web application;
- API;
- cloud;
- endpoint;
- applicazioni;
- configurazioni;
- autenticazione;
- autorizzazione.

## Human

- abitudini;
- attenzione;
- urgenza;
- fiducia;
- familiarità;
- comunicazione.

## Physical

- ingressi;
- reception;
- sale;
- magazzini;
- dispositivi;
- documenti;
- aree condivise.

## Process

- onboarding;
- offboarding;
- reset password;
- pagamenti;
- supporto IT;
- gestione fornitori;
- approvazioni.

## Identity

- utenti;
- ruoli;
- account;
- privilegi;
- sessioni;
- MFA.

## Third-party

- corrieri;
- fornitori;
- consulenti;
- manutentori;
- impresa di pulizie;
- partner.

## Information

- siti pubblici;
- documenti;
- email;
- lavagne;
- directory;
- metadata;
- nomi di progetto.

## Time

- orari;
- turni;
- pause;
- ferie;
- scadenze;
- eventi;
- urgenze.

---

# 4. Non partire dall'attacco: partire dal fatto

Immaginiamo di leggere:

> “La postazione Windows del magazzino viene usata da più persone.”

Possiamo subito concludere:

~~~text
shared password
~~~

?

No.

Quello è un salto logico.

Il fatto è:

~~~text
più persone usano la stessa macchina
~~~

La domanda successiva dovrebbe essere:

~~~text
usano la stessa macchina
oppure anche la stessa identità?
~~~

Il metodo corretto è:

~~~text
INFORMAZIONE
      ↓
DOMANDA
      ↓
NUOVA INFORMAZIONE
      ↓
IPOTESI
      ↓
VERIFICA
~~~

---

# 5. OBSERVED, REPORTED, INFERRED

Durante un assessment dobbiamo sempre sapere da dove arriva una informazione.

## [O] OBSERVED

L'abbiamo osservata direttamente.

Esempio:

~~~text
[O] sulla porta è scritto "Server Room"
~~~

## [R] REPORTED

Qualcuno ce l'ha raccontata.

~~~text
[R] "la rete guest è isolata"
~~~

## [I] INFERRED

È una nostra interpretazione.

~~~text
[I] forse dalla guest non sono raggiungibili sistemi interni
~~~

Questa distinzione ci protegge da conclusioni sbagliate.

~~~text
REPORTED
≠
VERIFIED
~~~

e:

~~~text
INFERRED
≠
FACT
~~~

---

# 6. Dalla Attack Surface alla Attack Hypothesis

Supponiamo di osservare:

~~~text
[O]
la reception è molto occupata
tra le 08:30 e le 09:00
~~~

Possiamo formulare una ipotesi:

~~~text
[N]
forse in quella fascia
alcuni controlli sono meno rigorosi
~~~

Ma ancora non abbiamo dimostrato nulla.

Serve chiederci:

~~~text
quale controllo dovrebbe esistere?

cosa deve essere vero
perché l'ipotesi funzioni?

quanto è realistico?

è nello scope?

vale la pena verificarlo?
~~~

---

# 7. Possibile non significa conveniente

Una tecnica può essere possibile ma non interessante per l'engagement.

~~~text
POSSIBILE
≠
PLAUSIBILE
≠
AUTORIZZATO
≠
CONVENIENTE
≠
DIMOSTRATO
~~~

Un buon tester deve sapere anche scegliere:

~~~text
NON TESTARE
~~~

Per esempio una strada potrebbe essere:

- troppo costosa;
- troppo invasiva;
- fuori scope;
- poco utile;
- bloccata da un controllo;
- difficilmente verificabile;
- meno interessante di un'altra strada molto più semplice.

---

# 8. Il passaggio fondamentale: dalla Attack Surface alla Attack Chain

Una lista di possibili attacchi è solo il primo livello.

Esempio debole:

~~~text
reception
USB
phishing
Wi-Fi
API
~~~

Questo è un inventario.

Non è ancora una attack chain.

Una chain nasce quando chiediamo:

> Se questo passaggio funziona, cosa ottengo?

E poi:

> Questa nuova capacità, che cosa rende possibile?

Il modello diventa:

~~~text
STARTING CONDITION
        ↓
ACTION / HYPOTHESIS
        ↓
RESULT
        ↓
CAPABILITY GAINED
        ↓
NEW ATTACK SURFACE
        ↓
NEXT HYPOTHESIS
~~~

---

# 9. La domanda più importante di tutta la chain

Dopo ogni passaggio chiedere:

> **Che cosa ho ottenuto davvero?**

Possibili risposte:

~~~text
una informazione
una posizione fisica
un ruolo
una sessione
un account
accesso a una rete
accesso a una funzione
un endpoint
una relazione tra persone
conoscenza di un processo
accesso a un oggetto
~~~

Non bisogna saltare direttamente al risultato finale.

---

# 10. Esempio: “Sono arrivato in reception. E adesso?”

Supponiamo di avere questa condizione tabletop:

~~~text
[A]
una persona non autorizzata
è arrivata in un'area accessibile ai visitatori
~~~

[A] significa:

~~~text
ASSUMED
~~~

cioè:

> non lo abbiamo realmente validato, ma supponiamo che sia successo per continuare il ragionamento.

Adesso chiediamo:

> Che cosa abbiamo ottenuto?

Non:

~~~text
accesso ai sistemi
~~~

Non:

~~~text
credenziali
~~~

Non:

~~~text
compromissione
~~~

Forse abbiamo ottenuto soltanto:

~~~text
posizione fisica
+
visibilità su informazioni per visitatori
+
osservazione dei processi
~~~

Questo è molto diverso.

---

# 11. Continuare la chain dalla reception

Immaginiamo di osservare o assumere che nella zona siano visibili:

~~~text
nome delle sale
nome progetto
nome fornitore
orari
ruoli
~~~

La nuova capacità è:

~~~text
CONOSCENZA DEL CONTESTO
~~~

Adesso possiamo chiederci:

> Questa nuova conoscenza rende più plausibile un'altra ipotesi?

Forse sì.

Potrebbe migliorare la comprensione di:

- un processo interno;
- una relazione con un fornitore;
- una comunicazione;
- una procedura;
- un ruolo.

Ma ancora:

~~~text
CONTESTO
≠
ACCESSO
~~~

---

# 12. La chain come sequenza di condizioni

Una chain concettuale può diventare:

~~~text
[O] conosciamo il processo visitatori
        ↓
[A] accesso a area visitatori
        ↓
[A] raccolta di informazioni contestuali
        ↓
[N] nuova ipotesi su un processo
        ↓
[A] assumiamo che un controllo fallisca
        ↓
? quale capacità otteniamo?
~~~

L'ultimo punto interrogativo è importante.

Non dobbiamo inventare il risultato.

Dobbiamo descriverlo.

---

# 13. Ogni freccia deve essere spiegata

Consideriamo questa chain:

~~~text
reception
→ credenziali
→ rete interna
→ domain admin
~~~

È una chain molto debole.

Perché?

Perché ogni freccia nasconde molti passaggi.

Dobbiamo chiedere:

~~~text
reception
→ come ottengo credenziali?

credenziali
→ di quale account?

account
→ su quale servizio?

servizio
→ con quali privilegi?

privilegi
→ cosa mi permettono?

rete interna
→ esiste segmentazione?

MFA?
approvazioni?
ruoli?
logging?
EDR?
~~~

La domanda da usare sempre è:

> **Che cosa rende valida questa freccia?**

---

# 14. Lo stato dei nodi

Per evitare di confondere ipotesi e fatti possiamo usare:

~~~text
[O] OBSERVED
    osservato

[V] VALIDATED
    verificato nel laboratorio

[A] ASSUMED
    supponiamo che abbia funzionato
    soltanto per continuare il tabletop

[N] NOT TESTED
    ipotesi non verificata

[X] STOPPED
    chain interrotta
~~~

Questo permette di costruire una chain lunga senza fingere di averla realmente eseguita.

---

# 15. Esempio completo: USB

Partiamo da:

~~~text
[O]
in azienda vengono occasionalmente
utilizzati supporti rimovibili
~~~

Una chain realistica deve contenere più passaggi:

~~~text
[O] uso occasionale di USB
        ↓
[A] una persona trova un dispositivo
        ↓
[A] decide di raccoglierlo
        ↓
[A] decide di collegarlo
        ↓
[A] il sistema permette l'uso
        ↓
[A] il contenuto produce un effetto
        ↓
[N] quell'effetto fornisce una nuova capacità
~~~

Quindi:

~~~text
USB lasciata
≠
compromissione
~~~

La lezione è proprio imparare a vedere tutti i passaggi intermedi.

---

# 16. Esempio completo: Guest Wi-Fi

Partiamo da:

~~~text
[O]
esiste una rete guest
~~~

Ipotesi:

~~~text
[N]
forse dalla guest sono raggiungibili
risorse interne
~~~

Verifica autorizzata:

~~~text
[V]
testiamo la segmentazione
~~~

Risultato:

~~~text
[X]
il controllo funziona
~~~

La chain termina.

Questo non è un fallimento.

Abbiamo verificato che un controllo spezza l'attacco.

---

# 17. Esempio completo: Admin staging

Questa chain può essere verificata realmente nel laboratorio.

~~~text
[O] esiste Admin staging
        ↓
[O] sono esposte informazioni di implementazione
        ↓
[O] emerge un endpoint amministrativo
        ↓
[N] ipotesi:
    forse il server controlla solo autenticazione
        ↓
[V] customer richiede /api/admin/stats
        ↓
[V] HTTP 200
        ↓
[V] authorization verticale mancante
~~~

Qui possiamo vedere perfettamente:

~~~text
INFORMAZIONE
→ NUOVA SUPERFICIE
→ IPOTESI
→ TEST
→ EVIDENZA
→ FINDING
~~~

---

# 18. Esempio completo: BOLA sugli ordini

Partenza:

~~~text
[O]
esiste /api/orders/{id}
~~~

Osserviamo:

~~~text
[O]
gli identificatori sono numerici
~~~

Questo non dimostra una vulnerabilità.

Ipotesi:

~~~text
[N]
forse il backend verifica autenticazione
ma non ownership
~~~

Baseline:

~~~text
[V]
Alice → ordine Alice

[V]
Bob → ordine Bob
~~~

Test:

~~~text
[V]
Alice → ordine Bob
~~~

Observed:

~~~text
[V]
HTTP 200 + dati ordine Bob
~~~

Conclusione:

~~~text
[V]
object-level authorization failure
~~~

Questa è una chain corta ma completamente supportata da evidenza.

---

# 19. Le chain possono avere rami

Una attack chain non deve essere per forza lineare.

~~~text
NUOVA INFORMAZIONE
      │
      ├──→ PISTA A
      │      ↓
      │   troppo costosa
      │      ↓
      │    [X] STOP
      │
      ├──→ PISTA B
      │      ↓
      │   controllo efficace
      │      ↓
      │    [X] STOP
      │
      └──→ PISTA C
             ↓
          test minimo
             ↓
          [V] evidenza
~~~

Questa è spesso una rappresentazione più realistica del lavoro di un tester.

---

# 20. Attack Chain non significa “andare fino in fondo”

Una attack chain può essere pensata fino a un possibile impatto finale.

Ma non significa che dobbiamo eseguirla completamente.

Possiamo distinguere:

~~~text
MAXIMUM DEMONSTRATED IMPACT
~~~

da:

~~~text
MAXIMUM HYPOTHESIZED IMPACT
~~~

Esempio:

~~~text
DEMONSTRATED:
Alice legge un ordine di Bob.

HYPOTHESIZED:
la stessa debolezza potrebbe riguardare
altri oggetti con controllo simile.
~~~

Non dobbiamo trasformare il secondo punto in un fatto.

---

# 21. Il controllo è parte della chain

Un errore comune è disegnare solo azioni dell'attaccante.

Una buona chain contiene anche:

~~~text
MFA
segmentazione
role check
ownership check
reception
approvazione
callback
EDR
session timeout
logging
~~~

Perché ogni controllo può:

~~~text
bloccare
ridurre
rilevare
ritardare
rendere più costoso
~~~

un passaggio.

---

# 22. Una chain può essere utile anche se fallisce

Esempio:

~~~text
[O] guest Wi-Fi
        ↓
[N] possibile accesso a rete interna
        ↓
[V] test segmentazione
        ↓
[X] isolamento efficace
~~~

Risultato:

~~~text
CONTROL EFFECTIVE
~~~

È comunque informazione utile per il cliente.

---

# 23. Come si valida una chain

Non dobbiamo per forza validare tutto.

Possiamo dividere la chain:

~~~text
OBSERVED
VALIDATED
ASSUMED
NOT TESTED
STOPPED
~~~

Esempio:

~~~text
[O] ruolo dipendente pubblico
        ↓
[O] fornitore noto
        ↓
[N] ipotesi di processo
        ↓
[A] supponiamo che il primo controllo fallisca
        ↓
[N] possibile nuova capacità
~~~

Questa è:

~~~text
THREAT SCENARIO
~~~

non ancora:

~~~text
CONFIRMED FINDING
~~~

---

# 24. Come si racconta una chain nel report

Nel report dobbiamo distinguere:

## Confirmed Finding

Ciò che abbiamo realmente validato.

## Attack Path / Threat Scenario

Ciò che potrebbe accadere se determinati prerequisiti fossero veri.

Quindi non scrivere:

> “Un attaccante può arrivare al dominio.”

se abbiamo soltanto ipotizzato metà dei passaggi.

Meglio:

> “La combinazione osservata potrebbe rendere plausibile una successiva escalation, ma i passaggi intermedi non sono stati validati durante questo engagement.”

---

# 25. Esercizio mentale: “E poi?”

Ogni volta che trovi qualcosa, prova a fare questo esercizio.

~~~text
Ho trovato X.
↓
E poi?

Se X funziona, ottengo Y.
↓
E poi?

Y mi permette di tentare Z.
↓
E poi?

Quale controllo esiste?
↓
E poi?

Se il controllo funziona → STOP.
Se fallisce → nuova capability.
~~~

Questo semplice “e poi?” è uno dei modi migliori per imparare a pensare per chain.

---

# 26. Il modello completo

Quando vuoi costruire una chain, usa questo schema:

~~~text
STARTING CONDITION

↓
WHAT DO I KNOW?

↓
HYPOTHESIS

↓
PRECONDITIONS

↓
CONTROL EXPECTED

↓
TEST / TABLETOP STEP

↓
RESULT

↓
CAPABILITY GAINED

↓
NEW ATTACK SURFACE

↓
NEXT HYPOTHESIS

↓
STOP / BRANCH / CONTINUE
~~~

---

# 27. Cosa valutare in una buona Attack Chain

Una buona chain:

- non contiene salti logici;
- distingue fatti e ipotesi;
- dice cosa viene ottenuto a ogni passaggio;
- considera i controlli;
- può fermarsi;
- può ramificarsi;
- non confonde “potrebbe” con “abbiamo dimostrato”;
- resta collegata all'obiettivo del cliente.

Una chain lunga non è automaticamente migliore.

Una chain chiara sì.

---

# 28. Dalla Attack Surface alla Chain in una frase

Possiamo riassumere tutto così:

~~~text
ATTACK SURFACE
=
dove potrei provare

ATTACK CHAIN
=
come un successo
cambia ciò che posso provare dopo
~~~

---

# 29. Le domande da ricordare

Per ogni elemento:

~~~text
COSA VEDO?

È UN FATTO O UNA IPOTESI?

COSA MI MANCA?

QUAL È IL CONTROLLO?

SE FUNZIONA,
COSA OTTENGO DAVVERO?

CHE NUOVA SUPERFICIE SI APRE?

QUAL È IL PASSAGGIO SUCCESSIVO?

CHE COSA RENDE VALIDA QUESTA FRECCIA?

È NELLO SCOPE?

VALE LA PENA?

COSA HO DIMOSTRATO?

COSA STO SOLO IPOTIZZANDO?

DOVE DEVO FERMARMI?
~~~

---

# 30. Messaggio finale

Il penetration testing non è una sequenza di tool.

È un processo di ragionamento:

~~~text
OSSERVO
  ↓
FORMULO UNA IPOTESI
  ↓
IDENTIFICO I PREREQUISITI
  ↓
CERCO IL CONTROLLO
  ↓
VERIFICO
  ↓
OTTENGO UNA NUOVA CAPACITÀ
  ↓
AGGIORNO LA ATTACK SURFACE
  ↓
DECIDO IL PASSO SUCCESSIVO
~~~

E la regola più importante rimane:

> **Ogni freccia della attack chain deve essere spiegabile.**

Se non sappiamo spiegare perché il risultato di un passaggio rende possibile quello successivo, probabilmente stiamo saltando una parte del ragionamento.

---

# 31. Da usare insieme al laboratorio

Per esercitarti usa:

~~~text
discovery/
    informazioni sul cliente

attack-chain-canvas.md
    costruzione guidata delle chain

assessment-decision-board.md
    scelta delle piste

student-workbook.md
    evidenze e ipotesi

reporting/
    trasformazione dei risultati in report
~~~

Il percorso completo è:

~~~text
CLIENTE
→ ATTACK SURFACE
→ IPOTESI
→ ATTACK CHAIN
→ PRIORITIZZAZIONE
→ VA
→ VALIDAZIONE
→ EVIDENZA
→ FINDING
→ REPORT
~~~
