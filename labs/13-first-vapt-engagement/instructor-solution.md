# Instructor Solution — UmbraMarket First VAPT Engagement

> Documento docente. Non mostrarlo all'inizio del laboratorio.

## Obiettivo didattico reale

La lezione non serve a trovare il maggior numero possibile di vulnerabilità.
Serve a far vedere il passaggio da **candidate finding** a **evidenza validata**.

Il finding principale consigliato è il Broken Object Level Authorization
sugli ordini.

## Percorso atteso

### 1. Recon / enumeration

I tre servizi autorizzati sono:

- 5005 — UmbraMarket Guided;
- 8080 — Admin staging;
- 9090 — semplice file service.

Gli studenti dovrebbero distinguere esposizione da vulnerabilità.

### 2. S-001 — falso positivo / non dimostrato

Il finding "RCE nginx" non deve essere accettato come vero.

Evidenza disponibile:

- banner/versione;
- nessuna verifica di prerequisiti;
- nessuna primitive;
- nessun impatto.

Conclusione corretta:

```text
FALSE POSITIVE / NOT DEMONSTRATED
```

Non serve cercare exploit pubblici né tentare exploitation.

### 3. S-002 — esposizione che produce nuova evidenza

Visitando il servizio admin si osserva uno staging portal.

`/robots.txt` espone:

```text
/backup/
/draft/
```

`/backup/appsettings.old` conferma ambiente e API base.

La pagina carica `/assets/app.js`, che contiene il riferimento:

```text
/api/admin/stats
```

Questo è un buon esempio di:

```text
information disclosure
→ nuova ipotesi
→ verifica applicativa
```

### 4. Broken function-level authorization

Dopo login come Alice, una richiesta a:

```text
GET /api/admin/stats
```

restituisce statistiche anche se Alice ha ruolo customer.

La vulnerabilità è reale: manca il controllo ruolo.

La prova minima è una singola risposta 200 ottenuta da un customer.
Non occorre eseguire altre azioni amministrative.

### 5. S-004 — finding principale: BOLA / IDOR

Happy path:

```text
Alice → /api/orders/1001
Bob   → /api/orders/1002
```

Test minimo:

Alice autenticata richiede:

```text
GET /api/orders/1002
```

Risultato:

il server restituisce l'ordine di Bob, inclusi dati dell'ordine e indirizzo.

Questo dimostra:

- autenticazione presente;
- authorization object-level assente;
- accesso cross-user confermato.

Non dimostra:

- accesso a tutti gli ordini;
- compromissione del database;
- account takeover;
- server compromise.

Stop immediato dopo la singola risposta cross-user.

### 6. S-003 — CSP

La CSP può essere assente davvero, ma da sola non dimostra impatto.
Può essere registrata come hardening/configuration issue.

UmbraMarket contiene anche un greeting volutamente vulnerabile, ma non è
necessario portare la classe lì durante questo laboratorio. Se emerge,
usarlo come approfondimento, non come obiettivo obbligatorio.

### 7. SQL injection

La search è volutamente vulnerabile, ma NON è necessaria per completare
l'engagement. Se un gruppo la identifica, chiedere:

- quale evidenza minima basta?
- state dimostrando input handling oppure estraendo dati inutilmente?
- qual è la stop condition?

Non trasformare la lezione in data extraction.

## Finding modello

### Title

Authenticated customer can access another customer's order

### Asset

UmbraMarket Guided — `/api/orders/{id}`

### Preconditions

Valid customer session.

### Evidence

A session authenticated as Alice can request Bob's known training order
`1002` and receives HTTP 200 with Bob's order fields.

### Demonstrated impact

A customer can read another customer's order data.

### Not demonstrated

Bulk enumeration, modification, database compromise or account takeover
were not tested and must not be claimed.

### Root cause

The endpoint checks that the requester is authenticated but does not verify
that the requested order belongs to that user.

### Remediation

Perform server-side object authorization before returning an order. Resolve
the order through the authenticated user's ownership boundary rather than
trusting the numeric identifier alone.

### Retest

Repeat the cross-user request after remediation and expect 403 or 404.

## Debrief

Domande finali:

1. Quale HIGH dello scanner era più rumoroso che utile?
2. Quale finding richiedeva davvero una verifica manuale?
3. Dove avete deciso di fermarvi?
4. Qual è la differenza tra "endpoint prevedibile" e "BOLA dimostrata"?
5. Quale frase nel report sarebbe un overclaim?
