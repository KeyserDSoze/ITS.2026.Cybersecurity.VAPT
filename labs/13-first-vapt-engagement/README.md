# Lab 13 — UmbraMarket First VAPT Engagement

## Obiettivo

Questo laboratorio simula un piccolo assessment end-to-end:

```text
customer discovery
→ attack surface
→ prioritizzazione
→ recon tecnico
→ vulnerability assessment
→ validazione manuale
→ controlled PT
→ impatto
→ report
```

Non è una CTF. Non esistono flag e non vince chi trova più vulnerabilità.

L'obiettivo è imparare a decidere:

```text
cosa so
cosa non so
cosa merita una domanda
cosa merita un test
cosa non vale la pena testare
quando ho evidenza sufficiente
```

## Scenario

UmbraMarket sta preparando una nuova release del proprio portale B2B e chiede un assessment limitato.

Tutto il materiale è fittizio. I target tecnici sono esclusivamente locali.

## Stack tecnico

```bash
cd labs/platform
docker compose up -d --build
./scripts/check.sh
```

Target autorizzati:

```text
127.0.0.1:5005   UmbraMarket Guided
127.0.0.1:8080   Admin staging
127.0.0.1:9090   File service
```

La porta 3000 e qualsiasi altro host/servizio sono fuori scope.

---

# Discovery pack

Il materiale non va consegnato tutto insieme.

## Wave 0 — incarico

`artifacts/00-client-brief.txt`

Serve a capire obiettivo, scope e Rules of Engagement.

## Wave 1 — capire l'azienda

```text
discovery/01-company-overview.md
discovery/02-org-roles.md
```

Consegna:

- estrarre fatti;
- scrivere domande;
- evitare ancora di proporre attacchi.

## Wave 2 — informazioni meno pulite

```text
discovery/03-interview-notes.md
discovery/04-site-observation.md
```

Qui compaiono:

- dichiarazioni non verificate;
- possibili contraddizioni;
- abitudini;
- dettagli irrilevanti;
- informazioni che acquistano senso solo se correlate.

Consegna:

- distinguere OBSERVED / REPORTED / INFERRED;
- aggiornare le domande;
- iniziare a formulare ipotesi, senza trasformarle in finding.

## Wave 3 — tempo, controlli e informazioni pubbliche

```text
discovery/05-operating-calendar.md
discovery/06-controls-and-policy-excerpts.md
discovery/07-public-footprint.md
```

Consegna:

- individuare controlli che potrebbero spezzare una attack path;
- individuare ipotesi che non sono verificabili nella finestra dell'engagement;
- correlare più fonti.

## Decisione

Usare:

`assessment-decision-board.md`

Ogni gruppo ha 10 unità didattiche di assessment e deve scegliere cosa verificare.

Un buon risultato può essere:

```text
TEST NOW
ASK CLIENT
TEST LATER
LOW PRIORITY
OUT OF SCOPE
TOO INVASIVE
INSUFFICIENT EVIDENCE
STOP
```

---

# Parte tecnica

Dopo la discovery organizzativa:

1. recon/enumeration dei target locali;
2. web mapping;
3. apertura di `artifacts/01-scanner-output.txt`;
4. triage dei candidate findings;
5. validazione manuale;
6. PoC minima;
7. finding e remediation.

La parte VA sul sito è volutamente già predisposta. Non occorre aggiungere ulteriori scanner o vulnerabilità per completare il laboratorio.

## Finding tecnico principale consigliato

Il percorso didattico principale rimane la verifica di authorization sugli ordini. L'Admin staging può essere usato come seconda pista se il tempo lo consente.

SQL injection e XSS presenti nella piattaforma non sono obiettivi obbligatori.

---

# Regole

Consentito:

- browser, DevTools, curl;
- Nmap sulle sole porte autorizzate;
- Burp Suite Community / OWASP ZAP;
- account didattici;
- modifiche manuali controllate a parametri/ID;
- threat modeling e tabletop su processi umani/fisici;
- PoC minima e reversibile.

Non consentito:

- brute force;
- denial of service;
- estrazione massiva;
- persistence;
- test verso persone reali;
- social engineering reale;
- dispositivi fisici malevoli;
- accessi fisici non autorizzati;
- test verso altri host;
- continuare quando l'evidenza è già sufficiente.

## Account didattici

```text
alice / Alice123!
bob   / Bob123!
```

---

# Deliverable

Ogni gruppo produce:

1. Scope statement;
2. Source/Evidence Board;
3. almeno 12 osservazioni con relative domande;
4. 5 ipotesi motivate;
5. almeno 2 decisioni motivate di non procedere;
6. Assessment Decision Board;
7. Attack Surface Map;
8. Attack Surface Inventory tecnico;
9. triage VA;
10. almeno un finding validato;
11. una decision path / attack chain;
12. remediation;
13. Evidence Pack numerato;
14. VAPT Final Report usando `reporting/final-report-template.md`;
15. executive summary ≤100 parole.

## Principio

```text
INTERESSANTE
≠
UTILE

POSSIBILE
≠
PLAUSIBILE

PLAUSIBILE
≠
AUTORIZZATO

AUTORIZZATO
≠
CONVENIENTE

CANDIDATE FINDING
≠
VULNERABILITÀ DIMOSTRATA
```


---

# Guida alla rilettura

Il file lesson-recap.md è il documento da lasciare agli studenti dopo la lezione.

Non è un walkthrough e non sostituisce il laboratorio. Ricostruisce il ragionamento completo:

~~~text
cliente → scope → discovery → attack surface → VA
→ PT → evidenze → finding → remediation → retest → report
~~~

Può essere usato anche dal docente come traccia concettuale rapida, mentre instructor-runbook.md rimane la guida operativa per la conduzione in aula.

---

# Reporting finale

La parte tecnica non termina con la PoC.

Materiale:

```text
reporting/
├── final-report-template.md
├── sample-client-report.md
├── instructor-report-review.md
└── evidence/
    ├── E-01-alice-own-order.txt
    ├── E-02-bob-own-order.txt
    ├── E-03-cross-user-order.txt
    └── E-04-customer-admin-stats.txt
```

Gli studenti devono vedere l'intero ciclo:

```text
finding
→ evidence pack
→ impatto
→ remediation
→ retest
→ executive summary
→ final client report
```

Il sample report va mostrato **dopo** che i gruppi hanno provato a scrivere almeno il finding principale, così resta un confronto e non una soluzione da copiare.
