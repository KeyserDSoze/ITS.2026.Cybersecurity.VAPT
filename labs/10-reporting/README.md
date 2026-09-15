# Lab 10 — From Raw Evidence to Professional Finding

## Scenario

Il team ha completato una serie di verifiche su UmbraMarket. Ora il cliente non vuole vedere una raccolta di screenshot o output grezzi: vuole capire **cosa è successo, perché conta e cosa deve correggere**.

Tutti i dati e i nomi presenti nel dossier sono fittizi.

## Obiettivo

Trasformare materiale tecnico disordinato in un finding professionale, separando evidenza, interpretazione, impatto e remediation.

## Dossier

1. `artifacts/01-scanner-output.txt`
2. `artifacts/02-tester-notes.txt`
3. `artifacts/03-validated-evidence.txt`
4. `artifacts/04-customer-context.txt`

## GUIDED

Prima di scrivere il finding classifica ogni frase in una delle categorie:

```text
FACT
HYPOTHESIS
VALIDATED IMPACT
BUSINESS CONTEXT
RECOMMENDATION
```

Poi rispondi:

1. Quale materiale è soltanto output di uno strumento?
2. Quale evidenza dimostra realmente il problema?
3. Quali dettagli sono necessari per riprodurlo?
4. Come spiegheresti l'impatto a uno sviluppatore?
5. Come lo spiegheresti a un manager?
6. Quale remediation agisce sulla causa e non soltanto sul sintomo?

## INDEPENDENT

Scrivi un finding con:

- titolo;
- asset;
- summary;
- descrizione tecnica;
- prerequisiti;
- steps to reproduce;
- evidenza;
- impatto;
- severity motivata;
- remediation;
- retest suggestion.

## CHALLENGE

Scrivi due versioni dello stesso messaggio:

### Versione tecnica
Massimo 180 parole, destinata al team di sviluppo.

### Versione executive
Massimo 100 parole, senza gergo non necessario.

## Regola

Non aggiungere fatti che non compaiono negli artefatti. Se un punto non è dimostrato, dichiaralo come limite o ipotesi.

## Deliverable

Un finding completo usando il template del corso e una mini executive summary.
