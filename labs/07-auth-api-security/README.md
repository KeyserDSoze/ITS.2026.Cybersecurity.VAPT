# Lab 07 — Two Users, One Order

## Scenario

Alice e Bob sono due utenti completamente fittizi dell'ambiente didattico. Il laboratorio simula un controllo di autorizzazione errato su un endpoint ordini.

## Dossier

- `artifacts/01-alice-own-order.txt`
- `artifacts/02-bob-own-order.txt`
- `artifacts/03-alice-requests-bob-order.txt`

## Obiettivo

Capire la differenza tra **essere autenticati** e **essere autorizzati ad accedere a uno specifico oggetto**.

## GUIDED

Confrontare i tre artefatti e rispondere:

1. chi è autenticato in ciascuna richiesta?
2. quale oggetto viene richiesto?
3. quale controllo dovrebbe eseguire il server?
4. quale singola risposta dimostra il problema?
5. che cosa sarebbe eccessivo fare dopo aver ottenuto la prova?

## Simulazione dell'attacco

La PoC del laboratorio consiste soltanto nel modificare l'identificatore di un ordine **tra due record fittizi predisposti appositamente**.

Il test termina quando la risposta dimostra accesso cross-user. Non si enumerano altri ID e non si raccolgono altri dati.

## INDEPENDENT

Scrivere:

```text
PRECONDITION
ACTION
EXPECTED
OBSERVED
IMPACT
STOP CONDITION
```

## CHALLENGE

Spiegare perché nascondere nell'interfaccia il link all'ordine di Bob non risolve il problema e dove deve essere applicato il controllo.

## Deliverable

Finding di Broken Object Level Authorization / access control con PoC minima.