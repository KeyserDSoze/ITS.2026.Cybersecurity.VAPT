# 07 — Authentication, Authorization & API Security

## Missione di oggi

Alice e Bob sono due clienti UmbraMarket. Entrambi hanno fatto login correttamente. La domanda di oggi è:

> "Il server sa davvero distinguere **chi sei** da **cosa puoi fare** e **quali oggetti puoi usare**?"

Questa distinzione è alla base di molti problemi API reali.

## Prima di iniziare — test rapido

Il pre-test ti propone scenari con login, sessioni, object ID e ruoli. Devi capire quale controllo è coinvolto.

## Cosa imparerai

- distinguere authentication, session management e authorization;
- riconoscere controlli di accesso orizzontali e verticali;
- capire IDOR/BOLA;
- mappare una REST API dal traffico reale;
- leggere un JWT a livello operativo;
- testare differenze tra utenti/ruoli senza affidarti alla UI.

## 1. Authentication

Risponde a:

> Chi sei?

Esempi di aree da osservare:

- login;
- errori e rate limiting;
- reset password;
- MFA, se presente;
- logout;
- gestione delle credenziali.

Il fatto che un utente abbia superato il login non dice nulla su ciò che può fare dopo.

## 2. Session management

Dopo il login il sistema deve associare le richieste successive all'identità corretta.

Può farlo tramite:

- session cookie;
- bearer token;
- altri meccanismi applicativi.

Domande utili:

- il token cambia dopo il login?
- scade?
- il logout lo invalida?
- può essere riutilizzato?
- è associato correttamente all'utente?

## 3. Authorization

Risponde a:

> Questo utente può eseguire **questa azione** su **questo oggetto**?

### Orizzontale

Alice e Bob hanno lo stesso ruolo, ma Alice accede all'oggetto di Bob.

### Verticale

Un utente standard esegue una funzione riservata ad admin/staff.

Entrambi sono problemi di authorization.

## 4. IDOR / BOLA

Esempio:

```http
GET /api/orders/1001
Cookie: session=alice
```

Se `1001` è l'ordine di Alice, prova concettuale:

```text
cambio object ID → osservo decisione server-side
```

Se sostituendo l'ID con quello di Bob il server restituisce i dati, il problema non è il fatto che l'ID sia "prevedibile": è la **mancanza di un controllo di autorizzazione sull'oggetto**.

## 5. Function-level authorization

Request:

```http
POST /api/admin/products
Authorization: Bearer <standard-user-token>
```

La UI potrebbe non mostrare mai questo endpoint a un utente standard. Il server deve comunque rifiutare l'azione.

## 6. Mappare una API

Per ogni endpoint registra:

| Metodo | Path | Auth | Oggetto | Ruolo | Effetto |
|---|---|---|---|---|---|

Poi confronta:

- anonimo vs autenticato;
- Alice vs Bob;
- user vs admin;
- GET vs PUT/DELETE;
- UI vs request diretta.

## 7. JWT

Un JWT ha struttura:

```text
header.payload.signature
```

Header e payload sono normalmente leggibili: non vanno confusi con dati cifrati.

Il test importante non è "fare trucchi al token" in astratto, ma capire:

- come viene emesso;
- quali claim contiene;
- cosa usa il server per autorizzare;
- come valida integrità e scadenza;
- cosa succede se cambiano ruolo o sessione.

## Esempio svolto — Two Users, One Object

Alice:

```http
GET /api/orders/1001
Authorization: Bearer ALICE_TOKEN
```

Bob:

```http
GET /api/orders/1002
Authorization: Bearer BOB_TOKEN
```

Test controllato nel laboratorio:

```text
ALICE_TOKEN + /api/orders/1002
```

Possibili risultati:

- `403/404` coerente → controllo potenzialmente corretto, da contestualizzare;
- `200` con dati di Bob → forte evidenza di broken object level authorization.

## Laboratorio — Two Users, One Object

### GUIDED

1. accedi con Alice e Bob;
2. cattura la stessa funzione per entrambi;
3. confronta request e response;
4. identifica token/sessione e object ID;
5. formula esplicitamente l'ipotesi;
6. esegui una sola variazione controllata;
7. documenta la decisione server-side.

### Se sei bloccato

**Hint 1:** cerca request quasi identiche che differiscono per utente o object ID.

**Hint 2:** chiediti quale dato rappresenta l'identità e quale rappresenta la risorsa.

### INDEPENDENT

Mappa almeno tre endpoint e definisci per ognuno un test di authorization appropriato.

### CHALLENGE

Trova una differenza di controllo tra UI/API, metodi diversi o ruoli diversi. Se individui un difetto, costruisci la PoC minima necessaria.

## Deliverable professionale

Finding di authentication/authorization/API oppure, se i controlli risultano corretti, una **test evidence sheet** che descriva cosa hai verificato e con quale risultato.

## Prima di chiudere

Dovresti saper spiegare:

- perché authentication e authorization non sono sinonimi;
- perché un ID prevedibile non è da solo una vulnerabilità;
- perché nascondere un endpoint nella UI non basta;
- quali confronti sono più utili nel test API.

Completa l'autoverifica finale.

> Il server deve decidere se quell'utente può eseguire quell'azione su quell'oggetto.