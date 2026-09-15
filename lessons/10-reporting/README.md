# 10 — Professional Reporting

## Obiettivi

- trasformare note tecniche in finding professionali;
- distinguere executive summary e dettaglio tecnico;
- motivare severity e impatto;
- scrivere remediation utili e verificabili;
- costruire un report che permetta a tecnici e management di prendere decisioni.

## Concetti chiave

- audience;
- executive summary;
- scope e metodologia;
- finding;
- evidence;
- steps to reproduce;
- business impact;
- severity;
- remediation;
- limitation;
- retest.

## Esercizio iniziale

Mostrare tre versioni dello stesso finding:

1. output grezzo di uno scanner;
2. nota tecnica disordinata;
3. finding professionale.

Chiedere agli studenti quale sia utilizzabile da:

- sviluppatore;
- sysadmin;
- CISO/management.

## Struttura del finding

Usare [`../../templates/finding-template.md`](../../templates/finding-template.md).

Domanda centrale:

> Se il tester non fosse presente, un tecnico riuscirebbe a capire il problema, riprodurlo e correggerlo?

## Executive Summary

Non deve essere una lista di CVE.

Deve sintetizzare:

- cosa è stato testato;
- quali scenari di rischio sono stati dimostrati;
- quali aree richiedono priorità;
- quali limiti ha avuto l'assessment.

## Lab — From Evidence to Report

Gli studenti prendono evidenze raccolte nei moduli precedenti.

### CORE

Completare almeno due finding con:

- titolo;
- asset;
- descrizione;
- impatto;
- evidenza;
- riproduzione;
- remediation.

### CHALLENGE

Scrivere una executive summary di massimo una pagina senza usare gergo non necessario.

### HARD MODE

Presentare oralmente un finding due volte:

- 2 minuti a un responsabile tecnico;
- 2 minuti a un manager non tecnico.

## Peer review

Scambiarsi un finding e valutarlo con questa checklist:

- è verificabile?
- è riproducibile?
- separa fatto e supposizione?
- l'impatto è concreto?
- la severity è coerente?
- la remediation agisce sulla causa?

## Deliverable

Mini report basato su [`../../templates/pentest-report-template.md`](../../templates/pentest-report-template.md).

## Messaggio chiave

> Un finding che nessuno riesce a capire o correggere non è un buon deliverable, anche se tecnicamente corretto.
