# 02 — Technical Foundations for Pentesting

## Missione di oggi

Prima di modificare una richiesta HTTP o interpretare un output di Nmap devi capire **cosa sta realmente succedendo tra il tuo browser e il target**.

Oggi seguirai una singola richiesta dall'inizio alla fine: nome DNS, connessione, TLS, HTTP, sessione e autorizzazione.

## Prima di iniziare — test rapido

Fai il test iniziale nel portale. Ti farà lavorare su IP, porte, DNS, HTTP e autenticazione. Se alcune domande sembrano difficili, va bene: sono esattamente i concetti che riprendiamo qui.

## Cosa imparerai

- leggere una richiesta e una risposta HTTP;
- capire a cosa servono IP, porte e DNS;
- distinguere TCP e UDP a livello operativo;
- capire cosa protegge TLS e cosa non protegge;
- distinguere autenticazione, sessione e autorizzazione;
- riprodurre una richiesta semplice fuori dal browser.

## 1. Dal nome al server

Quando apri:

```text
https://shop.umbramarket.lab/profile
```

il browser non "parla" direttamente con quel nome. In modo semplificato:

```text
hostname
   ↓ DNS
indirizzo IP
   ↓ connessione
porta TCP
   ↓ TLS
canale cifrato
   ↓ HTTP
richiesta applicativa
```

### IP

Un indirizzo IP identifica un'interfaccia raggiungibile in rete. Non identifica necessariamente un singolo sito: sullo stesso IP possono convivere più servizi e più virtual host.

### Porta

La porta aiuta a identificare quale servizio applicativo deve ricevere la connessione. La presenza di una porta aperta dice soltanto che un servizio è raggiungibile, non che sia vulnerabile.

### TCP e UDP

Per questa fase ti basta ricordare:

- **TCP** crea una comunicazione orientata alla connessione e ordinata;
- **UDP** invia datagrammi senza la stessa gestione della connessione.

Molti servizi web usano TCP; altri protocolli possono usare UDP.

## 2. DNS: dal nome all'indirizzo

DNS associa nomi a informazioni di rete.

Esempio:

```text
shop.umbramarket.lab → 10.10.10.20
```

Per un pentester DNS è interessante perché nomi e record possono rivelare **altri asset**:

```text
api.umbramarket.lab
admin.umbramarket.lab
files.umbramarket.lab
```

### Prova tu

Se `shop` e `admin` risolvono allo stesso IP, sono automaticamente la stessa applicazione?

**No.** Lo stesso server/IP può distinguere la richiesta in base all'hostname.

## 3. TLS e HTTPS

HTTPS è HTTP trasportato dentro un canale protetto da TLS.

TLS aiuta a proteggere il traffico da intercettazioni e modifiche durante il transito, ma **non rende sicura la logica dell'applicazione**.

Un sito HTTPS può comunque avere:

- SQL injection;
- controllo accessi insufficiente;
- session management debole;
- business logic vulnerabile.

> Cifrato non significa privo di vulnerabilità.

## 4. Anatomia di una richiesta HTTP

Esempio:

```http
GET /api/profile?id=42 HTTP/1.1
Host: shop.umbramarket.lab
Accept: application/json
Cookie: session=abc123
```

Leggiamola:

- `GET` è il **metodo**;
- `/api/profile` è il **path**;
- `id=42` è un **parametro**;
- `Host` indica l'hostname richiesto;
- `Cookie` trasporta qui un identificatore di sessione.

Una risposta potrebbe essere:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"name":"Alice"}
```

### Status code essenziali

| Codice | Significato pratico |
|---|---|
| 200 | richiesta gestita con successo |
| 201 | risorsa creata |
| 302 | redirect |
| 400 | richiesta non valida |
| 401 | autenticazione richiesta/non valida |
| 403 | richiesta compresa ma non autorizzata |
| 404 | risorsa non trovata |
| 500 | errore lato server |

Non usare mai il solo status code come prova definitiva: osserva anche header e body.

## 5. Metodi e body

Esempio di richiesta che modifica dati:

```http
POST /api/profile HTTP/1.1
Host: shop.umbramarket.lab
Content-Type: application/json
Cookie: session=abc123

{"displayName":"alice"}
```

Il body contiene input controllabile dall'utente. Nei prossimi moduli imparerai a chiederti: **come viene validato? chi può inviarlo? quale oggetto modifica?**

## 6. Authentication, sessione e authorization

Sono tre concetti diversi.

### Authentication

Risponde a:

> Chi sei?

Tipicamente avviene durante il login.

### Sessione

Dopo il login, l'applicazione deve ricordare che le richieste successive appartengono a quell'utente. Può usare cookie o token.

### Authorization

Risponde a:

> Cosa può fare questo utente autenticato?

Alice può essere correttamente autenticata e comunque **non** essere autorizzata a vedere l'ordine di Bob.

## 7. Esempio svolto — due richieste quasi identiche

Alice apre il proprio ordine:

```http
GET /api/orders/1001 HTTP/1.1
Cookie: session=alice-session
```

Poi osservi:

```http
GET /api/orders/1002 HTTP/1.1
Cookie: session=alice-session
```

La domanda da pentester non è subito "è vulnerabile?". È:

> Il server controlla che l'ordine 1002 appartenga ad Alice?

Questa è un'ipotesi di authorization testing.

## 8. Primo contatto con `curl`

Nel laboratorio useremo richieste innocue sul target didattico.

```bash
curl -i http://<target>
```

`-i` include gli header della risposta.

Per HTTPS in laboratorio:

```bash
curl -i https://<target>/
```

L'obiettivo non è memorizzare opzioni: è vedere che il browser non è l'unico modo per inviare HTTP.

## Esempio svolto — leggere prima di modificare

Hai questa richiesta:

```http
GET /api/me HTTP/1.1
Host: api.umbramarket.lab
Authorization: Bearer eyJ...
```

Prima di cambiare qualcosa annota:

```text
Metodo: GET
Endpoint: /api/me
Auth: Bearer token
Input espliciti: nessun parametro visibile
Ipotesi: il token identifica l'utente
Test successivo: confrontare richiesta anonima e autenticata
```

Questo approccio riduce i tentativi casuali.

## Laboratorio — Follow the Request

### GUIDED

Il docente indica una funzione, ad esempio "visualizza profilo".

1. aprila nel browser;
2. individua la request corrispondente negli strumenti sviluppatore/proxy;
3. annota metodo, path, parametri e auth;
4. annota status code e tipo di risposta;
5. riproduci la richiesta con lo strumento indicato;
6. modifica **un solo elemento innocuo** e osserva cosa cambia.

Compila:

| Elemento | Valore osservato |
|---|---|
| Metodo | |
| Endpoint | |
| Parametri | |
| Autenticazione | |
| Status | |
| Content-Type | |

### Se sei bloccato

**Hint 1:** apri Network nel browser e ricarica la pagina.

**Hint 2:** cerca la richiesta che restituisce i dati che vedi nella UI.

### INDEPENDENT

Scegli un'altra funzionalità e ricostruisci autonomamente il suo flusso HTTP.

### CHALLENGE

Identifica una richiesta il cui comportamento cambia modificando un solo elemento tra path, parametro, header, cookie o token. Spiega **perché** quel dato è significativo.

## Deliverable professionale

Crea una pagina `Request Anatomy` con:

- richiesta annotata;
- risposta essenziale;
- diagramma `Browser → Web/API → Backend → Data`;
- tre possibili domande di sicurezza generate dall'osservazione.

## Prima di chiudere

Dovresti saper spiegare:

- perché HTTPS non elimina le vulnerabilità applicative;
- perché 401 e 403 non significano la stessa cosa;
- differenza tra login, sessione e autorizzazione;
- quali parti di una request sono controllabili dall'utente.

Completa l'autoverifica finale nel portale.