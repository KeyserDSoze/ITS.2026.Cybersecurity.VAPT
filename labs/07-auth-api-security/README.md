# Lab 07 — Two Users, One Object

## Scenario

UmbraMarket espone API usate dal frontend. Devi verificare se il server applica controlli di autorizzazione sugli oggetti e sulle funzioni, non soltanto se l'utente è autenticato.

## Scope GUIDED

```text
http://127.0.0.1:5005/api/*
```

Account:

```text
alice / Alice123!
bob   / Bob123!
admin / Admin123!
```

## GUIDED A — Authentication vs Authorization

Accedi come Alice e osserva:

```text
GET /api/me
GET /api/orders
```

Alice dovrebbe vedere i propri order ID `1001` e `1003`.

Apri quindi, sempre come Alice:

```text
GET /api/orders/1001
```

Questa è la baseline autorizzata.

Ora formula l'ipotesi:

> Se il server usa l'ID dell'ordine ma non verifica il proprietario, cambiare l'ID potrebbe restituire un oggetto di un altro utente.

Nel solo laboratorio locale prova:

```text
GET /api/orders/1002
```

Se ricevi i dati di Bob, hai dimostrato un difetto di object-level authorization (IDOR/BOLA).

## GUIDED B — Function-level authorization

Alice è una `customer`. Verifica la risposta di:

```text
GET /api/admin/stats
```

Domanda:

- il problema è authentication?
- oppure il server non controlla il ruolo necessario per la funzione?

## Matrice richiesta

| Endpoint | Method | Auth richiesta | Oggetto/ruolo | Baseline | Test authz | Risultato |
|---|---|---|---|---|---|---|
| | | | | | | |

## INDEPENDENT — crAPI

Per una API più realistica usa OWASP crAPI seguendo `setup-crapi.md`. Prima completa il **happy path** dell'applicazione, poi scegli un singolo scenario di authorization e applica il metodo visto sopra.

Non partire dalla lista delle challenge: prima mappa flussi, oggetti e identità.

## CHALLENGE

Cerca un'incoerenza tra due utenti, due ruoli o due endpoint equivalenti e costruisci una PoC minima senza azioni distruttive.

## Deliverable

- matrice endpoint/ruoli;
- almeno un finding di authorization;
- request baseline + request modificata + response rilevante;
- spiegazione di authentication vs authorization nel caso osservato.
