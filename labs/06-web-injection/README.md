# Lab 06 — Input Changes Behaviour

## Scenario

Il team segnala che la ricerca prodotti produce risultati strani con alcuni caratteri. Non ricevete un exploit: ricevete tre osservazioni simulate e dovete costruire una spiegazione tecnica.

## Dossier

- `artifacts/01-normal-request.txt`
- `artifacts/02-anomalous-input.txt`
- `artifacts/03-controlled-confirmation.txt`

Tutti gli input e gli output sono fittizi e confinati alla simulazione.

## GUIDED

Per i tre casi rispondere:

1. qual era il comportamento atteso?
2. cosa è cambiato?
3. quale componente potrebbe interpretare l'input?
4. quale ipotesi nasce?
5. quale evidenza è ancora necessaria prima di chiamarla vulnerabilità?

## Simulazione dell'attacco

Il dossier mostra una progressione volutamente controllata:

```text
input normale
   -> risposta normale
input anomalo minimo
   -> errore differente
variante di conferma predisposta dal laboratorio
   -> comportamento coerente con manipolazione della query
```

Non serve estrarre dati, modificare record o aumentare l'impatto. La PoC termina quando il comportamento è dimostrato.

## INDEPENDENT

Scrivere un finding con:

- punto di input;
- evidenza;
- ipotesi sulla causa;
- impatto plausibile separato dall'impatto dimostrato;
- remediation.

## CHALLENGE

Spiegare perché bloccare un singolo carattere non è una remediation robusta e quale classe di controllo dovrebbe correggere la causa.

## Deliverable

Finding completo + sequenza evidenze A/B/C.