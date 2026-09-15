# 07 — Authentication, Authorization & API Security — Guida docente

## Obiettivo docente

Far capire agli studenti che **login riuscito non significa accesso autorizzato a qualunque risorsa**.

Il modello da fissare è:

```text
IDENTITÀ
↓
SESSIONE / TOKEN
↓
AZIONE
↓
OGGETTO
↓
DECISIONE SERVER-SIDE
↓
ALLOWED / DENIED
```

La domanda centrale della lezione è:

> «Questo utente può fare questa azione su questo oggetto?»

## Durata suggerita

Circa **3 ore**.

```text
00:00–00:15  apertura: Alice e Bob hanno entrambi fatto login
00:15–00:40  authentication vs session vs authorization
00:40–01:05  horizontal / vertical access control
01:05–01:25  API mapping e object ID
01:25–01:45  JWT a livello operativo
01:45–02:25  laboratorio Two Users, One Object
02:25–02:45  finding e stop condition
02:45–03:00  debrief
```

## Preparazione

Aprire:

- lezione 07;
- `labs/07-auth-api-security/`;
- gli artefatti Alice/Bob;
- proxy o output simulati;
- template finding.

Preparare una tabella:

| Utente | Sessione/token | Metodo | Endpoint | Object ID | Expected | Observed |
|---|---|---|---|---|---|---|

## Apertura

Scrivere:

```text
Alice → login OK
Bob   → login OK
```

Poi chiedere:

> «Se Alice è autenticata, può leggere l'ordine di Bob?»

Questa domanda deve separare immediatamente authentication e authorization.

Alla lavagna:

```text
AUTHENTICATION = chi sei?
AUTHORIZATION  = cosa puoi fare su quale risorsa?
SESSION        = come il server collega le richieste successive alla tua identità?
```

## Sessione

Mostrare due request quasi identiche con cookie/token diversi.

Chiedere:

- quale elemento rappresenta l'identità?
- il token è il permesso o solo un mezzo per riconoscere l'utente?
- chi deve prendere la decisione finale?

Messaggio:

> «Il token porta informazioni o identità; l'autorizzazione è una decisione che il server deve comunque applicare.»

## Horizontal access control

Usare Alice e Bob con stesso ruolo.

Esempio:

```text
Alice → /api/orders/1001
Bob   → /api/orders/1002
```

Chiedere:

> «Quale singola variazione ci permetterebbe di verificare object-level authorization?»

Portare verso:

```text
Alice session + Bob object ID
```

Non pronunciare subito IDOR/BOLA. Prima far emergere il controllo mancante.

## Vertical access control

Esempio concettuale:

```text
utente standard → endpoint amministrativo
```

Domanda:

> «Se il pulsante Admin non compare nella UI, siamo protetti?»

Riprendere la lezione 05: la decisione deve stare server-side.

## IDOR / BOLA

Dopo il ragionamento, introdurre il nome.

Messaggio chiave:

> «L'ID prevedibile non è il problema. Il problema è che il server usa l'ID senza verificare che l'utente possa accedere a quell'oggetto.»

Scrivere:

```text
predictable ID ≠ vulnerability
missing object authorization = vulnerability
```

## API mapping

Costruire una matrice:

| Metodo | Path | Auth | Object | Role | Security question |
|---|---|---|---|---|---|

Chiedere agli studenti di confrontare:

- anonimo vs autenticato;
- Alice vs Bob;
- user vs admin;
- GET vs PUT/DELETE;
- UI vs request diretta.

Il valore didattico sta nel **confronto sistematico**.

## JWT

Non trasformare questa sezione in una lista di “JWT attacks”.

Mostrare:

```text
header.payload.signature
```

Spiegare:

- header e payload sono normalmente leggibili;
- la firma protegge l'integrità, se validata correttamente;
- claim e ruolo non vanno semplicemente “fidati” dal client;
- scadenza e validazione contano;
- il token non elimina la necessità di authorization server-side.

Domanda:

> «Se nel payload vedo `role=user`, chi deve decidere se posso chiamare `/admin`?»

Risposta: il server secondo le sue regole di autorizzazione.

## Demo — Two Users, One Object

Mostrare prima soltanto:

```http
GET /api/orders/1001
Authorization: Bearer ALICE_TOKEN
```

poi:

```http
GET /api/orders/1002
Authorization: Bearer BOB_TOKEN
```

Chiedere agli studenti di scrivere:

```text
IDENTITY
OBJECT
EXPECTED POLICY
```

Solo dopo mostrare il test controllato:

```text
ALICE_TOKEN + /api/orders/1002
```

Prima di mostrare la risposta chiedere:

> «Quale risposta ci aspettiamo da un controllo corretto?»

Possibili risposte coerenti: 403, 404 o altra negazione applicativa, a seconda del design.

## Laboratorio — Two Users, One Order

Il dossier contiene utenti e dati completamente fittizi.

### GUIDED

Far aprire gli artefatti nell'ordine previsto.

Dopo i primi due, fermarsi e chiedere:

- cosa identifica Alice?
- cosa identifica Bob?
- qual è l'object ID?
- quale dovrebbe essere la policy?
- quale singolo test la verifica?

Poi mostrare il terzo artefatto.

### Stop condition

Se Alice riceve l'ordine di Bob, fermarsi.

Scrivere alla lavagna:

```text
EVIDENCE SUFFICIENTE
≠
ENUMERARE TUTTI GLI ORDINI
```

Questo è un momento importante per il comportamento professionale.

### INDEPENDENT

Far mappare almeno tre endpoint e chiedere un test appropriato per ciascuno.

Non è necessario eseguire ogni test: interessa il piano ragionato.

### CHALLENGE

Presentare una discrepanza tra:

- UI e API;
- GET e PUT;
- user e staff;
- due endpoint simili.

Chiedere di identificare quale controllo potrebbe essere inconsistente.

## Dal test al finding

Far compilare:

```text
PRECONDITION
ACTION
EXPECTED
OBSERVED
IMPACT
STOP CONDITION
REMEDIATION
```

Domanda:

> «Come descriviamo l'impatto senza inventare ciò che non abbiamo testato?»

Esempio corretto:

```text
Un utente autenticato può accedere a un ordine appartenente a un altro utente conoscendone l'identificatore.
```

Evitare overclaim tipo:

```text
Tutti i dati di tutti i clienti sono compromessi.
```

se non dimostrato.

## Remediation

Portare gli studenti verso il controllo server-side per ogni accesso a risorse protette:

```text
request user
+
requested object
↓
authorization decision
```

Non accettare come remediation:

- rendere gli ID più lunghi;
- nascondere il pulsante;
- oscurare l'endpoint;
- usare UUID come unica misura.

Queste possono ridurre enumerabilità, ma non sostituiscono authorization.

## Domande ricorrenti

- «Chi sei in questa request?»
- «Qual è l'oggetto?»
- «Quale policy dovrebbe valere?»
- «Chi applica la decisione?»
- «Che cosa cambia tra Alice e Bob?»
- «Il problema è l'ID o il controllo?»
- «Abbiamo già abbastanza evidenza?»
- «Stiamo descrivendo ciò che abbiamo dimostrato o qualcosa di più?»

## Misconception da intercettare

### Login riuscito = tutto ciò che faccio dopo è autorizzato

No.

### ID numerico = IDOR

No: serve un controllo di accesso mancante/inadeguato.

### UUID risolve BOLA

No: authorization deve comunque esistere.

### UI nascosta = funzione protetta

No.

### JWT = dati cifrati

Normalmente header e payload sono codificati, non cifrati.

### 404 significa controllo sicuro

Non necessariamente: va interpretato nel comportamento complessivo.

## Debrief

Disegnare:

```text
             ORDER 1001     ORDER 1002
Alice             ✓              ?
Bob               ?              ✓
Admin             ?              ?
```

Chiedere alla classe di riempire la matrice secondo la policy attesa e poi secondo quanto osservato.

La differenza tra le due matrici rappresenta il problema.

## Evidenze da osservare

Un buon lavoro:

- distingue identità e oggetto;
- formula la policy attesa prima del test;
- cambia una sola variabile;
- conserva request/response utili;
- si ferma quando la prova è sufficiente;
- descrive l'impatto senza extrapolare;
- propone authorization server-side come remediation.

## Adattamento del livello

### Classe debole

Dare già Alice, Bob e object ID evidenziati e chiedere di costruire expected/observed.

### Classe media

Lasciare che identifichino gli elementi nelle request.

### Classe forte

Aggiungere:

- endpoint con controlli corretti e scorretti mescolati;
- ruoli differenti;
- metodi diversi sullo stesso oggetto;
- claim JWT che non coincidono con il comportamento effettivo;
- errori 403/404 intenzionalmente diversi.

## Collegamento al modulo 08

Chiudere con:

> «Finora abbiamo validato vulnerabilità applicative con prove minime. Nel prossimo modulo affrontiamo una domanda più delicata: quando ha senso passare dalla conferma all'exploitation e come decidiamo dove fermarci?»

Questo introduce controlled exploitation.