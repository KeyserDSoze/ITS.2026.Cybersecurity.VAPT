# Lab 12 — UmbraMarket Formative Capstone

## Scopo

Questo è il capstone **pubblico e formativo** del corso. Non coincide con una futura prova d'esame riservata.

Non contiene walkthrough né flag segreti. Devi organizzare il lavoro usando il metodo costruito nei moduli precedenti.

## Brief del cliente

UmbraMarket vuole una valutazione pre-release dell'ambiente di staging. Il cliente teme soprattutto:

- accessi non autorizzati a dati di altri utenti;
- input che alterano il comportamento del backend;
- informazioni sensibili esposte da servizi secondari;
- finding tecnici che potrebbero aumentare l'impatto se concatenati.

## Scope

Autorizzati:

```text
127.0.0.1:3000
127.0.0.1:5005
127.0.0.1:8080
127.0.0.1:9090
```

Opzionale, se il docente lo include:

```text
localhost:8888  # crAPI
```

Fuori scope:

- qualunque altra porta/host;
- LAN dell'aula;
- Internet;
- denial of service;
- social engineering;
- persistence;
- distruzione o cancellazione di dati.

## Modalità

Il capstone va trattato come **grey box**: puoi usare le credenziali didattiche già fornite, ma non devi leggere il sorgente di `labs/platform/umbramarket/app.py` durante l'assessment. Il sorgente potrà essere usato nel debrief.

## Tempo suggerito

```text
20 min  planning + scope recap
35 min  reconnaissance / mapping
60 min  vulnerability analysis + validation
30 min  evidence review
45 min  reporting
10 min  client briefing
```

Il docente può adattare il timebox.

## Deliverable obbligatori

1. `scope-summary.md`
2. `attack-surface.md`
3. almeno **3 finding validati**
4. per ogni finding: evidence + impact + remediation
5. almeno una relazione tra due osservazioni/finding che aumenti il rischio complessivo
6. Executive Summary, massimo 300 parole
7. briefing orale di 5 minuti

## Criteri di qualità

Conta più la qualità che il numero di bug.

Verranno osservati:

- rispetto dello scope;
- ordine del metodo;
- accuratezza tecnica;
- distinzione fatto/ipotesi;
- qualità delle evidenze;
- PoC proporzionate;
- severity motivata;
- remediation utile;
- chiarezza del report.

## Recovery loop — se ti blocchi

Non chiederti subito "quale payload uso?". Torna indietro:

```text
1. So davvero qual è il comportamento normale?
2. Ho mappato utenti, ruoli, oggetti e input?
3. Quale assunzione del server sto testando?
4. Posso cambiare una sola variabile?
5. Quale risultato confermerebbe o smentirebbe l'ipotesi?
```

## CHALLENGE

Trova almeno un finding che richieda ragionamento manuale e non sia semplicemente il risultato di uno scanner. Difendi la severity assegnata davanti alla classe.

## Cleanup

Al termine:

```bash
cd labs/platform
docker compose down -v
```

Se hai usato crAPI, arresta anche il relativo stack.

## Nota esami

Una futura variante valutativa riservata userà infrastruttura e materiale separati da questa repository pubblica.
