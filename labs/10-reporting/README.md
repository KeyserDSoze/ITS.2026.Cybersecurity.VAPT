# Lab 10 — From Evidence to Professional Report

## Scenario

Hai note tecniche, output, request e screenshot. Il cliente non vuole però il diario del pentester: vuole capire **cosa è successo, perché conta e cosa deve correggere**.

## Materiale

Puoi usare evidenze dei lab precedenti oppure il pacchetto `starter/raw-evidence.md`.

## GUIDED — Trasforma note grezze in un finding

Apri il raw evidence sull'access control.

### Step 1 — Separa fatto e interpretazione

Evidenza:

```text
Alice richiede GET /api/orders/1002 e riceve HTTP 200 con l'indirizzo di Bob.
```

Questa è una osservazione riproducibile.

Interpretazione:

```text
Il server non verifica che l'ordine richiesto appartenga all'utente autenticato.
```

Questa è la conclusione tecnica sostenuta dall'evidenza.

### Step 2 — Costruisci il finding

Compila il template con:

- titolo specifico;
- asset;
- descrizione;
- prerequisiti;
- steps to reproduce;
- evidenza;
- impatto;
- severity motivata;
- remediation sulla causa.

### Step 3 — Test di qualità

Un collega che non era presente dovrebbe poter:

1. capire il problema;
2. riprodurlo;
3. capire chi/cosa è impattato;
4. correggerlo;
5. verificare la correzione.

## INDEPENDENT

Scrivi un secondo finding usando una tua evidenza dai lab 04, 06, 07 o 08.

Poi scrivi una Executive Summary di massimo 250 parole che risponda a:

- cosa è stato testato?
- quale rischio importante è stato dimostrato?
- quali aree richiedono priorità?
- quali limitazioni ha avuto l'assessment?

## CHALLENGE

Spiega lo stesso finding in due versioni:

- 2 minuti per uno sviluppatore/sysadmin;
- 2 minuti per un manager non tecnico.

La sostanza non cambia; cambia il linguaggio e il livello di dettaglio.

## Deliverable

Mini report usando i template del corso con almeno due finding e una Executive Summary.
