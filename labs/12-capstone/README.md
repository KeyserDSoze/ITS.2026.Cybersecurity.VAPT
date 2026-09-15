# Lab 12 — UmbraMarket Mini Assessment

## Natura dell'attività

Questo è un **capstone pubblico e formativo**, non la prova d'esame. Tutti i sistemi, utenti, dati, output e vulnerabilità sono fittizi e creati per il corso.

Non c'è un walkthrough tecnico. Il laboratorio verifica il processo:

```text
scope → osservazione → ipotesi → test → evidenza → finding → remediation → comunicazione
```

## Come usare il dossier

Gli artefatti sono organizzati in fasi. **Non aprire tutto all'inizio.**

Prima di aprire l'artefatto successivo, annota:

```text
COSA SO
COSA IPOTIZZO
COSA FAREI ADESSO
QUALE OUTPUT MI ASPETTO
```

Poi confronta la tua decisione con il nuovo artefatto.

## Fase 0 — Briefing

Aprire:

1. `artifacts/00-client-brief.txt`
2. `artifacts/01-scope-and-roe.txt`

Produrre il piano iniziale prima di continuare.

## Fase 1 — Recon

Aprire:

3. `artifacts/02-dns-observations.txt`
4. `artifacts/03-service-enumeration.txt`

Aggiornare l'Attack Surface Inventory.

## Fase 2 — Web mapping

Aprire:

5. `artifacts/04-web-observations.txt`

Scegliere quali due superfici meritano priorità e motivarlo.

## Fase 3 — Vulnerability analysis

Aprire:

6. `artifacts/05-scanner-summary.txt`

Non trasformare gli alert in finding. Decidere cosa richiede validazione.

## Fase 4 — Manual validation

Aprire:

7. `artifacts/06-api-comparison.txt`
8. `artifacts/07-controlled-validation.txt`

Decidere se esiste un finding, quale evidenza è sufficiente e dove fermarsi.

## Fase 5 — Business context

Aprire:

9. `artifacts/08-client-context.txt`

Rivalutare impatto, priorità e remediation alla luce del contesto.

## Fase 6 — Evidence review

Aprire:

10. `artifacts/09-evidence-review.txt`

Controllare cosa manca prima di scrivere il report.

## Deliverable

Consegna:

1. Scope Summary
2. Attack Surface Inventory
3. Facts / Hypotheses / Next Tests
4. almeno un finding validato, se supportato dalle evidenze
5. Evidence Pack
6. Executive Summary
7. remediation prioritarie
8. breve presentazione cliente

## Regole

- Restare dentro lo scope.
- Non inventare evidenze mancanti.
- Un alert non è automaticamente un finding.
- Una tecnologia dichiarata da un banner non è automaticamente verificata.
- Fermarsi quando la PoC minima dimostra l'impatto richiesto.
- È accettabile scartare un'ipotesi.
- È accettabile concludere che un finding non è confermato.

## CHALLENGE

Costruire un attack path che colleghi almeno due osservazioni senza trasformare correlazione in causalità. Indicare chiaramente quali passaggi sono dimostrati e quali restano potenziali.

## Debrief

La discussione finale non parte da "quante vulnerabilità avete trovato?", ma da:

- quale informazione ha cambiato il vostro piano?
- quale ipotesi avete scartato?
- dove avete rischiato di fare overclaim?
- quale test vi ha dato l'evidenza più importante?
- dove vi siete fermati e perché?
- che cosa direste al cliente nei primi due minuti?

## Nota

Qualunque futura variante utilizzata come prova valutativa riservata dovrà essere conservata fuori da questa repository pubblica.
