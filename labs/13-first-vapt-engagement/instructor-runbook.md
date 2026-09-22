# UmbraMarket — First VAPT Engagement

## Scaletta docente per una lezione pratica da 4 ore

### Obiettivo della lezione

Gli studenti devono uscire dalla lezione avendo capito concretamente questa differenza:

> Uno scanner produce candidate findings.  
> Un penetration tester raccoglie evidenze, formula ipotesi, verifica in modo controllato e conclude soltanto ciò che ha realmente dimostrato.

Il laboratorio non è una CTF e non ha come obiettivo “trovare tutto”.

Il percorso della giornata è:

```text
SCOPE
  ↓
RECON
  ↓
ENUMERATION
  ↓
VULNERABILITY ASSESSMENT
  ↓
TRIAGE
  ↓
MANUAL VALIDATION
  ↓
CONTROLLED PT
  ↓
IMPACT
  ↓
REPORT
```

---

# Prima della lezione — preparazione docente

Avviare la piattaforma:

```bash
cd labs/platform
docker compose down -v
docker compose up -d --build
./scripts/check.sh
```

Verificare:

```text
http://127.0.0.1:5005
http://127.0.0.1:8080
http://127.0.0.1:9090
```

Tenere pronti:

```text
labs/13-first-vapt-engagement/
├── README.md
├── student-workbook.md
├── instructor-solution.md
└── artifacts/
    ├── 00-client-brief.txt
    └── 01-scanner-output.txt
```

Non distribuire subito:

```text
01-scanner-output.txt
instructor-solution.md
```

Gli studenti devono partire solamente dal brief cliente.

---

# 00:00–00:10 — Apertura

Non iniziare parlando di vulnerabilità.

Dire qualcosa del tipo:

> Oggi non faremo un esercizio nel quale vi dico quale vulnerabilità cercare.
>
> Siete un piccolo team di security consultant.
>
> Avete ricevuto un incarico da UmbraMarket.
>
> Il vostro lavoro non è “hackerare la macchina”.
>
> Il vostro lavoro è rispondere alla domanda del cliente con evidenze.

Scrivere alla lavagna:

```text
EVIDENZA → IPOTESI → VERIFICA → CONCLUSIONE
```

Poi aggiungere:

```text
NON DOBBIAMO TROVARE TUTTO.
DOBBIAMO DIMOSTRARE BENE QUELLO CHE TROVIAMO.
```

Non mostrare ancora:

- IDOR;
- `/api/admin/stats`;
- SQL injection;
- XSS;
- percorsi interessanti.

---

# 00:10–00:25 — Client Brief e Scope

Distribuire:

```text
artifacts/00-client-brief.txt
```

Lasciare 5 minuti per leggerlo.

Poi chiedere alla classe:

```text
Qual è la domanda del cliente?
```

Risposta che vogliamo far emergere:

```text
Può un normale cliente autenticato accedere
a dati o funzionalità non autorizzate?

I servizi di staging espongono informazioni
utili a un possibile attaccante?
```

Poi chiedere:

```text
Qual è lo scope?
```

Scrivere:

```text
IN SCOPE

127.0.0.1:5005
127.0.0.1:8080
127.0.0.1:9090
```

e:

```text
OUT OF SCOPE

127.0.0.1:3000
altre porte
LAN
Internet
```

### Punto didattico

Spiegare:

```text
scoperto ≠ autorizzato
```

Se durante una scansione vedono porta 3000:

> La annotiamo. Non la tocchiamo.

Domanda alla classe:

> Se Nmap vi mostra una porta che non compare nello scope, cosa fate?

Risposta:

```text
documento → non testo
```

---

# 00:25–00:50 — Reconnaissance ed Enumeration

Ora possono iniziare a lavorare.

Strumenti consentiti:

```text
browser
curl
DevTools
Nmap
Burp/ZAP se già lo conoscono
```

Non dare loro i comandi.

Chiedere invece:

> Qual è la prima cosa che vorreste sapere?

Dovrebbero emergere:

```text
quali servizi?
quali porte?
che tipo di applicazioni?
che comportamento HTTP?
```

Lasciarli lavorare circa 15–20 minuti.

---

## Primo checkpoint docente

Fermare la classe.

Creare alla lavagna una tabella:

| Asset | Evidenza | Interpretazione |
|---|---|---|
| 5005 | HTTP / UmbraMarket | applicazione principale |
| 8080 | HTTP / Admin staging | superficie aggiuntiva |
| 9090 | HTTP / file service | directory/file exposure |

Poi chiedere:

> Abbiamo trovato tre vulnerabilità?

Risposta:

```text
NO
```

Abbiamo trovato:

```text
SUPERFICIE DI ATTACCO
```

Questa distinzione deve essere molto chiara.

---

# 00:50–01:05 — Web Mapping

Ora gli studenti esplorano manualmente le applicazioni.

Obiettivo:

```text
non attaccare

capire
```

Chiedere di annotare:

```text
endpoint
pagine
parametri
autenticazione
cookie/sessioni
API
file
informazioni esposte
```

Domanda guida:

> Prima di cercare una vulnerabilità, cosa dobbiamo capire?

Risposta:

```text
come funziona normalmente l'applicazione
```

Suggerire di usare Alice e Bob.

```text
alice / Alice123!
bob   / Bob123!
```

Non dire perché abbiamo due account.

---

# 01:05–01:20 — Primo debrief

Fermare nuovamente tutti.

Chiedere:

> Cosa sappiamo?

E separare le risposte in due colonne.

```text
FACT                 IPOTESI

5005 è HTTP           potrebbe avere API vulnerabili
esiste /api/orders    gli ID potrebbero essere prevedibili
8080 è admin staging  potrebbe contenere informazioni utili
9090 espone file      potrebbe esserci information disclosure
```

Se qualcuno dice:

> Gli ID sono incrementali quindi c'è un IDOR.

Correggere subito:

```text
NO.

ID prevedibile ≠ IDOR.
```

Serve ancora:

```text
authorization failure
```

---

# 01:20–01:35 — PAUSA 1

Durante la pausa preparare lo scanner report.

---

# 01:35–01:45 — Introduzione al Vulnerability Assessment

Al rientro dire:

> Il cliente ci comunica che una società esterna ha già eseguito uno scanner.

Distribuire:

```text
artifacts/01-scanner-output.txt
```

Non commentarlo.

Dare una sola consegna:

> Per ogni finding decidete quale informazione vi manca per poterlo accettare come vulnerabilità.

---

# 01:45–02:05 — Triage dello Scanner

Gli studenti compilano il workbook.

Devono lavorare su:

```text
S-001 Possible RCE
S-002 Admin exposed
S-003 Missing CSP
S-004 Possible BOLA
S-005 Environment disclosure
```

Girare tra i gruppi facendo domande.

Non dare risposte.

Domande utili:

```text
Qual è l'evidenza?

Qual è l'assunzione dello scanner?

Versione vulnerabile significa automaticamente exploitable?

Endpoint prevedibile significa automaticamente accesso non autorizzato?

Admin exposed significa automaticamente compromesso?

Missing CSP quale impatto dimostra da sola?
```

---

# 02:05–02:20 — Discussione collettiva VA

Prendere S-001.

Scrivere:

```text
CRITICAL
Possible Remote Code Execution
```

Chiedere:

> Chi considera questo finding confermato?

Poi:

> Qual è l'evidenza?

Dovrebbero arrivare a:

```text
banner/version fingerprint
```

Scrivere:

```text
VERSION MATCH
       ≠
EXPLOITABILITY
```

Poi:

```text
FINDING DELLO SCANNER
        ↓
CANDIDATO
        ↓
VERIFICA
        ↓
VALIDATO / NON VALIDATO
```

Questo è il cuore della parte VA.

---

# 02:20–02:35 — Prioritizzazione

Ora chiedere:

> Avete tempo limitato. Quali piste investigate per prime?

Lasciare che discutano.

Possibili piste:

```text
RCE scanner
Admin staging
CSP
Orders API
File server
```

Non dichiarare una risposta giusta.

Chiedere invece di motivare:

```text
Perché?
Quale costo ha il test?
Quale potenziale impatto?
Quanto è facile ottenere evidenza?
```

Portarli naturalmente verso:

```text
authorization / admin exposure
```

---

# 02:35–02:50 — PAUSA 2

---

# 02:50–03:05 — Happy Path prima del PT

Qui cambiare approccio.

Dire:

> Adesso entriamo nella parte penetration testing.
>
> Però prima di manipolare una richiesta dobbiamo sapere quale sia il comportamento corretto.

Far autenticare:

```text
Alice
```

Osservare:

```text
/api/me
/api/orders
/api/orders/1001
```

Poi Bob:

```text
/api/orders/1002
```

Scrivere:

```text
BASELINE
```

Spiegare:

> Senza baseline non sappiamo cosa sia anomalo.

---

# 03:05–03:20 — Formulazione dell'ipotesi

Chiedere:

> Cosa avete osservato sugli ordini?

Probabile risposta:

```text
hanno ID numerici
```

Risposta docente:

> Benissimo. Questo è un fatto.

Poi:

> Quale potrebbe essere l'ipotesi?

```text
forse il server controlla soltanto
che l'utente sia autenticato
ma non controlla ownership
```

Scrivere:

```text
FACT
/api/orders/{id}

        ↓

HYPOTHESIS
missing ownership check
```

Poi chiedere:

> Qual è il test minimo possibile?

Risposta:

```text
Alice richiede un ordine noto di Bob
```

---

# 03:20–03:30 — Controlled Proof

Eseguire il test.

```text
Alice
  ↓
GET /api/orders/1002
```

Il server restituisce Bob.

Fermare immediatamente la classe.

Dire:

> STOP.

E chiedere:

> Perché ci fermiamo?

Risposta:

```text
abbiamo già evidenza sufficiente
```

Scrivere:

```text
PROOF ≠ MAXIMUM DAMAGE
```

Poi:

```text
Una richiesta
+
una risposta
=
finding dimostrato
```

---

# 03:30–03:40 — Costruzione dell'evidenza

Far compilare insieme:

```text
FACT
Alice è autenticata.

FACT
1002 appartiene a Bob.

ACTION
Alice richiede /api/orders/1002.

EXPECTED
403 / 404 oppure risposta negata.

OBSERVED
HTTP 200 + dati ordine Bob.

CONCLUSION
Manca il controllo object-level authorization.
```

Poi chiedere:

> Cosa possiamo affermare?

Risposta corretta:

```text
Un cliente autenticato può leggere
un ordine appartenente a un altro cliente.
```

## Overclaim exercise

Proporre verbalmente:

> “Un attaccante può scaricare tutti i dati del database.”

Chiedere:

> Possiamo scriverlo?

```text
NO
```

> “È possibile prendere il controllo del server.”

```text
NO
```

> “La vulnerabilità permette l'accesso cross-user agli ordini.”

```text
SÌ
```

---

# 03:40–03:55 — Seconda pista: Admin

Se il tempo lo consente, tornare al servizio 8080.

Domanda:

> Durante recon avevamo trovato qualcosa di interessante sull'admin?

Lasciarli esplorare.

Percorso possibile:

```text
/admin staging
     ↓
robots.txt
     ↓
/backup/
/draft/
     ↓
appsettings.old
     ↓
assets/app.js
     ↓
/api/admin/stats
```

La cosa importante non è il path.

La cosa importante è il ragionamento:

```text
INFORMATION DISCLOSURE
          ↓
NUOVA INFORMAZIONE
          ↓
NUOVA IPOTESI
          ↓
VERIFICA
```

---

# 03:55–04:05 — Authorization verticale

Se individuano:

```text
/api/admin/stats
```

far provare solamente con Alice.

Se riceve:

```text
HTTP 200
```

chiedere:

> Che differenza c'è rispetto all'ordine di Bob?

Far emergere:

```text
BOLA / IDOR

utente A
→ oggetto utente B
```

contro:

```text
BROKEN FUNCTION LEVEL AUTHORIZATION

customer
→ funzione admin
```

Ottimo punto per collegare horizontal e vertical authorization.

---

# 04:05–04:20 — Scrittura del Finding

Ogni gruppo sceglie preferibilmente il BOLA.

Deve compilare:

```text
TITLE

ASSET

SUMMARY

PRECONDITIONS

STEPS TO REPRODUCE

EVIDENCE

IMPACT

WHAT IS NOT DEMONSTRATED

SEVERITY + RATIONALE

REMEDIATION

RETEST
```

Dare 10–15 minuti.

---

# 04:20–04:35 — Revisione collettiva

Prendere un finding reale di un gruppo.

Leggerlo insieme.

Per ogni frase chiedere:

```text
FACT?
INTERPRETATION?
HYPOTHESIS?
OVERCLAIM?
```

Correggere soprattutto parole come:

```text
tutti
completo
totale
sempre
qualsiasi
compromesso
critico
```

quando non supportate.

---

# 04:35–04:45 — Remediation

Chiedere:

> Come correggereste il problema?

Evitare risposte come:

```text
nascondere gli ID
rendere gli ID più lunghi
usare UUID
togliere il link
```

Arrivare a:

```text
SERVER-SIDE AUTHORIZATION
```

Concettualmente:

```text
requested order
        +
authenticated user
        ↓
ownership check
        ↓
ALLOW / DENY
```

La query dovrebbe essere concettualmente:

```text
dammi l'ordine 1002
SE appartiene all'utente autenticato
```

non:

```text
dammi semplicemente l'ordine 1002
```

---

# 04:45–04:55 — Executive Summary

Ultimo esercizio.

Massimo 100 parole.

Devono spiegare a un manager:

```text
cosa abbiamo trovato
chi può sfruttarlo
quale impatto è dimostrato
cosa deve essere corretto
```

Senza:

```text
payload
cookie
endpoint details inutili
gergo OWASP non spiegato
```

---

# 04:55–05:00 — Chiusura

Scrivere alla lavagna:

```text
SCANNER
   ↓
segnale

TESTER
   ↓
ipotesi

VERIFICA
   ↓
evidenza

PENTEST
   ↓
impatto dimostrato

REPORT
   ↓
decisione utile al cliente
```

Poi chiudere con queste domande:

1. Quale finding sembrava più grave all'inizio?
2. Quale finding siamo riusciti davvero a dimostrare?
3. Quando abbiamo deciso di fermarci?
4. Qual è la differenza tra “potrebbe essere vulnerabile” e “abbiamo dimostrato che è vulnerabile”?
5. Cosa ha aggiunto il tester rispetto allo scanner?

---

# Se la classe va troppo veloce

Non aggiungere immediatamente nuove vulnerabilità.

Aumentare invece la profondità.

Chiedere:

```text
Qual è la root cause?

Quale logging potrebbe rilevare questo comportamento?

403 o 404: quale scegliereste e perché?

UUID risolverebbe davvero il problema?

Come testereste la remediation?

Come distinguereste severity tecnica e business impact?

Quale evidenza inserireste nel report?

Quale evidenza NON inserireste?
```

Solo successivamente lasciare emergere:

```text
SQL injection
XSS
```

senza trasformarle in attività di estrazione massiva.

---

# Se la classe va troppo lenta

Saltare la seconda pista Admin.

Concentrarsi solamente su:

```text
scope
→ recon
→ scanner
→ triage
→ BOLA
→ report
```

Questo percorso da solo è sufficiente per raggiungere l'obiettivo della lezione.

---

# Risultato minimo atteso

Alla fine della lezione ogni studente dovrebbe riuscire a spiegare:

```text
Un vulnerability assessment identifica potenziali problemi.

Un penetration test verifica in modo controllato
se quei problemi sono realmente sfruttabili
e quale impatto sia possibile dimostrare.

La prova deve essere sufficiente,
non massimamente invasiva.
```

## Frase finale della giornata

> Il valore del pentester non è quante richieste riesce a fare, ma quanto bene riesce a trasformare un'osservazione in una conclusione dimostrabile.
