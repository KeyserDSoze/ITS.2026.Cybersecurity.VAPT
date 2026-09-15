# Lab 06 — Injection: From Anomaly to Evidence

## Scenario

UmbraMarket Guided contiene due punti volutamente insicuri. L'obiettivo non è "sparare payload": devi partire dal comportamento atteso, introdurre una variazione minima e capire **perché** la risposta cambia.

## Scope

```text
http://127.0.0.1:5005/search
http://127.0.0.1:5005/greet
```

Solo target locale del laboratorio.

## GUIDED A — SQL Injection

### Baseline

Apri:

```text
http://127.0.0.1:5005/search?q=Umbra
```

Annota numero di risultati e comportamento atteso.

### Test minimo

Prova un singolo apice URL-encoded:

```text
http://127.0.0.1:5005/search?q=%27
```

Domande:

- la risposta cambia?
- compare un errore del database?
- questo dimostra già l'impatto oppure solo un input handling insicuro?

### Conferma controllata

Sul solo laboratorio locale, confronta una ricerca normale con una condizione booleana semplice:

```text
Umbra' OR '1'='1
```

Usa il proxy per vedere esattamente la request inviata. Non estrarre tabelle, password o dati ulteriori: la PoC minima è sufficiente.

## GUIDED B — Reflected XSS

Baseline:

```text
http://127.0.0.1:5005/greet?name=Alice
```

Prima verifica semplice rendering HTML:

```html
<b>student</b>
```

Se il browser interpreta il markup, formula l'ipotesi XSS. Per la conferma nel solo target didattico puoi usare una PoC minima come:

```html
<script>alert(1)</script>
```

Domanda: qual è la **causa**? Perché bloccare soltanto la stringa `script` non risolve la classe di problema?

## Errori da evitare

- partire direttamente dal payload più complesso;
- confondere un errore con una vulnerabilità confermata;
- dimostrare più impatto del necessario;
- proporre blacklist di payload come remediation.

## INDEPENDENT — Juice Shop

Scegli una singola superficie di input e applica lo stesso metodo:

```text
baseline → input anomalo → differenza → ipotesi → conferma minima
```

Non usare soluzioni/copioni esterni.

## CHALLENGE

Trova un secondo contesto di input in Juice Shop e spiega perché la PoC deve essere adattata al contesto HTML/SQL/JSON invece di essere copiata meccanicamente.

## Deliverable

Un finding completo per una sola vulnerabilità, con request/response, impatto e remediation sulla causa.
