# Runbook slide-by-slide — day-04-input-handling-injection

Queste note sono pensate per la conduzione d’aula. Le slide restano essenziali; qui teniamo le informazioni extra, le domande da fare e il passaggio successivo.

## Slide 1 — Input Handling & Injection

**Funzione:** cover.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Apriamo la giornata con il problema, non con l’elenco degli obiettivi. Colleghiamo subito la giornata precedente e diciamo che oggi aggiungiamo un pezzo al nostro metodo.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Partiamo dal comportamento dell’applicazione, non dai payload. Cerchiamo segnali, conferme e una prova minima.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 2 — Oggi facciamo questo percorso

**Funzione:** journey.  **Tempo indicativo:** 2 min.

**Come la conduciamo.** Usiamola come mappa, non leggiamola voce per voce. Indichiamo dove entrerà il sito e dove inizierà il laboratorio.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Alterniamo ragionamento, esempi, sito e laboratorio

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 3 — Quando un parametro arriva al server, dove finisce?

**Funzione:** ragioniamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Proiettiamo la domanda e lasciamo qualche secondo di silenzio. Raccogliamo 2–3 risposte prima di dare la nostra. Il valore è nel ragionamento, non nella risposta “giusta” immediata.

**Domanda alla classe.** Quando un parametro arriva al server, dove finisce?

**Frase da tenere a mente.** La stessa stringa può essere innocua in un contesto e pericolosa in un altro.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 4 — Un input può entrare da molti punti

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Ogni punto di ingresso attraversa una trust boundary

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 5 — La domanda non è «quale payload provo?». 

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** La domanda è: quale componente interpreterà questo dato — SQL, HTML/JS, shell, filesystem, template, parser?

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 6 — Famiglie di injection: stesso principio, contesti diversi

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Capire il sink vale più che memorizzare stringhe

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 7 — Il nostro metodo operativo

**Funzione:** metodo.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Percorriamo il flusso da sinistra a destra con un esempio concreto. Ogni freccia deve corrispondere a una decisione, non a una fase “da imparare a memoria”.

**Domanda alla classe.** In quale punto di questa sequenza siamo adesso? Quale passaggio viene prima del prossimo test?

**Frase da tenere a mente.** Una variabile per volta

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 8 — Baseline: comportamento normale

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** Prima di cercare anomalie dobbiamo conoscere il comportamento normale

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 9 — Un input anomalo cambia il comportamento

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** Il segnale serve a scegliere il prossimo test, non a scrivere già il finding

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 10 — Quali segnali possiamo usare?

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Un singolo segnale debole raramente basta

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 11 — Detection e impact

**Funzione:** confrontiamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Facciamo emergere il contrasto dalla classe. Dopo una prima risposta, usiamo i due lati della slide per formalizzare la differenza.

**Domanda alla classe.** Qual è la differenza che cambia davvero il nostro modo di testare?

**Frase da tenere a mente.** La prova deve essere proporzionata al rischio.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 12 — Remediation: correggiamo la causa, non il sintomo

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Bloccare un singolo carattere è quasi sempre una patch fragile

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 13 — Evidence chain che regge un finding

**Funzione:** metodo.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Percorriamo il flusso da sinistra a destra con un esempio concreto. Ogni freccia deve corrispondere a una decisione, non a una fase “da imparare a memoria”.

**Domanda alla classe.** In quale punto di questa sequenza siamo adesso? Quale passaggio viene prima del prossimo test?

**Frase da tenere a mente.** Ogni passo deve essere riproducibile

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 14 — Laboratorio — Input Changes Behaviour

**Funzione:** laboratorio.  **Tempo indicativo:** 3–5 min di lancio + lab.

**Come la conduciamo.** Qui facciamo davvero lo switch al sito/dossier. Diamo la consegna, il timebox e la stop condition. Non anticipiamo il contenuto degli artefatti successivi.

**Domanda alla classe.** Prima di aprire l’artefatto successivo: cosa sappiamo, cosa ipotizziamo e quale evidenza ci manca?

**Frase da tenere a mente.** Adesso usiamo il metodo sul dossier.

**Passaggio successivo.** Apriamo il sito/dossier e lavoriamo sugli artefatti. Gli hint partono da domande sul metodo, non dalla soluzione.

## Slide 15 — Quanto forte può essere la nostra conclusione?

**Funzione:** debrief.  **Tempo indicativo:** 6–10 min.

**Come la conduciamo.** Facciamo parlare prima i gruppi. Chiediamo una decisione presa bene e una conclusione che hanno evitato perché non supportata.

**Domanda alla classe.** Quale decisione abbiamo preso grazie all’evidenza? E quale conclusione sarebbe stata troppo forte?

**Frase da tenere a mente.** “C’è un errore” è più debole di “il comportamento è coerente e riproducibile con un problema di query construction”.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 16 — Prima di andare via, dobbiamo riuscire a…

**Funzione:** chiudiamo.  **Tempo indicativo:** 5 min.

**Come la conduciamo.** Usiamola come autoverifica collettiva: per ogni riga chiediamo un esempio concreto. Se l’esempio non arriva, quel punto merita 2 minuti in più.

**Domanda alla classe.** Riusciamo a spiegare questi punti con un esempio, senza leggere la slide?

**Frase da tenere a mente.** Ci interessa il perché delle decisioni, non il numero di tool.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 17 — LA DOMANDA CHE CI PORTIAMO DIETRO

**Funzione:** prossima tappa.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Chiudiamo lasciando la domanda aperta. Non iniziamo la lezione successiva in anticipo: deve restare un gancio mentale.

**Domanda alla classe.** Non rispondiamo ancora: quale informazione ci servirà per affrontare questa domanda la prossima volta?

**Frase da tenere a mente.** Se Alice è autenticata, il server verifica davvero che l’ordine richiesto appartenga ad Alice?

**Passaggio successivo.** Chiudiamo qui: la risposta arriva nella giornata seguente.

## Slide 18 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** XSS: il punto è il contesto di output

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 19 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Perché un 500 può ingannarci

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 20 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Source → sink → difesa

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.
