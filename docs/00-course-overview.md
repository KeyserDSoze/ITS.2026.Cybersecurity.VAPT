# Course Overview

## Missione del corso

Portare gli studenti dal concetto di vulnerabilità al processo completo di un Vulnerability Assessment e di un Penetration Test autorizzato, con particolare attenzione al ragionamento tecnico, alla verifica manuale e alla qualità della reportistica.

Il corso è rivolto a una classe eterogenea. Il materiale è quindi progettato con un livello **core** accessibile a chi segue con costanza e livelli **challenge** e **hard mode** per gli studenti più curiosi e autonomi.

## Learning outcomes

Al termine del percorso uno studente che ha seguito attivamente dovrebbe essere in grado di:

- distinguere Vulnerability Assessment, Vulnerability Scanning e Penetration Testing;
- comprendere scope, Rules of Engagement e vincoli di un incarico;
- descrivere le differenze tra black-box, grey-box e white-box assessment;
- analizzare un target e costruirne una attack surface iniziale;
- usare strumenti di reconnaissance ed enumeration con un obiettivo preciso;
- comprendere richieste e risposte HTTP, cookie, sessioni, autenticazione e autorizzazione;
- utilizzare un intercepting proxy per osservare e modificare traffico applicativo;
- riconoscere e verificare vulnerabilità comuni di applicazioni web e API;
- distinguere un finding automatico da una vulnerabilità validata;
- ricercare CVE e interpretare severity e CVSS nel contesto corretto;
- comprendere il ruolo di MITRE ATT&CK nella descrizione dei comportamenti di un attaccante;
- dimostrare in laboratorio l'impatto di una vulnerabilità senza uscire dallo scope;
- comprendere exploitation e post-exploitation a livello metodologico;
- raccogliere evidenze tecniche riproducibili;
- produrre un finding professionale con descrizione, impatto, evidenza e remediation;
- realizzare un Penetration Test Report con parte executive e parte tecnica;
- utilizzare strumenti AI come acceleratori mantenendo verifica e responsabilità umana.

## Filosofia didattica

Il corso privilegia il processo:

```text
osservare → ipotizzare → verificare → dimostrare → documentare → correggere
```

Una vulnerabilità non viene considerata compresa quando lo studente conosce un payload a memoria, ma quando sa spiegare:

1. quale assunzione di sicurezza è stata violata;
2. come ha individuato il punto debole;
3. come può dimostrarlo in modo riproducibile;
4. quale impatto può avere;
5. come andrebbe mitigato.

## Bilanciamento teoria/pratica

Come riferimento iniziale, ogni incontro dovrebbe dedicare una parte minoritaria alla spiegazione frontale e una parte significativa a demo, laboratorio, discussione dei risultati e documentazione.

Una struttura tipica è:

```text
15-25%  contesto e teoria
10-20%  demo ragionata
45-60%  laboratorio
10-20%  review, evidenze e report
```

Le percentuali sono indicative e possono variare per argomento.

## Filo conduttore

Quando possibile, le lezioni dovrebbero essere presentate come parti dello stesso incarico professionale. Un'organizzazione fittizia affida alla classe un assessment autorizzato della propria piattaforma. Durante il corso vengono progressivamente introdotti nuovi asset, credenziali, vincoli e scenari.

Il nome e l'implementazione definitiva dell'ambiente narrativo verranno definiti insieme ai laboratori.

## Valutazione formativa

Durante il corso si privilegiano:

- osservazione del metodo;
- capacità di spiegare una scelta tecnica;
- qualità delle evidenze;
- capacità di distinguere ipotesi da fatti verificati;
- accuratezza della documentazione;
- autonomia crescente.

Il materiale d'esame vero e proprio non è contenuto in questa repository pubblica.
