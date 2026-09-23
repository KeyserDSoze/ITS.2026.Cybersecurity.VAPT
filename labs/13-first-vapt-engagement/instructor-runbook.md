# UmbraMarket — First VAPT Engagement
## Instructor Runbook — blocco nominale da 4 ore

Questo runbook è progettato con circa **3 ore di contenuto essenziale**, due pause da almeno 15 minuti e circa 30 minuti di buffer/estensione.

## Obiettivo

Portare gli studenti da:

```text
"devo usare dei tool"
```

a:

```text
"devo capire un'organizzazione, scegliere le ipotesi migliori,
verificarle con il minimo impatto e sostenere le conclusioni con evidenze"
```

Il VA tecnico già presente è sufficiente. Non aggiungere vulnerabilità solo per riempire la lezione.

---

# Preparazione docente

Avviare:

```bash
cd labs/platform
docker compose down -v
docker compose up -d --build
./scripts/check.sh
```

Tenere separati i materiali per wave.

Non consegnare l'intera cartella `discovery/` in una volta sola se vuoi ottenere il massimo dall'esercizio.

Materiale docente:

```text
instructor-runbook.md
instructor-human-attack-surface.md
instructor-solution.md
```

---

# 00:00–00:15 — Brief e scope

Consegna soltanto:

`artifacts/00-client-brief.txt`

Domande:

- cosa vuole sapere il cliente?
- cosa possiamo testare?
- cosa non possiamo testare?
- quale sarebbe una conclusione utile?

Lavagna:

```text
SCOPERTO ≠ AUTORIZZATO
```

Non parlare ancora di tecniche.

---

# 00:15–00:30 — Wave 1: capire il cliente

Consegna:

```text
discovery/01-company-overview.md
discovery/02-org-roles.md
```

Consegna agli studenti:

> Non cercate vulnerabilità. Scrivete ciò che avete capito e ciò che vorreste chiedere.

Ogni gruppo produce:

```text
5 FACT
5 QUESTIONS
3 PROBABLY NOT USEFUL
```

Se qualcuno propone subito phishing, tailgating, USB ecc.:

> Quale fatto ti ha portato lì? Cosa stai assumendo?

---

# 00:30–00:45 — Wave 2: interviste e osservazioni

Consegna:

```text
discovery/03-interview-notes.md
discovery/04-site-observation.md
```

Far marcare ogni elemento:

```text
OBSERVED
REPORTED
INFERRED
UNKNOWN
```

Cercare contraddizioni, non “vulnerabilità”.

Esempi da far emergere senza suggerire la risposta:

- policy dichiarata vs comportamento osservato;
- postazione condivisa vs account condiviso;
- porta tenuta aperta vs persona conosciuta;
- laptop visibile vs sessione realmente sbloccata.

---

# 00:45–00:55 — Primo decision checkpoint

Ogni gruppo sceglie 3 osservazioni e compila:

```text
OBSERVATION
WHAT I NEED TO KNOW
WHY IT MAY MATTER
```

Non si parla ancora di exploit.

Scrivere:

```text
INFORMAZIONE
      ↓
DOMANDA
      ↓
NUOVA INFORMAZIONE
      ↓
SOLO DOPO: IPOTESI
```

---

# 00:55–01:10 — PAUSA 1

---

# 01:10–01:30 — Wave 3: tempo, controlli, pubblico

Consegna:

```text
discovery/05-operating-calendar.md
discovery/06-controls-and-policy-excerpts.md
discovery/07-public-footprint.md
```

Ora possono correlare le fonti.

Domande docente:

- quale ipotesi avete dovuto ridimensionare dopo aver visto un controllo?
- quale idea richiederebbe una condizione che martedì 09:00–13:00 non esiste?
- quale informazione pubblica è soltanto contesto?
- quali due informazioni, messe insieme, diventano più interessanti?

Messaggio:

```text
BUONA IPOTESI + RISULTATO NEGATIVO = BUON LAVORO
```

---

# 01:30–01:45 — Assessment Decision Board

Consegna:

`assessment-decision-board.md`

Budget:

```text
10 unità
```

Gli studenti assegnano un costo alle proprie idee.

Non esiste una tabella “giusta”.

Contesta però decisioni non motivate:

> Perché spendere 5 su questa strada quando ne hai una da 1 che risponde direttamente alla domanda del cliente?

Devono includere almeno due:

```text
LOW PRIORITY / TEST LATER / OUT OF SCOPE / TOO INVASIVE / STOP
```

---

# 01:45–02:05 — Recon tecnico e web mapping

Ora entra la macchina.

Consentire:

```text
browser
curl
DevTools
Nmap
Burp/ZAP
```

Obiettivo:

```text
capire la superficie
non trovare subito la vulnerabilità
```

Fermare affermazioni come:

```text
porta aperta = vulnerabilità
ID numerico = IDOR
admin = compromesso
versione = exploitable
```

---

# 02:05–02:15 — Technical checkpoint

Lavagna:

| Evidenza | Cosa significa | Cosa NON significa |
|---|---|---|
| 5005 HTTP | web app | vulnerabile |
| 8080 Admin | superficie | admin bypass |
| 9090 files | file service | leak critico |
| /api/orders/{id} | object reference | BOLA |

Collegare la superficie tecnica a quella organizzativa.

Domanda:

> Quale informazione del cliente cambia il modo in cui interpretiamo quello che vediamo tecnicamente?

---

# 02:15–02:30 — PAUSA 2

---

# 02:30–02:45 — Vulnerability Assessment

Consegna:

`artifacts/01-scanner-output.txt`

Una sola istruzione:

> Non ditemi quale finding ha severity più alta. Ditemi cosa manca per poter credere allo scanner.

Lavorare su:

```text
S-001 Possible RCE
S-002 Admin exposed
S-003 Missing CSP
S-004 Possible BOLA
S-005 Environment disclosure
```

VA:

```text
SIGNAL
→ ASSUMPTION
→ VALIDATION NEEDED
```

---

# 02:45–03:00 — Triage

Ogni gruppo deve scegliere quali finding meritano tempo.

Per S-001 far emergere:

```text
banner/version
≠
prerequisiti
≠
exploitability
≠
impact
```

Per S-004:

```text
predictable ID
≠
authorization failure
```

Poi chiedere:

> Qual è il test minimo che distinguerebbe le due cose?

---

# 03:00–03:15 — Controlled PT

Baseline:

```text
Alice → proprio ordine
Bob   → proprio ordine
```

Ipotesi:

```text
forse il backend verifica autenticazione
ma non ownership
```

Test minimo:

```text
Alice → ordine noto di Bob
```

Se il server restituisce il record:

```text
STOP
```

Non enumerare altri ID.

Lavagna:

```text
PROOF ≠ MAXIMUM DAMAGE
```

---

# 03:15–03:30 — Finding

Compilare:

```text
FACT
HYPOTHESIS
ACTION
EXPECTED
OBSERVED
CONCLUSION
DEMONSTRATED IMPACT
NOT DEMONSTRATED
REMEDIATION
RETEST
```

Overclaim exercise:

```text
"può leggere l'ordine di Bob"                  → dimostrato
"può leggere tutti gli ordini"                 → non dimostrato
"ha compromesso il database"                   → non dimostrato
"può prendere il controllo del server"         → non dimostrato
```

---

# 03:30–04:00 — BUFFER / ESTENSIONE

Questa mezz'ora è deliberatamente libera.

Scegli in base alla classe.

## Opzione A — seconda pista tecnica

Admin staging:

```text
recon
→ informazione
→ nuova ipotesi
→ /api/admin/stats
→ authorization verticale
```

## Opzione B — attack chain organizzativa

Far scegliere tre elementi da fonti diverse e costruire una chain concettuale.

La chain può anche terminare con:

```text
CONTROL EFFECTIVE
STOP
```

## Opzione C — reporting

Un gruppo legge il finding.

La classe marca ogni frase:

```text
FACT
INTERPRETATION
HYPOTHESIS
OVERCLAIM
```

## Opzione D — executive summary

Massimo 100 parole.

---

# Se la classe va veloce

Non aggiungere exploit.

Aggiungere decisioni:

- quale test elimineresti?
- quale dato ti manca?
- quale controllo spezza la chain?
- cosa cambierebbe con una finestra di due settimane?
- cosa richiederebbe un engagement separato?
- quale evidenza negativa merita comunque di essere documentata?

# Se la classe va lenta

Taglia nell'ordine:

1. public footprint;
2. decision board dettagliato;
3. seconda pista Admin;
4. executive summary.

Non tagliare:

```text
scope
discovery
VA triage
BOLA validation
stop condition
```

---

# Risultato minimo

Alla fine devono saper spiegare:

```text
ATTACK SURFACE
≠
ELENCO DI PORTE
```

e:

```text
il pentester non cerca di attaccare tutto;
costruisce ipotesi,
sceglie quelle che meritano verifica,
considera controlli/costi/scope,
raccoglie la prova minima
e non afferma più di quanto abbia dimostrato.
```
