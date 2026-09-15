# 07 — Authentication, Authorization & API Security

## Obiettivi

- distinguere chiaramente authentication, session management e authorization;
- riconoscere controlli di accesso mancanti o inconsistenti;
- comprendere IDOR/BOLA e function-level authorization;
- analizzare API REST a partire dal traffico reale;
- introdurre token e JWT senza ridurre il test alla sola crittografia del token.

## Concetti chiave

### Authentication

Domande guida:

- come dimostra l'utente la propria identità?
- come viene gestito un login fallito?
- esistono account recovery o reset password?
- cosa avviene al logout?

### Authorization

Domande guida:

- l'applicazione controlla che l'utente possa accedere proprio a quell'oggetto?
- il controllo avviene lato server?
- un ruolo standard può invocare funzioni amministrative?

### API

Elementi da osservare:

- metodi HTTP;
- path e object ID;
- request body;
- status code;
- token;
- errori;
- differenze tra utenti e ruoli.

### JWT

Comprendere struttura e uso operativo:

```text
header.payload.signature
```

Il focus è capire come l'applicazione usa e valida il token, non imparare una lista di "JWT hacks".

## Demo — Two Users, One Object

1. Creare due identità nel target di laboratorio.
2. Eseguire la stessa funzionalità con entrambe.
3. Confrontare le request.
4. Identificare l'object identifier.
5. Formulare l'ipotesi di authorization testing.
6. Verificare il comportamento server-side nel target autorizzato.

## Lab

### CORE

Mappare almeno tre endpoint API indicando:

| Endpoint | Metodo | Auth richiesta | Oggetto/ruolo | Test di autorizzazione |
|---|---|---|---|---|

Validare almeno un controllo di accesso significativo.

### CHALLENGE

Cercare incoerenze tra:

- UI e API;
- due metodi HTTP;
- due ruoli;
- endpoint equivalenti.

### HARD MODE

Individuare un difetto di business logic o di authorization non suggerito dal nome dell'endpoint e costruire una PoC minima.

## Deliverable

Finding completo relativo ad authentication, authorization o API security.

## Messaggio chiave

> Nascondere un pulsante non è un controllo di autorizzazione. Il server deve decidere se quell'utente può eseguire quell'azione su quell'oggetto.
