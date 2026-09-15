# Lab 02 — Follow the Request

## Scenario

Un utente visita il proprio profilo UmbraMarket. Il browser genera diverse richieste. Il vostro lavoro è ricostruire **che cosa sta succedendo**, non cercare vulnerabilità.

## Dossier

1. `artifacts/01-anonymous-request.txt`
2. `artifacts/02-login-response.txt`
3. `artifacts/03-profile-request.txt`
4. `artifacts/04-profile-response.txt`

## GUIDED

Per ogni request/response identificare:

- metodo HTTP;
- path;
- hostname;
- status code;
- content type;
- presenza di cookie/token;
- dato controllato dal client;
- dato prodotto dal server.

## Domande

1. Cosa cambia tra navigazione anonima e autenticata?
2. Quale elemento sembra rappresentare la sessione?
3. Il solo fatto di possedere un cookie dimostra quali autorizzazioni abbiamo?
4. Quale richiesta riprodurresti per prima per capire il comportamento dell'applicazione?

## INDEPENDENT

Disegnare:

```text
Browser -> Web App -> API -> Data
```

aggiungendo su ogni freccia le informazioni osservate nel dossier.

## CHALLENGE

Individuare almeno tre elementi della request che il client potrebbe modificare e formulare, per ciascuno, una domanda di sicurezza sensata.

## Deliverable

Una request annotata riga per riga e un diagramma del flusso.