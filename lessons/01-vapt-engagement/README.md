# 01 — VAPT, Scope & Engagement

## Obiettivi

- distinguere Vulnerability Scanning, Vulnerability Assessment e Penetration Test;
- comprendere black box, grey box e white box;
- capire perché scope e Rules of Engagement vengono prima dei tool;
- trasformare una richiesta generica del cliente in un incarico testabile.

## Apertura della lezione

Il docente interpreta il cliente:

> "Stiamo per pubblicare una nuova piattaforma e vogliamo sapere se è sicura. Fateci un penetration test."

Non fornire altre informazioni finché gli studenti non fanno domande.

Annotare le domande in due colonne:

```text
DOMANDE UTILI                    DOMANDE MANCANTI / DA MIGLIORARE
```

## Concetti chiave

### Scope

Definisce che cosa può essere testato.

Esempi di elementi da chiarire:

- domini e sottodomini;
- indirizzi IP;
- applicazioni e API;
- account forniti;
- ambienti interessati;
- asset esplicitamente esclusi.

### Rules of Engagement

Definiscono come può essere svolto il test.

Possibili aspetti:

- periodo del test;
- tecniche consentite o vietate;
- limiti sull'impatto;
- contatti di emergenza;
- gestione delle evidenze;
- gestione delle credenziali;
- stop condition.

### Black / Grey / White Box

Discutere il trade-off tra realismo, copertura e informazioni fornite al tester.

### VA vs PT

Domanda guida:

> "Trovare una vulnerabilità e dimostrare che modifica realmente il rischio sono la stessa cosa?"

## PTES

Presentare PTES come una struttura per organizzare un incarico professionale, non come elenco da imparare a memoria:

1. Pre-engagement Interactions
2. Intelligence Gathering
3. Threat Modeling
4. Vulnerability Analysis
5. Exploitation
6. Post-Exploitation
7. Reporting

## Demo

Mostrare due richieste cliente:

### Richiesta A

> "Scansionate questo IP."

### Richiesta B

> "Valutate se un utente Internet non autenticato può accedere ai dati cliente della nuova applicazione."

Discutere perché il secondo obiettivo porta a una strategia diversa e più misurabile.

## Lab — Client Kickoff

Gli studenti lavorano in piccoli gruppi. Il docente fornisce inizialmente solo una richiesta generica.

Gli studenti devono produrre le domande di kickoff necessarie a definire l'incarico.

### CORE

Definire:

- obiettivo;
- asset in scope;
- asset out of scope;
- approccio black/grey/white box;
- limiti principali;
- contatto di escalation.

### CHALLENGE

Aggiungere:

- gestione dei dati raccolti;
- criteri di stop;
- prerequisiti;
- deliverable attesi;
- ipotesi di retest.

### HARD MODE

Individuare almeno tre ambiguità contrattuali/tecniche che potrebbero generare problemi durante un vero assessment.

## Deliverable

Una pagina di **Scope & Rules of Engagement**.

## Collegamento al report

Il deliverable diventerà la base delle sezioni:

- Scope;
- metodologia;
- limitazioni dell'assessment.

## Messaggio da lasciare agli studenti

> Un penetration tester professionale non inizia chiedendo "quale exploit uso?", ma "che cosa sono autorizzato a dimostrare?".
