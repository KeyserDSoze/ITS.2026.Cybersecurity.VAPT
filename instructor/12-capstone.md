# 12 — Capstone Formativo — Guida docente

## Obiettivo docente

Valutare se gli studenti riescono a condurre un piccolo assessment end-to-end senza walkthrough, usando il metodo costruito nei moduli precedenti.

Il capstone deve far emergere soprattutto:

```text
PRIORITIZZAZIONE
METODO
ACCURATEZZA
EVIDENZA
GESTIONE DELLO SCOPE
COMUNICAZIONE
```

Non deve diventare una gara a chi trova più vulnerabilità.

## Durata suggerita

Idealmente **3–4 ore**, adattabili al monte ore reale.

```text
00:00–00:15  briefing cliente
00:15–00:30  planning individuale/gruppo
00:30–01:10  recon / attack surface
01:10–02:10  testing e validazione
02:10–02:30  evidence review
02:30–03:15  reporting
03:15–03:45  presentazioni cliente
03:45–04:00  debrief finale
```

Per una sessione più breve comprimere reporting e presentazione, ma non eliminare planning/evidence review.

## Preparazione

Aprire:

- lezione 12;
- `labs/12-capstone/`;
- tutti gli artefatti numerati del dossier;
- finding/report template.

Importante: il capstone pubblico è formativo. **Non contiene materiale della futura prova d'esame riservata.**

## Regola di conduzione

Non fornire un walkthrough.

Il docente può rispondere a:

- chiarimenti sullo scope;
- problemi tecnici del materiale;
- richieste di comprensione della consegna.

Evita invece di dire:

- quale finding cercare;
- quale artefatto aprire dopo;
- quale endpoint è vulnerabile;
- quale severity assegnare.

## Briefing iniziale

Presentarsi come cliente UmbraMarket.

Consegnare soltanto il briefing iniziale e chiedere:

> «Prima di iniziare, che cosa avete capito dell'incarico e che cosa dovete chiarire?»

Valutare già qui:

- identificazione obiettivo;
- scope;
- out of scope;
- vincoli;
- stop condition;
- priorità iniziale.

## Planning

Pretendere una nota breve prima che aprano gli artefatti successivi:

```text
OBIETTIVO
SCOPE
OUT OF SCOPE
VINCOLI
PIANO INIZIALE
EVIDENZA CHE CERCHIAMO
```

Non valutare la previsione perfetta. Valutare se esiste una direzione ragionata.

## Rilascio progressivo degli artefatti

Il dossier è numerato, ma il docente può scegliere due modalità.

### Modalità guidata leggera

Rilasciare blocchi:

```text
00–01 briefing/scope
02–04 recon/mapping
05 scanner
06–07 validazione
08 business context
09 evidence review
```

### Modalità autonoma

Rendere disponibili tutti i file, chiedendo agli studenti di motivare l'ordine scelto.

Per la prima edizione consiglio la modalità guidata leggera.

## Cosa osservare durante recon

Non guardare solo cosa trovano. Guardare **come aggiornano il piano**.

Domande utili, senza dare hint:

- «Qual è il fatto nuovo?»
- «Questa informazione cambia la priorità?»
- «È in scope?»
- «State accumulando output o costruendo una mappa?»
- «Quale domanda state cercando di rispondere?»

## Scanner nel capstone

Quando compare lo scanner, osservare chi:

- copia gli alert;
- parte dalla severity;
- cerca evidence e prerequisiti;
- distingue alert da finding.

Non correggere immediatamente. Lasciare che il dossier successivo costringa a validare.

## Momento chiave — Alice e Bob

Quando arrivano agli artefatti di authorization, non nominare BOLA/IDOR.

Chiedere solo:

> «Quale policy vi aspettate?»

poi:

> «Quale test minimo distingue una policy corretta da una insufficiente?»

Se arrivano alla PoC cross-user e ottengono l'evidenza, osservare se si fermano.

Chi propone di enumerare tutti gli ID deve essere riportato a:

```text
OBIETTIVO
EVIDENZA SUFFICIENTE
RISCHIO
STOP CONDITION
```

## Business context

Rilasciare il contesto aziendale **dopo** la validazione tecnica.

Chiedere:

> «Che cosa cambia nella vostra severity/priorità ora che conoscete il ruolo di questo sistema e i dati coinvolti?»

Questo separa severity tecnica e rischio contestualizzato.

## Evidence review

Prima del reporting, imporre una pausa.

Ogni gruppo deve classificare le proprie conclusioni:

```text
CONFIRMED
OBSERVED BUT NOT VALIDATED
OUT OF SCOPE
NOT DEMONSTRATED
```

Questa fase è obbligatoria.

Il docente deve cercare overclaim prima che finiscano nel report.

## Reporting

Richiedere almeno:

- scope summary;
- attack surface inventory;
- uno o più finding validati;
- evidence pack;
- executive summary breve.

Domande durante la scrittura:

- «Quale evidence supporta questa frase?»
- «Avete dimostrato davvero questo impatto?»
- «Questa remediation corregge la causa?»
- «Il cliente saprebbe cosa fare domani mattina?»

## Presentazione cliente

Ogni gruppo ha 5 minuti.

Struttura suggerita:

```text
1. scope e obiettivo
2. postura generale
3. rischio principale
4. altri elementi rilevanti
5. priorità di remediation
6. limitazioni
```

Dopo la presentazione fare 2–3 domande come cliente:

- «Perché questo è il rischio principale?»
- «Che cosa avete davvero dimostrato?»
- «Cosa correggereste per primo?»
- «Cosa non avete potuto verificare?»

## Criteri di valutazione formativa

Usare una rubrica orientativa:

| Area | Peso suggerito |
|---|---:|
| Scope e RoE | 15% |
| Metodo e prioritizzazione | 20% |
| Accuratezza tecnica | 20% |
| Evidence | 20% |
| Reporting/remediation | 15% |
| Comunicazione | 10% |

Non usare il numero di vulnerabilità come metrica principale.

## Segnali di un buon lavoro

- chiarisce ambiguità prima di agire;
- annota fatti/ipotesi;
- sceglie test minimi;
- valida alert;
- si ferma quando l'evidenza è sufficiente;
- distingue confirmed/unvalidated/out-of-scope;
- produce finding riproducibili;
- sa spiegare priorità al cliente.

## Segnali di difficoltà

- cambia tool senza una domanda;
- copia scanner output;
- confonde hostname scoperto con asset autorizzato;
- cerca effetti spettacolari invece di evidence minima;
- assegna severity dal colore del tool;
- scrive impact non dimostrati;
- dimentica limitazioni e cleanup.

## Hint policy

Il capstone non usa hint tecnici progressivi standard.

Se un gruppo è completamente bloccato, usare solo il recovery loop:

```text
Che cosa sapete con certezza?
Qual è la vostra ipotesi migliore?
Quale test minimo la distingue da un'alternativa?
Che risultato vi aspettate?
È coerente con scope e tempo?
```

Questo aiuta senza dare la soluzione.

## Adattamento del livello

### Classe debole

Rilascio a blocchi e checkpoint dopo ogni fase.

### Classe media

Tutti gli artefatti disponibili, ma milestone temporali suggerite.

### Classe forte

Aggiungere rumore:

- alert plausibili ma non validabili;
- asset correlati fuori scope;
- evidenze contraddittorie;
- finding con priorità tecnica diversa dal rischio business.

## Debrief finale del corso

Non iniziare chiedendo «quante vulnerabilità avete trovato?».

Chiedere invece:

1. «Quale decisione vi ha fatto risparmiare più tempo?»
2. «Quale ipotesi era sbagliata?»
3. «Quale evidence vi ha fatto cambiare idea?»
4. «Dove vi siete fermati volontariamente?»
5. «Quale frase avete tolto dal report perché non era supportata?»
6. «Cosa fareste diversamente nel prossimo assessment?»

Chiudere tornando alla frase iniziale del corso:

> «Mi danno un target autorizzato che non conosco. So come partire, cosa osservare, come formulare ipotesi, come verificarle, come documentare ciò che trovo e come spiegare perché rappresenta un rischio.»

Se gli studenti riescono a dimostrarlo nel loro processo, il capstone ha raggiunto l'obiettivo.