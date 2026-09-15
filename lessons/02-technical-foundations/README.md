# 02 — Technical Foundations for Pentesting

## Obiettivi

- ripassare i fondamentali necessari per capire ciò che avviene durante un test;
- collegare rete, DNS, TLS e HTTP al comportamento reale di un'applicazione;
- distinguere autenticazione, sessione e autorizzazione;
- imparare a leggere una richiesta HTTP prima di modificarla.

## Concetti chiave

### Rete

Ripasso operativo di:

- indirizzo IP;
- subnet a livello intuitivo;
- TCP vs UDP;
- porte;
- client e server;
- socket e connessione.

### DNS

Dal nome al target:

```text
hostname → DNS resolution → IP
```

Discutere perché record DNS, sottodomini e nomi host possono ampliare la superficie d'attacco.

### TLS

Obiettivo didattico: capire che HTTPS protegge il canale ma non rende automaticamente sicura l'applicazione.

### HTTP

Anatomia minima:

```http
GET /api/profile HTTP/1.1
Host: app.lab
Cookie: session=...
Authorization: Bearer ...
```

Analizzare:

- method;
- path;
- query string;
- header;
- body;
- status code;
- content type.

### Authentication vs Authorization

Esempio:

```text
Authentication: chi sei?
Authorization: cosa puoi fare?
```

Mostrare perché essere autenticati non implica poter accedere a qualunque oggetto o funzione.

### Sessioni e token

Spiegare a livello operativo:

- session cookie;
- bearer token;
- scadenza;
- logout;
- rinnovo;
- differenza tra stato lato server e token self-contained, senza entrare ancora nei dettagli JWT.

## Demo

1. Aprire una semplice applicazione web.
2. Osservare una richiesta dal browser.
3. Riprodurla con `curl`.
4. Modificare un header innocuo.
5. Eseguire login.
6. Confrontare traffico anonimo e autenticato.

Il focus della demo deve essere sul ragionamento, non sulla sintassi.

## Lab — Follow the Request

Gli studenti ricevono una piccola applicazione e devono ricostruire il flusso di una funzionalità.

### CORE

Per una funzionalità indicata, documentare:

- metodo HTTP;
- endpoint;
- parametri;
- meccanismo di autenticazione;
- response code;
- dati principali della risposta.

### CHALLENGE

Riprodurre la richiesta fuori dal browser e identificare quali elementi sono realmente necessari perché funzioni.

### HARD MODE

Individuare una richiesta che cambia comportamento modificando soltanto un elemento tra path, parametro, header, cookie o token e spiegare perché.

## Deliverable

Una pagina "Request Anatomy" con una request annotata e un diagramma semplice:

```text
Browser → Web/API → Backend → Data
```

## Collegamento al corso

Questa lezione è il prerequisito pratico per:

- proxy interception;
- access control testing;
- injection;
- API security;
- session testing.
