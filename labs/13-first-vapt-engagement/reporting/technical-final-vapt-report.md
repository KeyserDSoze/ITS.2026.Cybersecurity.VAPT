# UmbraMarket S.r.l.
# Technical VAPT Final Report — Golden Training Example

> **DOCUMENTO DIDATTICO — ESEMPIO DI DELIVERABLE FINALE**
>
> Questo documento mostra agli studenti come trasformare reconnaissance, richieste HTTP, evidenze e test controllati in un report VAPT professionale.
> Tutti i sistemi, account e dati sono fittizi e appartengono esclusivamente al laboratorio locale UmbraMarket.
>
> In un engagement reale il report finale non deve contenere password, cookie di sessione, segreti o payload distruttivi. Le credenziali mostrate nell'appendice sono esclusivamente quelle pubbliche e didattiche del laboratorio locale.

---

# 1. Document Control

| Campo | Valore |
|---|---|
| Cliente | UmbraMarket S.r.l. — scenario fittizio |
| Engagement | Vulnerability Assessment & Penetration Test |
| Tipo | Grey-box / authenticated web & API assessment |
| Ambiente | Local training environment |
| Classificazione | Training / Confidential |
| Versione report | 1.0 — Golden Training Example |
| Stato | Final |
| Prepared for | Studenti ITS Cybersecurity VAPT |
| Target tecnico | UmbraMarket Guided + Admin staging + File service |

## 1.1 Version History

| Versione | Stato | Modifica |
|---|---|---|
| 0.1 | Draft | Raccolta finding ed evidenze |
| 0.5 | Review | Correlazione attack chain e remediation |
| 1.0 | Final | Versione didattica client-ready |

---

# 2. Executive Summary

UmbraMarket ha richiesto un assessment controllato della piattaforma web locale con particolare attenzione a input handling, separazione fra utenti, funzioni amministrative e informazioni esposte dallo staging.

L'assessment ha identificato cinque debolezze tecniche rilevanti. Il rischio più importante è rappresentato dalla mancata autorizzazione object-level sull'API ordini: un customer autenticato può richiedere l'ordine di un altro customer modificando il solo identificatore dell'oggetto. È stata inoltre verificata una failure di autorizzazione verticale: un normale customer può invocare una funzione amministrativa. Lo staging espone informazioni che facilitano la scoperta di tale funzione. Sono inoltre presenti una SQL injection nella ricerca prodotti e una reflected XSS nella funzione di greeting.

Le debolezze permettono quindi movimenti applicativi sia orizzontali — customer verso dati di un altro customer — sia verticali — customer verso una funzione amministrativa. Non è stato invece dimostrato lateral movement di rete, accesso al sistema operativo, persistence, compromissione completa del database o account takeover.

Le priorità di remediation sono: autorizzazione server-side per oggetti e funzioni, query SQL parametrizzate, output encoding contestuale e riduzione dell'esposizione dello staging. Dopo la correzione è raccomandato un retest mirato con test negativi di authorization e input handling.

---

# 3. Executive Risk View

| ID | Finding | Severity | Stato | Evidenza primaria |
|---|---|---:|---|---|
| F-01 | Customer può leggere l'ordine di un altro customer | High | CONFIRMED | E-01, E-02, E-03 |
| F-02 | Customer può invocare una funzione amministrativa | Medium | CONFIRMED | E-04 |
| F-03 | SQL Injection nella ricerca prodotti | High | CONFIRMED IN TRAINING TARGET | E-06 |
| F-04 | Reflected Cross-Site Scripting nel greeting | Medium | CONFIRMED IN TRAINING TARGET | E-07 |
| F-05 | Staging espone informazioni e percorsi applicativi | Low | CONFIRMED | E-05 |

Le severity sono qualitative e contestualizzate al laboratorio. In un engagement reale, se il contratto richiede CVSS, il team deve dichiarare la versione usata, calcolare il vettore sulla condizione realmente dimostrata e motivare eventuali differenze fra score tecnico e priorità di business.

---

# 4. Engagement Objectives

## 4.1 Business Questions

L'assessment deve rispondere a domande comprensibili anche fuori dal team tecnico:

1. un cliente normale può accedere ai dati di un altro cliente?
2. un cliente normale può raggiungere funzioni amministrative?
3. informazioni apparentemente innocue possono facilitare un attacco successivo?
4. input controllato dall'utente può alterare query o contenuto eseguito nel browser?
5. fino a dove arriva realmente ciascuna catena d'attacco?
6. quali controlli devono essere corretti e come verrà verificata la remediation?

## 4.2 Security Objectives

- mappare la superficie HTTP autorizzata;
- osservare sessioni, ruoli, oggetti ed endpoint;
- validare manualmente i candidate finding;
- usare una prova minima e reversibile;
- raccogliere evidenza sufficiente a sostenere ogni conclusione;
- distinguere impatto dimostrato da impatto potenziale;
- definire remediation e criteri di retest riproducibili.

---

# 5. Scope

## 5.1 In Scope

| Asset | Funzione | Stato |
|---|---|---|
| 127.0.0.1:5005 | UmbraMarket Guided web application + API | IN SCOPE |
| 127.0.0.1:8080 | Admin staging | IN SCOPE |
| 127.0.0.1:9090 | File service | IN SCOPE |

## 5.2 Out of Scope

| Asset | Motivo |
|---|---|
| 127.0.0.1:3000 | OWASP Juice Shop escluso dal Lab 13 |
| LAN dello studente | Non autorizzata |
| Internet / sistemi esterni | Non autorizzati |
| Altri host o porte | Non autorizzati |

## 5.3 Test Accounts

Sono disponibili due identità customer fittizie, Alice e Bob. Un'identità admin esiste nel target didattico ma non è necessaria per dimostrare F-01 e F-02.

Nel report cliente reale si omettono password e cookie. L'appendice didattica di questo documento riporta le credenziali lab solamente per permettere agli studenti di riprodurre il percorso in locale.

---

# 6. Rules of Engagement

Attività consentite:

- browser e Developer Tools;
- curl;
- Burp Suite Community oppure OWASP ZAP;
- Nmap sulle sole porte autorizzate;
- login con account didattici;
- modifica controllata di parametri e object ID;
- content discovery non distruttiva;
- PoC manuale minima;
- raccolta request/response.

Attività non consentite:

- brute force;
- denial of service;
- distruzione o modifica dei dati;
- persistence;
- mass enumeration;
- estrazione massiva;
- callback verso sistemi esterni;
- attacchi a persone o sistemi reali;
- test oltre lo scope.

## 6.1 Stop Condition

La regola del laboratorio è:

> Ottenuta una singola evidenza sufficiente a dimostrare il failure di sicurezza, il test si ferma.

Questo principio evita di confondere la qualità di un pentest con la quantità di dati estratti.

---

# 7. Methodology

Il percorso seguito è:

~~~text
SCOPE
  ↓
RECONNAISSANCE
  ↓
APPLICATION MAPPING
  ↓
BASELINE
  ↓
HYPOTHESIS
  ↓
CONTROLLED TEST
  ↓
EXPECTED vs OBSERVED
  ↓
EVIDENCE
  ↓
IMPACT
  ↓
ATTACK CHAIN / PIVOT ANALYSIS
  ↓
REMEDIATION
  ↓
RETEST
~~~

## 7.1 Evidence States

| Stato | Significato |
|---|---|
| OBSERVED | Informazione osservata ma non ancora prova di vulnerabilità |
| VALIDATED | Comportamento di sicurezza verificato |
| TRAINING REFERENCE CAPTURE | Evidenza di riferimento del target didattico da ricatturare live durante l'esercitazione |
| NOT DEMONSTRATED | Ipotesi senza prova sufficiente |
| OUT OF SCOPE | Non deve essere testato |
| STOPPED | Evidenza già sufficiente o limite RoE raggiunto |

## 7.2 Regola di qualità

Ogni finding deve rispondere a sei domande:

1. che cosa abbiamo testato?
2. cosa doveva succedere?
3. cosa è successo?
4. quale evidenza lo dimostra?
5. quale impatto è stato realmente dimostrato?
6. cosa non possiamo affermare?

---

# 8. Test Environment and Tooling

## 8.1 Platform Start

Dalla root della repository:

~~~bash
cd labs/platform
docker compose pull
docker compose up -d --build
./scripts/check.sh
~~~

Su Windows gli endpoint possono essere verificati anche con curl.exe o browser.

## 8.2 Toolset

| Tool | Uso |
|---|---|
| Browser | Navigazione, comportamento applicativo, PoC XSS |
| DevTools | Network, cookie, request/response, endpoint mapping |
| curl | Riproduzione minimale e scriptabile |
| Burp Suite Community | Proxy, HTTP history, Repeater, confronto fra richieste |
| OWASP ZAP | Alternativa a Burp per proxy e request manipulation |
| Nmap | Ricognizione dei soli servizi locali autorizzati |

Kali Linux non è un requisito. Il target e gli strumenti possono essere eseguiti sullo stesso PC dello studente.

---

# 9. Reconnaissance and Attack Surface

Una ricognizione limitata allo scope può utilizzare:

~~~bash
nmap -sV -p 5005,8080,9090 127.0.0.1
~~~

La presenza di una porta aperta non costituisce da sola una vulnerabilità.

| Porta | Superficie | Valutazione |
|---:|---|---|
| 5005 | Web app + REST API | Testata |
| 8080 | Admin staging statico | Testata |
| 9090 | File service | Enumerazione didattica |
| 3000 | Juice Shop | OUT OF SCOPE |

Durante il mapping sono rilevanti:

- endpoint di login e logout;
- dashboard customer;
- API di identità e ordini;
- endpoint di ricerca;
- funzione greeting;
- staging admin;
- robots.txt;
- JavaScript pubblico e file di backup.

---

# 10. Authentication and Starting Conditions

È fondamentale descrivere da dove parte realmente l'attaccante.

Per F-01 e F-02 **non è stato dimostrato un authentication bypass**. Il punto di partenza è un normale account customer valido.

Il flusso è:

~~~text
NORMAL CUSTOMER
      ↓
VALID LOGIN
      ↓
AUTHENTICATED SESSION
      ↓
TEST AUTHORIZATION BOUNDARIES
~~~

Quindi il report non deve scrivere “attaccante anonimo prende il controllo del sistema”. La conclusione corretta è che un customer autenticato può attraversare boundary che il server avrebbe dovuto imporre.

---

# 11. Attack Chain Summary

## AC-01 — Horizontal Application Movement

~~~text
Alice customer
      ↓
Alice order baseline
      ↓
numeric order object
      ↓
request Bob order ID
      ↓
server authenticates Alice
      ↓
ownership check missing
      ↓
Bob order returned
~~~

**Capability gained:** lettura cross-user di un singolo ordine dimostrato.

**Non dimostrato:** accesso a tutti gli ordini, scrittura, account takeover, DB dump.

## AC-02 — Staging Discovery to Vertical Privilege Boundary

~~~text
Admin staging :8080
      ↓
robots.txt
      ↓
backup / JavaScript metadata
      ↓
/api/admin/stats discovered
      ↓
Alice customer session
      ↓
admin endpoint invoked
      ↓
role check missing
      ↓
administrative statistics returned
~~~

**Capability gained:** un ruolo customer accede a una funzione amministrativa read-only.

**Non dimostrato:** azioni admin di modifica, creazione utenti o server compromise.

## AC-03 — SQL Query Manipulation

~~~text
public product search
      ↓
attacker-controlled q
      ↓
SQL string concatenation
      ↓
predicate altered
      ↓
unexpected result set
~~~

**Capability gained:** controllo parziale della semantica della query.

**Potenziale ulteriore:** accesso ad altri dati SQL se query e schema lo permettono.

**STOP:** nessuna estrazione di credenziali o altre tabelle necessaria per dimostrare il finding.

## AC-04 — Browser Execution Context

~~~text
/greet?name=
      ↓
untrusted input
      ↓
response HTML without output encoding
      ↓
browser interprets active markup
      ↓
benign JavaScript proof executes
~~~

**Capability gained:** esecuzione di JavaScript nell'origine della web app quando una vittima apre una URL costruita ad hoc.

**Non dimostrato:** session theft, vittima reale, admin compromise.

## 11.1 Network Lateral Movement

Nessuna delle evidenze raccolte dimostra movimento laterale verso altri host.

Il termine “lateral movement” nel presente report, quando riferito a F-01, indica **movimento orizzontale applicativo fra oggetti/identità customer**, non movimento laterale di rete.

Questa distinzione deve rimanere esplicita nel report cliente.

---

# 12. F-01 — Customer Can Access Another Customer's Order

## Severity

**High**

## Category

Broken Object Level Authorization / IDOR / Authorization.

## Affected Asset

~~~text
GET /api/orders/{id}
~~~

## Preconditions

- account customer valido;
- sessione autenticata;
- identificatore di un ordine appartenente a un altro customer.

## Expected Security Control

Il server deve verificare contemporaneamente:

~~~text
authenticated identity
+
requested object
+
ownership / permission
=
ALLOW or DENY
~~~

## Validation

La prova usa tre evidenze correlate.

- E-01 stabilisce un ordine legittimo di Alice.
- E-02 stabilisce che l'ordine 1002 appartiene al contesto Bob.
- E-03 cambia solamente l'ID richiesto mantenendo la sessione Alice.

### E-01 — Alice baseline

~~~http
GET /api/orders/1001 HTTP/1.1
Host: 127.0.0.1:5005
Cookie: session=<redacted-alice-session>
~~~

Risultato: HTTP 200 con ordine Alice.

### E-02 — Bob ownership baseline

~~~http
GET /api/orders/1002 HTTP/1.1
Host: 127.0.0.1:5005
Cookie: session=<redacted-bob-session>
~~~

Risultato: HTTP 200, user_id 2, ordine Bob.

### E-03 — Cross-user test

~~~http
GET /api/orders/1002 HTTP/1.1
Host: 127.0.0.1:5005
Cookie: session=<redacted-alice-session>
~~~

### Expected

HTTP 403 oppure 404 senza dati Bob.

### Observed

HTTP 200 con ordine 1002 e indirizzo di spedizione di Bob.

## Reproduction with Browser / Burp

1. login come Alice;
2. aprire Dashboard;
3. osservare una richiesta ad un ordine Alice;
4. inviarla a Burp Repeater;
5. sostituire l'ID con 1002;
6. inviare mantenendo la sessione Alice;
7. confrontare la risposta con E-02;
8. fermarsi dopo la prima prova positiva.

## Demonstrated Impact

Un customer può leggere dati di ordine appartenenti a un altro customer. Nel dataset lab è incluso anche l'indirizzo di spedizione.

## Application Pivot

~~~text
Alice identity
→ Alice-authorized object
→ change object identifier
→ Bob-owned object
~~~

È un movimento orizzontale attraverso un boundary di authorization.

## Not Demonstrated

- lettura di tutti gli ordini;
- enumerazione massiva;
- modifica o cancellazione;
- compromissione database;
- takeover Bob;
- shell sul server.

## Root Cause

Il backend verifica la presenza della sessione ma recupera l'ordine per ID senza includere l'identità autenticata nell'authorization decision.

## Remediation

**Immediate**

Applicare ownership check server-side su ogni accesso all'oggetto.

Pattern concettuale sicuro:

~~~sql
SELECT ...
FROM orders
WHERE id = ?
  AND user_id = ?
~~~

L'user_id deve derivare esclusivamente dalla sessione server-side verificata.

**Structural**

- policy di authorization centralizzata;
- negative authorization tests;
- test Alice→Bob e Bob→Alice nella CI;
- inventario degli endpoint object-based;
- review di ogni endpoint GET/POST/PUT/PATCH/DELETE sugli oggetti.

Cambiare ID numerici in UUID può ridurre la prevedibilità ma **non sostituisce authorization**.

## Retest

~~~text
Alice → Alice order = ALLOW
Alice → Bob order   = DENY
Bob   → Bob order   = ALLOW
~~~

PASS: 403/404 e nessun dato Bob.

FAIL: qualunque dato dell'ordine Bob viene ancora restituito ad Alice.

---

# 13. F-02 — Customer Can Invoke Administrative Statistics

## Severity

**Medium**

## Category

Broken Function Level Authorization / vertical authorization.

## Affected Asset

~~~text
GET /api/admin/stats
~~~

## Preconditions

Normale sessione customer.

## Discovery

E-05 mostra una catena di discovery realistica:

~~~text
:8080/robots.txt
→ /backup/
→ /backup/appsettings.old
→ /assets/app.js
→ /api/admin/stats
~~~

La discovery dell'endpoint non è il vero failure di authorization. La vulnerabilità si verifica quando il server consente al customer di invocarlo.

## Validation

E-04:

~~~http
GET /api/admin/stats HTTP/1.1
Host: 127.0.0.1:5005
Cookie: session=<redacted-alice-session>
~~~

### Expected

403 Forbidden oppure altra negazione coerente.

### Observed

~~~json
{
  "users": 3,
  "orders": 3,
  "revenue": 367.9
}
~~~

HTTP 200 con normale sessione Alice/customer.

## Reproduction with Browser / Burp

1. autenticarsi come Alice;
2. mantenere il cookie di sessione;
3. visitare o inviare a Repeater GET /api/admin/stats;
4. osservare status e body;
5. fermarsi senza tentare funzioni amministrative ulteriori.

## Demonstrated Impact

Un customer può ottenere dati aggregati riservati a una funzione amministrativa.

## Vertical Pivot

~~~text
customer
→ authenticated session
→ admin function
→ missing role check
→ privileged information
~~~

## Not Demonstrated

- modifica di utenti;
- cambio ruoli;
- scrittura di configurazione;
- creazione di admin;
- remote code execution;
- server takeover.

## Root Cause

È presente un controllo di authentication, ma manca la verifica server-side del ruolo/permesso richiesto dalla funzione.

## Remediation

- definire una permission specifica per la funzione;
- verificare permission/role sul server;
- deny by default;
- non affidarsi alla mancata presenza del link nella UI;
- applicare policy coerenti all'intero namespace admin;
- aggiungere test negativi customer→admin.

Esempio concettuale:

~~~text
authenticated?
    ↓ yes
has admin permission?
    ↓ yes             ↓ no
  ALLOW               DENY
~~~

## Retest

- customer → /api/admin/stats → DENY;
- admin → /api/admin/stats → ALLOW;
- anonimo → /api/admin/stats → DENY.

---

# 14. F-03 — SQL Injection in Product Search

## Severity

**High**

## Category

Injection / SQL Injection.

## Affected Asset

~~~text
GET /search?q=
~~~

## Preconditions

Nessuna sessione privilegiata richiesta.

## Hypothesis

L'input q potrebbe modificare la query invece di essere trattato esclusivamente come valore dati.

## Minimal Validation

E-06 definisce una prova minima che altera il predicato senza estrarre altre tabelle.

Baseline:

~~~text
/search?q=Umbra
~~~

Controlled input:

~~~text
%' OR 1=1 -- 
~~~

Con curl:

~~~bash
curl -G --data-urlencode "q=%' OR 1=1 -- " http://127.0.0.1:5005/search
~~~

### Expected

L'input deve essere interpretato esclusivamente come termine di ricerca.

### Observed

Il vincolo di ricerca viene alterato e il result set include tutti i quattro prodotti seed del laboratorio.

## Reproduction with Burp

1. aprire la ricerca prodotti;
2. intercettare GET /search?q=...;
3. inviare la request a Repeater;
4. conservare una baseline normale;
5. modificare solamente q con il controlled input;
6. confrontare il numero/contenuto dei risultati;
7. fermarsi una volta dimostrata la query manipulation.

## Demonstrated Impact

Input non fidato può modificare la logica della query eseguita dal database.

## Potential Impact — NOT DEMONSTRATED

A seconda di DB, privilegi, schema e query, una SQL injection può teoricamente consentire lettura o modifica di dati ulteriori.

In questo assessment **non sono stati dimostrati**:

- dump tabella users;
- estrazione password;
- scrittura dati;
- file read/write;
- command execution;
- DB administrator compromise.

Queste possibilità non vanno scritte come fatti nel report.

## Root Cause

Costruzione della query SQL tramite concatenazione/interpolazione di input controllabile dall'utente.

## Remediation

Usare query parametrizzate.

Pattern concettuale:

~~~text
search term = q
LIKE parameter = "%" + q + "%"

SQL:
WHERE name LIKE ?
~~~

Il valore deve essere passato tramite il binding parametrico del driver DB.

Ulteriori controlli:

- least privilege dell'account database;
- gestione errori senza leakage;
- test automatici per caratteri SQL speciali;
- logging e alerting applicativo;
- review delle altre query costruite dinamicamente.

Input filtering da solo non sostituisce la parametrizzazione.

## Retest

PASS:

- il payload viene cercato come testo;
- non altera il result set;
- non produce errori SQL informativi.

FAIL:

- l'input cambia la semantica della query o produce evidenza di SQL execution controllata.

---

# 15. F-04 — Reflected Cross-Site Scripting in Greeting

## Severity

**Medium**

## Category

Cross-Site Scripting / Output Encoding.

## Affected Asset

~~~text
GET /greet?name=
~~~

## Preconditions

La vittima deve aprire una richiesta contenente input costruito per il parametro name.

## Minimal Validation

Baseline:

~~~text
/greet?name=Alice
~~~

Controlled benign proof:

~~~html
<script>alert(1)</script>
~~~

Costruzione della richiesta:

~~~bash
curl -G --data-urlencode "name=<script>alert(1)</script>" http://127.0.0.1:5005/greet
~~~

curl dimostra la reflection nel body; il browser dimostra l'interpretazione/esecuzione.

### Expected

~~~html
Ciao, &lt;script&gt;alert(1)&lt;/script&gt;!
~~~

Il testo deve apparire come testo.

### Observed

L'input viene inserito come markup attivo. Il browser esegue la PoC innocua.

## Reproduction with Browser / Burp

1. aprire /greet?name=Alice;
2. osservare la reflection;
3. inviare la richiesta a Repeater;
4. verificare che markup controllato sia restituito senza encoding;
5. usare nel browser esclusivamente la PoC alert(1);
6. fermarsi all'esecuzione locale.

## Demonstrated Impact

È possibile eseguire JavaScript nell'origine web quando una vittima apre una richiesta appositamente costruita.

## Potential Impact — NOT DEMONSTRATED

Un XSS può abusare delle capacità disponibili alla pagina nel contesto della vittima, ma questo test non ha dimostrato:

- furto cookie;
- takeover account;
- azioni come admin;
- credential harvesting;
- persistence;
- callback esterni.

Non va quindi scritto “account admin compromesso”.

## Root Cause

Input non fidato viene marcato/renderizzato come HTML trusted invece di essere sottoposto a contextual output encoding.

## Remediation

- non promuovere input utente a trusted markup;
- mantenere auto-escaping del template engine;
- eseguire HTML encoding nel corretto contesto;
- evitare innerHTML/HTML injection lato client;
- usare Content-Security-Policy come defense in depth, non come sostituto dell'encoding;
- aggiungere test per reflection HTML/script.

## Retest

PASS: il payload compare esclusivamente come testo e nessun JavaScript viene eseguito.

FAIL: markup o script controllato continua ad essere interpretato dal browser.

---

# 16. F-05 — Staging Information Disclosure Enables Endpoint Discovery

## Severity

**Low**

## Category

Information Disclosure / Security Misconfiguration.

## Affected Asset

~~~text
127.0.0.1:8080
~~~

## Validation

E-05 correla tre risorse pubbliche.

### robots.txt

~~~text
Disallow: /backup/
Disallow: /draft/
~~~

### backup/appsettings.old

Espone almeno:

~~~text
environment=staging
api_base=http://app.umbramarket.test:5005/api
log_level=debug
feature_admin_v2=false
~~~

### assets/app.js

Espone:

~~~text
apiBase: http://127.0.0.1:5005/api
statsEndpoint: /admin/stats
environment: staging
~~~

## Reproduction

~~~bash
curl http://127.0.0.1:8080/robots.txt
curl http://127.0.0.1:8080/backup/appsettings.old
curl http://127.0.0.1:8080/assets/app.js
~~~

## Demonstrated Impact

Lo staging rende disponibili informazioni di implementazione e permette di identificare più rapidamente l'endpoint amministrativo successivamente validato in F-02.

## Important Distinction

Conoscere /api/admin/stats **non dovrebbe essere sufficiente per comprometterlo**.

Il problema di F-02 rimane la mancanza di authorization server-side. Nascondere l'endpoint non risolve F-02.

## Root Cause

Artefatti di sviluppo/backup e dettagli ambientali vengono pubblicati nel document root accessibile.

## Remediation

- rimuovere backup e draft dal web root;
- non utilizzare robots.txt per “proteggere” contenuti sensibili;
- separare build artifacts da file operativi;
- limitare l'accesso allo staging dove appropriato;
- minimizzare configurazioni e metadata pubblici;
- assicurare authorization indipendentemente dalla discoverability dell'endpoint.

## Retest

PASS:

- backup/draft non sono pubblicamente serviti;
- i file client non contengono informazioni non necessarie;
- l'endpoint admin rimane comunque protetto correttamente come richiesto da F-02.

---

# 17. Correlated Attack Paths

Un report professionale non deve limitarsi a cinque schede isolate. Deve mostrare come i finding possono correlarsi.

## 17.1 Confirmed Correlation A

~~~text
E-05 Information Disclosure
        ↓
admin endpoint discovered
        ↓
E-04 / F-02
        ↓
customer crosses vertical authorization boundary
~~~

Questa correlazione è supportata dall'evidence pack.

## 17.2 Confirmed Correlation B

~~~text
normal customer access
        ↓
own-order baseline
        ↓
object ID manipulation
        ↓
F-01 BOLA / IDOR
        ↓
other-customer order disclosed
~~~

Questa è una forma di horizontal application movement.

## 17.3 Plausible but Unvalidated Correlation

~~~text
F-03 SQL Injection
        ↓
hypothesis: other DB data
        ↓
NOT TESTED — STOP CONDITION
~~~

Non si può continuare la freccia verso “credentials stolen” o “server owned” senza evidenza.

## 17.4 Plausible but Unvalidated XSS Chain

~~~text
F-04 XSS
        ↓
victim execution context
        ↓
hypothesis: authenticated action
        ↓
NOT TESTED
~~~

Non è stata coinvolta alcuna vittima e non è stato dimostrato un privilege escalation via XSS.

---

# 18. What an Ordinary User Can Actually Do

Questa sezione risponde alla domanda “come entra un utente normale e fino a dove può arrivare?”.

## Starting Point

~~~text
valid customer credentials
→ POST /login
→ authenticated session cookie
~~~

Da quel punto:

~~~text
customer
├─ own dashboard                     EXPECTED
├─ own orders                        EXPECTED
├─ other customer's order            F-01
└─ administrative statistics         F-02
~~~

Non esiste evidenza che il customer ottenga una shell, diventi admin, modifichi ordini o entri in altri host.

## Why This Matters

Il finding non è “Alice conosce un numero”.

Il finding è:

> il server prende una decisione di authorization errata pur conoscendo correttamente l'identità Alice.

Questo è il linguaggio che deve apparire nel report finale.

---

# 19. Scanner Triage and Non-Findings

Il file 01-scanner-output.txt contiene candidate finding, non verità.

## N-01 — Scanner-reported possible nginx RCE

Stato: **NOT DEMONSTRATED / DO NOT REPORT AS CONFIRMED**

Il solo banner/version fingerprint non dimostra:

- presenza di una specifica vulnerabilità;
- prerequisiti;
- exploitability;
- code execution;
- impatto.

Non deve essere riportato come Critical confermato.

## O-01 — Missing CSP

Stato: **Hardening observation**

L'assenza di CSP può ridurre la defense in depth, in particolare in presenza di F-04, ma non sostituisce la root cause XSS e non dimostra da sola compromise.

## Teaching Rule

~~~text
scanner severity
≠
validated risk

candidate finding
+
manual validation
+
evidence
=
reportable conclusion
~~~

---

# 20. Evidence Register

| ID | Evidenza | Tipo | Supporta |
|---|---|---|---|
| E-01 | Alice own-order baseline | LAB-VALIDATED | F-01 |
| E-02 | Bob own-order baseline | LAB-VALIDATED | F-01 |
| E-03 | Alice reads Bob order | LAB-VALIDATED | F-01 |
| E-04 | Customer invokes admin stats | LAB-VALIDATED | F-02 |
| E-05 | Staging content discovery | STATIC / LAB-REPRODUCIBLE | F-05, discovery F-02 |
| E-06 | Minimal SQL query manipulation | TRAINING REFERENCE CAPTURE | F-03 |
| E-07 | Minimal reflected XSS proof | TRAINING REFERENCE CAPTURE | F-04 |
| S-001 | Scanner “possible RCE” | CANDIDATE ONLY | N-01 |
| S-003 | Missing CSP | OBSERVATION | O-01 |

## 20.1 Important Teaching Note on E-06 and E-07

E-06 ed E-07 sono reference capture del target didattico. Durante un vero run degli studenti vanno sostituite/integrate con l'output realmente catturato dal loro browser, Burp/ZAP o curl.

Un buon report non inventa timestamp, header, screenshot o risposte non catturate.

---

# 21. Remediation Roadmap

| Priorità | Azione | Finding | Owner suggerito |
|---|---|---|---|
| P1 | Enforce object ownership server-side | F-01 | Backend |
| P1 | Enforce role/permission on admin functions | F-02 | Backend / IAM |
| P1 | Parameterize SQL queries | F-03 | Backend / Data |
| P2 | Restore contextual output encoding | F-04 | Backend / Frontend |
| P2 | Add negative security tests to CI | F-01..F-04 | Engineering / QA |
| P2 | Remove staging backup/draft artifacts | F-05 | DevOps |
| P3 | Introduce CSP defense in depth | O-01 | Frontend / Platform |
| P3 | Periodically retest staging exposure | F-05 | AppSec / DevOps |

## 21.1 Structural Remediation Themes

I cinque finding non devono essere corretti come cinque eccezioni isolate.

Tre temi strutturali:

1. **Authorization policy**
   - object-level;
   - function-level;
   - deny-by-default;
   - test negativi.

2. **Untrusted input handling**
   - SQL parameters;
   - contextual output encoding;
   - safe defaults del framework.

3. **Environment hygiene**
   - niente backup nel web root;
   - staging minimizzato;
   - metadata pubblici solo se necessari.

---

# 22. Retest Matrix

| Test | Expected PASS |
|---|---|
| Alice → Alice order | 200, dati Alice |
| Alice → Bob order | 403/404, zero dati Bob |
| Bob → Bob order | 200, dati Bob |
| Customer → admin stats | 403/404 |
| Admin → admin stats | 200 |
| SQLi test input | trattato come testo, nessuna alterazione query |
| XSS controlled input | encoded, nessuna esecuzione |
| /backup/appsettings.old | non disponibile |
| Admin JS | nessun metadata non necessario |

Il retest deve anche verificare che la remediation non rompa il comportamento legittimo.

---

# 23. Reproduction Annex — Tool-Focused

Questa sezione è intenzionalmente più operativa perché il documento è un training sample.

## 23.1 Create an Alice Session with curl

**Solo laboratorio locale. In un report reale non si pubblicano password.**

~~~bash
curl -i -c alice.cookies   -X POST   -d "username=alice&password=Alice123!"   http://127.0.0.1:5005/login
~~~

Verifica identità:

~~~bash
curl -b alice.cookies http://127.0.0.1:5005/api/me
~~~

## 23.2 Create a Bob Session

~~~bash
curl -i -c bob.cookies   -X POST   -d "username=bob&password=Bob123!"   http://127.0.0.1:5005/login
~~~

## 23.3 Establish Ownership Baselines

~~~bash
curl -b alice.cookies http://127.0.0.1:5005/api/orders/1001
curl -b bob.cookies   http://127.0.0.1:5005/api/orders/1002
~~~

## 23.4 Minimal Cross-User Proof

~~~bash
curl -b alice.cookies http://127.0.0.1:5005/api/orders/1002
~~~

Stop after the single positive response.

## 23.5 Admin Function Proof

~~~bash
curl -b alice.cookies http://127.0.0.1:5005/api/admin/stats
~~~

## 23.6 Staging Discovery

~~~bash
curl http://127.0.0.1:8080/robots.txt
curl http://127.0.0.1:8080/backup/appsettings.old
curl http://127.0.0.1:8080/assets/app.js
~~~

## 23.7 SQL Injection Minimal Proof

~~~bash
curl -G   --data-urlencode "q=%' OR 1=1 -- "   http://127.0.0.1:5005/search
~~~

Stop after confirming query manipulation. Do not dump unrelated tables.

## 23.8 XSS Minimal Proof

HTTP reflection:

~~~bash
curl -G   --data-urlencode "name=<script>alert(1)</script>"   http://127.0.0.1:5005/greet
~~~

Browser validation: use only the local alert PoC and stop after execution.

## 23.9 Burp Repeater Workflow

Per authorization:

~~~text
Proxy / HTTP History
→ select valid request
→ Send to Repeater
→ change ONE variable
→ Send
→ compare status/body
→ save request + response
~~~

Per F-01 cambia solo l'object ID.

Per F-02 mantieni la stessa customer session e cambia solo la funzione richiesta.

Per F-03 conserva una baseline e cambia solo q.

Questo approccio rende l'evidenza molto più forte perché isola la variabile che causa il comportamento.

---

# 24. Evidence Handling Checklist

Per ogni finding conservare:

- Evidence ID univoco;
- target;
- identità/ruolo, se rilevante;
- request completa con segreti redatti;
- response rilevante;
- expected behavior;
- observed behavior;
- interpretazione;
- stop condition;
- “not demonstrated”;
- collegamento al finding.

Non affidarsi solo a screenshot. Request/response testuali sono spesso più riproducibili e più facili da revisionare.

Non inserire nel report finale:

- cookie di sessione validi;
- password reali;
- API key;
- token;
- dati personali non necessari;
- dump massivi.

---

# 25. What Was Demonstrated

L'assessment dimostra che:

- un customer può leggere almeno un ordine appartenente a un altro customer;
- un customer può raggiungere una funzione amministrativa di statistiche;
- lo staging facilita la discovery dell'endpoint amministrativo;
- la search contiene una SQL injection dimostrabile con query manipulation minima;
- il greeting contiene una reflected XSS dimostrabile con PoC browser innocua.

---

# 26. What Was NOT Demonstrated

L'assessment **non** dimostra:

- anonymous full compromise;
- accesso a tutti gli ordini;
- modifica/cancellazione ordini;
- dump dell'intero database;
- credential theft;
- admin account takeover;
- operating-system command execution;
- remote shell;
- persistence;
- network lateral movement;
- compromissione di altri host;
- malware execution;
- impatto su sistemi reali.

Questa sezione è parte essenziale di un report professionale: protegge il cliente dall'overclaim e il tester da conclusioni non sostenute dall'evidenza.

---

# 27. Conclusion

Il rischio principale di UmbraMarket non deriva da una singola tecnologia ma dall'assenza di security boundary coerenti in punti diversi dell'applicazione.

Il finding F-01 dimostra un failure di authorization orizzontale: l'identità è correttamente autenticata ma l'ownership dell'oggetto non viene verificata. F-02 dimostra un failure verticale: un customer raggiunge una funzione amministrativa perché manca il role/permission check.

F-03 e F-04 mostrano due classiche conseguenze del trattamento non sicuro di input non fidato: l'input viene interpretato rispettivamente come parte di una query SQL e come markup/script browser. F-05 dimostra infine come informazioni di staging apparentemente poco importanti possano diventare utili quando correlate con un'altra debolezza.

La remediation deve quindi essere affrontata per classi di controllo — authorization, input handling ed environment hygiene — e non solamente correggendo i cinque URL osservati.

Dopo le correzioni è raccomandato un retest focalizzato basato sulla matrice PASS/FAIL di questo report.

---

# 28. Teaching Debrief — What Makes This a VAPT Report

Un buon report non è:

~~~text
tool output
+
screenshot
+
severity
~~~

Un buon report collega invece:

~~~text
BUSINESS RULE
   ↓
EXPECTED CONTROL
   ↓
TEST
   ↓
EVIDENCE
   ↓
OBSERVED FAILURE
   ↓
DEMONSTRATED IMPACT
   ↓
ROOT CAUSE
   ↓
REMEDIATION
   ↓
RETEST
~~~

Per ogni finding lo studente deve essere in grado di rispondere:

1. Da dove parte l'attaccante?
2. Quale precondizione serve?
3. Quale boundary viene attraversato?
4. Quale singola prova lo dimostra?
5. Cosa ha ottenuto realmente?
6. Quale passo successivo diventa plausibile?
7. Quel passo successivo è stato testato o è solo ipotizzato?
8. Dove ci siamo fermati e perché?
9. Qual è la root cause?
10. Come dimostreremo che la fix funziona?

Questa è la differenza tra “ho trovato una vulnerabilità” e un deliverable professionale che permette a cliente, sviluppatori e security team di decidere cosa fare.

---

# Appendix A — Training Credentials

> Esclusivamente ambiente locale UmbraMarket. Non riutilizzare altrove.

~~~text
alice / Alice123!
bob   / Bob123!
admin / Admin123!
~~~

Gli studenti possono usare Alice e Bob per dimostrare i boundary customer. L'account admin non è necessario per produrre le evidenze offensive minime; è utile soprattutto nella fase di retest per verificare che una policy amministrativa corretta consenta il comportamento legittimo.

---

# Appendix B — Evidence Files

~~~text
reporting/evidence/
├── E-01-alice-own-order.txt
├── E-02-bob-own-order.txt
├── E-03-cross-user-order.txt
├── E-04-customer-admin-stats.txt
├── E-05-staging-information-disclosure.txt
├── E-06-sql-injection-minimal-proof.txt
└── E-07-reflected-xss-minimal-proof.txt
~~~

---

# Appendix C — Instructor Use

Consegnare questo report agli studenti **dopo** che hanno prodotto almeno una propria bozza.

Uso suggerito in aula:

1. confrontare il loro finding con F-01;
2. evidenziare expected vs observed;
3. far cercare ogni frase di impatto che non ha una Evidence ID;
4. discutere confirmed vs plausible;
5. confrontare horizontal e vertical authorization;
6. mostrare perché la chain staging→admin è più utile di due finding isolati;
7. far riscrivere un finding scanner-based usando solamente fatti verificati;
8. chiudere con remediation e retest, non con la PoC.

Il report finale non è la fine del pentest perché “abbiamo finito gli attacchi”. È il punto in cui l'evidenza viene trasformata in decisioni tecniche e di rischio.
