# UmbraMarket — Attack Chain Canvas

> Materiale studenti. Scenario fittizio e tabletop. Le attività non tecniche restano ipotesi; le verifiche reali restano limitate al laboratorio autorizzato.

# Obiettivo

Una attack surface non è una lista di idee indipendenti.

~~~text
reception
USB
email
Wi-Fi
API
stampante
~~~

Il punto è capire come il risultato di un passaggio possa cambiare ciò che diventa possibile dopo.

~~~text
EVIDENZA
   ↓
IPOTESI 1
   ↓
RISULTATO
   ↓
NUOVA CAPACITÀ / NUOVA INFORMAZIONE
   ↓
IPOTESI 2
   ↓
RISULTATO
   ↓
...
~~~

La domanda da ripetere dopo ogni nodo è:

> Se questo passaggio avesse successo, che cosa avrei ottenuto realmente e quale nuova strada si aprirebbe?

# Stati della chain

~~~text
[O] OBSERVED
    informazione realmente osservata

[V] VALIDATED
    verificato nel laboratorio autorizzato

[A] ASSUMED
    assumiamo il successo solo per continuare il tabletop

[N] NOT TESTED
    ipotesi non verificata

[X] STOPPED
    chain interrotta per controllo, scope, costo o rischio
~~~

Se un passaggio è [A], tutto ciò che dipende da quel passaggio rimane ipotetico finché non viene verificato.

# Scheda di ogni nodo

~~~text
STEP ID:
STATO: [O] [V] [A] [N] [X]

PUNTO DI PARTENZA:
Che cosa sappiamo o assumiamo?

OBIETTIVO:
Che cosa vogliamo ottenere?

PREREQUISITI:
Che cosa deve essere vero?

CONTROLLO ATTESO:
Che cosa dovrebbe impedirlo?

VERIFICA POSSIBILE:
Come potremmo verificarlo in un engagement autorizzato?

SE FALLISCE:
Che cosa impariamo?

SE FUNZIONA:
Quale informazione, posizione, accesso o capacità otteniamo?

NEXT MOVE:
Quali nuove ipotesi diventano possibili?

STOP CONDITION:
Quando ci fermiamo?
~~~

# Esempio 1 — Sono arrivato in reception. E adesso?

Dal discovery pack sappiamo che la reception gestisce visitatori, fornitori e consegne. Questo non dimostra che una persona non autorizzata possa entrare.

Per continuare il ragionamento possiamo però usare un passaggio tabletop:

~~~text
[A]
Assumiamo che una persona non autorizzata
sia riuscita ad arrivare in un'area consentita ai visitatori.
~~~

La domanda successiva non è:

> Ho compromesso l'azienda?

È:

> Che cosa mi permette realmente questa posizione?

Nuove domande possibili:

~~~text
quali aree sono raggiungibili?
il visitatore viene accompagnato?
quali informazioni sono visibili?
quali reti sono disponibili agli ospiti?
quali processi coinvolgono visitatori e fornitori?
~~~

Supponiamo che il risultato del nodo successivo sia soltanto contesto:

~~~text
[A]
nomi delle sale
nome di un progetto
nome di un fornitore
ruoli
orari
~~~

La nuova capacità è:

~~~text
CONOSCENZA DEL CONTESTO
~~~

non:

~~~text
CREDENZIALI
ACCESSO AI SISTEMI
COMPROMISSIONE
~~~

Ora possiamo chiederci se quel contesto rende più plausibile un'altra ipotesi di processo. Anche quella rimane [N] o [A] finché non viene validata.

La lezione è:

~~~text
accesso a un'area visitatori
≠
accesso ai sistemi
≠
credenziali
≠
compromissione
~~~

Ogni freccia richiede una spiegazione.

# Esempio 2 — Informazione pubblica → processo

~~~text
[O] footprint pubblico mostra ruoli e un fornitore
        ↓
[O] interviste indicano familiarità con fornitori ricorrenti
        ↓
[N] ipotesi: familiarità + urgenza possono ridurre verifiche
        ↓
[A] assumiamo che il primo controllo di processo fallisca
        ↓
? che risultato concreto otteniamo?
~~~

Il risultato potrebbe essere soltanto una nuova informazione, un inoltro o una conferma sul processo. Non si deve saltare automaticamente a credenziali o accesso.

# Esempio 3 — USB: contare i passaggi

~~~text
[O] supporti rimovibili sono occasionalmente usati
        ↓
[A] dispositivo trovato
        ↓
[A] dispositivo raccolto
        ↓
[A] utente decide di collegarlo
        ↓
[A] endpoint consente l'uso
        ↓
[A] un contenuto produce un effetto
        ↓
[N] quell'effetto offre una nuova capacità
~~~

Quindi:

~~~text
lascio una USB
≠
comprometto l'azienda
~~~

L'esercizio serve proprio a mostrare quanti passaggi intermedi vengono spesso compressi in una sola frase.

# Esempio 4 — Chain tecnica del laboratorio

Questa può essere validata nel target locale autorizzato:

~~~text
[O] esiste Admin staging
        ↓
[O] sono esposte informazioni di implementazione
        ↓
[O] emerge un endpoint amministrativo
        ↓
[N] ipotesi: forse basta essere autenticati
        ↓
[V] customer richiede /api/admin/stats
        ↓
[V] HTTP 200
        ↓
[V] authorization verticale mancante
~~~

Qui vediamo:

~~~text
informazione
→ nuova superficie
→ ipotesi
→ verifica
→ finding
~~~

# Esempio 5 — Una chain che termina

~~~text
[O] rete guest disponibile ai visitatori
        ↓
[N] ipotesi: potrebbe raggiungere risorse interne
        ↓
[V] verifica autorizzata della segmentazione
        ↓
[X] controllo efficace
~~~

Risultato: chain terminata.

Non è un fallimento. È la dimostrazione che un controllo spezza quella attack path.

# Branching

Una chain può essere un grafo:

~~~text
NUOVA INFORMAZIONE
      │
      ├──→ pista A → troppo costosa → STOP
      │
      ├──→ pista B → controllo efficace → STOP
      │
      └──→ pista C → test minimo → EVIDENZA
~~~

Un tester non deve seguire per forza la prima strada immaginata.

# Consegna

Costruire almeno due attack chain.

## Chain A

Organizzativa, human, physical o process.

Almeno 5 nodi. Può usare [A] per continuare il tabletop.

## Chain B

Tecnica o mista.

Almeno 4 nodi e almeno un nodo derivato dal laboratorio tecnico.

Ogni chain deve contenere:

- almeno un controllo;
- almeno un possibile fallimento;
- almeno una biforcazione;
- una stop condition;
- stati [O], [V], [A], [N] o [X].

# Chain Summary

~~~text
STARTING CONDITION:

BUSINESS OBJECTIVE:

OBSERVED NODES:

VALIDATED NODES:

ASSUMED NODES:

NOT TESTED NODES:

CONTROLS ENCOUNTERED:

WHERE THE CHAIN STOPPED:

MAXIMUM IMPACT ACTUALLY DEMONSTRATED:

MAXIMUM IMPACT ONLY HYPOTHESIZED:

WHY THIS CHAIN MATTERS TO THE CLIENT:
~~~

# Regola finale

Dopo ogni nodo chiedere:

~~~text
Che cosa ho ottenuto davvero?
        ↓
Perché questo rende possibile il nodo successivo?
~~~

Se non sappiamo spiegare quella freccia, nella chain c'è un salto logico.
