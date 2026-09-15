# Lab 02 — Follow the HTTP Request

## Scenario

Ora UmbraMarket ti ha dato accesso alla piccola applicazione Guided Lab. Devi capire **come una funzionalità viaggia dal browser al server** prima di provare a modificarla.

## Scope

```text
http://127.0.0.1:5005
```

## Setup

```bash
cd labs/platform
docker compose up -d --build
```

## GUIDED — Dalla richiesta anonima alla sessione

### Step 1 — Una richiesta semplice

```bash
curl -i http://127.0.0.1:5005/api/health
```

Identifica:

- metodo implicito;
- path;
- status code;
- `Content-Type`;
- almeno un header della risposta;
- dati principali del body.

### Step 2 — Endpoint protetto senza login

```bash
curl -i http://127.0.0.1:5005/api/me
```

Domanda: perché `401` ha senso qui? Che differenza avrebbe un `403`?

### Step 3 — Crea una sessione

```bash
curl -i -c cookies.txt \
  -d 'username=alice&password=Alice123!' \
  http://127.0.0.1:5005/login
```

Apri `cookies.txt` e individua il cookie di sessione.

Poi:

```bash
curl -i -b cookies.txt http://127.0.0.1:5005/api/me
```

Confronta le due risposte di `/api/me`: prima e dopo il login.

### Step 4 — Anatomia di una request autenticata

Ricostruisci in forma testuale:

```http
GET /api/me HTTP/1.1
Host: 127.0.0.1:5005
Cookie: ...
```

Segna cosa è necessario per identificare la risorsa e cosa rappresenta l'identità/sessione.

## INDEPENDENT

Usa browser DevTools o Burp/ZAP per osservare la funzione `Dashboard` e documenta:

- request per `/api/orders`;
- cookie o token usato;
- status code;
- struttura della risposta;
- differenza tra chiamata anonima e autenticata.

## CHALLENGE

Riproduci una request del browser con `curl` usando soltanto gli elementi realmente necessari. Rimuovi un elemento alla volta e annota cosa cambia.

## Deliverable

Una pagina `Request Anatomy` con:

```text
Browser → HTTP request → UmbraMarket → HTTP response → Browser
```

più una request annotata riga per riga.

## Cleanup

Elimina `cookies.txt` al termine perché contiene una sessione didattica.
