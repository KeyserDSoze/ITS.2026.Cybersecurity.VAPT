# 10 — Professional Reporting

## Missione di oggi

Hai note, screenshot, request, output di tool e finding raccolti durante il corso. Ora devi trasformarli in qualcosa che un cliente possa **capire, riprodurre, prioritizzare e correggere**.

Il report è il prodotto finale del pentest. Se è ambiguo o inutilizzabile, anche un buon lavoro tecnico perde valore.

## Prima di iniziare — quale report useresti?

Nel pre-test confronterai output grezzi, descrizioni tecniche e finding professionali. Dovrai scegliere cosa serve a sviluppatore, sysadmin e management.

## Cosa imparerai

- distinguere evidenza da conclusione;
- scrivere finding riproducibili;
- spiegare impatto tecnico e business;
- motivare severity senza affidarti solo al tool;
- proporre remediation verificabili;
- scrivere executive summary per un pubblico non tecnico;
- fare peer review.

## 1. Due pubblici, due livelli di dettaglio

Un report deve parlare almeno a:

### Tecnici

Devono poter capire:

- dove si trova il problema;
- come riprodurlo;
- quale evidenza lo dimostra;
- come correggerlo;
- come verificare la remediation.

### Management / CISO

Devono capire:

- cosa è stato testato;
- quali scenari di rischio sono stati dimostrati;
- quali aree hanno priorità;
- quali limiti ha avuto l'assessment.

Non serve mostrare ogni header HTTP nell'executive summary.

## 2. Struttura del report

Il template del corso prevede tipicamente:

```text
Executive Summary
Scope e metodologia
Sintesi dei risultati
Finding tecnici
Attack path / exploitation evidence quando rilevante
Raccomandazioni
Limitazioni
```

Usa [`../../templates/pentest-report-template.md`](../../templates/pentest-report-template.md).

## 3. Anatomia del finding

Un finding utile contiene:

```text
Titolo
Asset
Severity
Descrizione
Prerequisiti
Evidence
Steps to reproduce
Impact
Remediation
References
```

### Titolo

Deve descrivere il problema, non il tool.

Debole:

> "Burp issue High"

Migliore:

> "Controllo di autorizzazione insufficiente consente accesso agli ordini di altri utenti"

## 4. Descrizione: causa, non solo sintomo

Evita:

> "Cambiando ID funziona."

Preferisci:

> "L'endpoint accetta un identificatore di ordine controllabile dal client ma non verifica server-side che l'ordine appartenga all'utente autenticato."

Questo dice **perché** il problema esiste.

## 5. Evidence

Una buona evidenza deve essere sufficiente e minimizzata.

Esempio:

```text
1. Request di Alice verso ordine 1001 → 200
2. Stessa sessione, object ID 1002 → 200
3. Response contiene dati appartenenti a Bob
```

Sanitizza credenziali e dati non necessari.

## 6. Steps to reproduce

Devono permettere a un tecnico autorizzato di ripetere il test.

Caratteristiche:

- ordine chiaro;
- prerequisiti espliciti;
- valori rilevanti;
- risultato atteso vs osservato.

## 7. Impact

Evita frasi astratte come "un attaccante potrebbe fare danni".

Collega il problema a conseguenze concrete:

- accesso a dati personali;
- modifica di ordini;
- escalation di ruolo;
- interruzione del servizio;
- compromissione di un asset successivo.

Non inventare impatti non dimostrati.

## 8. Severity

CVSS può aiutare, ma la priorità deve essere motivata dal contesto.

Scrivi sempre **perché** hai scelto quella severity.

Esempio:

```text
Severity: High
Motivazione: un utente autenticato standard può accedere direttamente ai dati ordine di altri clienti senza privilegi aggiuntivi; il difetto è riproducibile sull'endpoint Internet-facing.
```

## 9. Remediation

Una remediation utile agisce sulla causa.

Debole:

> "Sanitizzare input."

Migliore:

> "Applicare un controllo server-side dell'ownership dell'ordine a ogni endpoint che legge o modifica la risorsa, centralizzando la policy di authorization e aggiungendo test automatici cross-user."

Aggiungi quando possibile anche un criterio di retest.

## 10. Executive Summary

Non è una lista di CVE.

Struttura semplice:

```text
Perché è stato eseguito il test
Che cosa è stato testato
Postura generale osservata
2-3 rischi principali
Priorità raccomandate
Limitazioni rilevanti
```

Deve essere comprensibile senza conoscere Burp, Nmap o Metasploit.

## Esempio svolto — da nota a finding

Nota grezza:

```text
Alice cambia 1001 in 1002 e vede Bob. screenshot ok. high?
```

Finding:

```text
Titolo: Broken object level authorization sugli ordini
Asset: api.umbramarket.lab
Descrizione: l'API usa l'ID ordine fornito dal client senza verificare ownership server-side.
Evidence: sessione Alice + GET /orders/1002 restituisce dati Bob.
Impact: accesso non autorizzato ai dati ordine di altri clienti.
Remediation: controllo ownership centralizzato su lettura/modifica ordine.
```

La tecnica era già corretta; il reporting la rende utilizzabile.

## Laboratorio — From Evidence to Report

### GUIDED

Prendi un finding già validato.

1. separa facts e interpretazioni;
2. scegli un titolo causale;
3. scrivi descrizione in 3-5 frasi;
4. seleziona l'evidenza minima;
5. scrivi steps to reproduce;
6. descrivi solo l'impatto dimostrato o ragionevolmente supportato;
7. assegna severity motivata;
8. scrivi remediation sulla causa.

### Se sei bloccato

**Hint 1:** completa: "Il sistema consente ___ perché non verifica ___."

**Hint 2:** se il tecnico non sapesse nulla del tuo lab, riuscirebbe a riprodurre il problema?

### INDEPENDENT

Scrivi un secondo finding senza walkthrough e poi confrontalo con la checklist.

### CHALLENGE

Scrivi una executive summary di massimo una pagina e presenta lo stesso finding:

- in 2 minuti a un tecnico;
- in 2 minuti a un manager.

## Peer review

Scambia un finding e controlla:

- problema chiaro?
- riproducibile?
- evidence sufficiente?
- fatto e ipotesi separati?
- impatto concreto?
- severity motivata?
- remediation sulla causa?

## Deliverable professionale

Mini report completo basato sul template del corso.

## Prima di chiudere

Dovresti saper spiegare perché:

- scanner output non è un finding;
- executive summary e dettaglio tecnico hanno pubblici diversi;
- remediation generiche sono poco utili;
- un impatto non dimostrato non va presentato come fatto.

Completa l'autoverifica finale.

> Un finding che nessuno riesce a capire o correggere non è un buon deliverable, anche se tecnicamente corretto.