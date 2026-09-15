# 06 — Web Injection & Input Handling

## Obiettivi

- capire perché input non fidato può cambiare il comportamento di un'applicazione;
- distinguere le principali famiglie di injection;
- verificare manualmente un'anomalia prima di affidarsi all'automazione;
- collegare causa, exploitability, impatto e remediation.

## Concetti chiave

- trust boundary e input non fidato;
- server-side validation;
- parameterized query;
- output encoding;
- SQL Injection;
- Cross-Site Scripting;
- Command Injection;
- Path Traversal / File Inclusion a livello concettuale;
- differenza tra detection payload e payload di impatto.

## Metodo comune

Per ogni famiglia:

```text
Input controllabile
      ↓
Comportamento atteso
      ↓
Input anomalo minimo
      ↓
Differenza osservabile
      ↓
Conferma controllata
      ↓
Impatto
      ↓
Remediation
```

## Demo

Mostrare una vulnerabilità in un target volutamente vulnerabile usando inizialmente una PoC minima. Solo dopo la conferma mostrare come un tool possa automatizzare parte della verifica.

## Lab

### CORE

Individuare almeno una vulnerabilità di input handling nell'ambiente assegnato e documentare:

- punto di input;
- comportamento atteso;
- test eseguito;
- evidenza;
- impatto;
- remediation.

### CHALLENGE

Trovare una seconda variante della stessa famiglia oppure una vulnerabilità differente senza walkthrough.

### HARD MODE

Spiegare perché un payload apparentemente valido non funziona in un determinato contesto e adattare il test sulla base dell'encoding, del contesto HTML/SQL/shell o della logica applicativa.

## Regola di laboratorio

Usare payload e comandi solo sul target didattico esplicitamente indicato. L'obiettivo è dimostrare il difetto con il minimo impatto necessario.

## Deliverable

Finding completo con template del corso.

## Discussione finale

- Quale era la causa reale?
- Quale evidenza dimostra la vulnerabilità senza ambiguità?
- Il payload utilizzato era necessario o eccessivo?
- Quale correzione elimina la classe di problema invece di bloccare un singolo payload?
