# Runbook slide-by-slide — day-02-foundations-recon

Queste note sono pensate per la conduzione d’aula. Le slide restano essenziali; qui teniamo le informazioni extra, le domande da fare e il passaggio successivo.

## Slide 1 — Dal click alla superficie d’attacco

**Funzione:** cover.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Apriamo la giornata con il problema, non con l’elenco degli obiettivi. Colleghiamo subito la giornata precedente e diciamo che oggi aggiungiamo un pezzo al nostro metodo.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Seguiamo una richiesta dall’hostname all’applicazione e trasformiamo l’enumeration in una mappa utile.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 2 — Oggi facciamo questo percorso

**Funzione:** recon.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Spieghiamo l’idea con un esempio e poi torniamo subito al filo dell’assessment.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Alterniamo ragionamento, esempi, sito e laboratorio

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 3 — Quando scriviamo shop.umbramarket.lab nel browser, quante cose succedono prima di vedere una pagina?

**Funzione:** ragioniamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Proiettiamo la domanda e lasciamo qualche secondo di silenzio. Raccogliamo 2–3 risposte prima di dare la nostra. Il valore è nel ragionamento, non nella risposta “giusta” immediata.

**Domanda alla classe.** Quando scriviamo shop.umbramarket.lab nel browser, quante cose succedono prima di vedere una pagina?

**Frase da tenere a mente.** Se non sappiamo dove siamo nella catena, rischiamo di interpretare male quello che osserviamo.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 4 — Dal nome all’applicazione

**Funzione:** metodo.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Percorriamo il flusso da sinistra a destra con un esempio concreto. Ogni freccia deve corrispondere a una decisione, non a una fase “da imparare a memoria”.

**Domanda alla classe.** In quale punto di questa sequenza siamo adesso? Quale passaggio viene prima del prossimo test?

**Frase da tenere a mente.** Ogni livello può darci informazioni diverse

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 5 — DNS: il nome diventa un indirizzo

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Un record DNS non è una vulnerabilità: è contesto

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 6 — Leggiamo una request, senza correre

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** Ogni riga può diventare una domanda

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 7 — Status code: cosa ci dice davvero?

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** La semantica applicativa conta più del numero

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 8 — Sessione: cosa mantiene il “filo” tra le richieste?

**Funzione:** confrontiamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Facciamo emergere il contrasto dalla classe. Dopo una prima risposta, usiamo i due lati della slide per formalizzare la differenza.

**Domanda alla classe.** Qual è la differenza che cambia davvero il nostro modo di testare?

**Frase da tenere a mente.** Identità e autorizzazione non sono la stessa cosa.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 9 — Recon non significa “lanciare Nmap”.

**Funzione:** recon.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Spieghiamo l’idea con un esempio e poi torniamo subito al filo dell’assessment.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Significa ridurre l’incertezza: quali asset esistono, quali servizi espongono, quali tecnologie dichiarano, quale test ha senso fare dopo.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 10 — Recon passivo e attivo

**Funzione:** confrontiamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Facciamo emergere il contrasto dalla classe. Dopo una prima risposta, usiamo i due lati della slide per formalizzare la differenza.

**Domanda alla classe.** Qual è la differenza che cambia davvero il nostro modo di testare?

**Frase da tenere a mente.** La distinzione serve per scegliere la tecnica giusta al momento giusto.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 11 — Un port scan è un punto di partenza

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** Porta aperta ≠ vulnerabilità

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 12 — Web discovery: piccoli indizi, grandi domande

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Cerchiamo superficie, non “flag”

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 13 — Usiamo tre etichette per non confonderci

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Questa classificazione entra nel taccuino

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 14 — La nostra attack surface

**Funzione:** mappa.  **Tempo indicativo:** 5–7 min.

**Come la conduciamo.** Costruiamo almeno una riga insieme. La mappa deve essere utile a scegliere il prossimo passo, non diventare documentazione fine a se stessa.

**Domanda alla classe.** Quale riga o relazione di questa mappa ci suggerisce il prossimo test?

**Frase da tenere a mente.** Una mappa utile deve suggerire il prossimo passo

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 15 — Laboratorio — Build the Attack Surface

**Funzione:** laboratorio.  **Tempo indicativo:** 3–5 min di lancio + lab.

**Come la conduciamo.** Qui facciamo davvero lo switch al sito/dossier. Diamo la consegna, il timebox e la stop condition. Non anticipiamo il contenuto degli artefatti successivi.

**Domanda alla classe.** Prima di aprire l’artefatto successivo: cosa sappiamo, cosa ipotizziamo e quale evidenza ci manca?

**Frase da tenere a mente.** Adesso usiamo il metodo sul dossier.

**Passaggio successivo.** Apriamo il sito/dossier e lavoriamo sugli artefatti. Gli hint partono da domande sul metodo, non dalla soluzione.

## Slide 16 — Il punto non è «quanti servizi abbiamo trovato?»

**Funzione:** debrief.  **Tempo indicativo:** 6–10 min.

**Come la conduciamo.** Facciamo parlare prima i gruppi. Chiediamo una decisione presa bene e una conclusione che hanno evitato perché non supportata.

**Domanda alla classe.** Quale decisione abbiamo preso grazie all’evidenza? E quale conclusione sarebbe stata troppo forte?

**Frase da tenere a mente.** Il punto è: quale nuova decisione possiamo prendere grazie a ciò che abbiamo trovato?

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 17 — Prima di andare via, dobbiamo riuscire a…

**Funzione:** chiudiamo.  **Tempo indicativo:** 5 min.

**Come la conduciamo.** Usiamola come autoverifica collettiva: per ogni riga chiediamo un esempio concreto. Se l’esempio non arriva, quel punto merita 2 minuti in più.

**Domanda alla classe.** Riusciamo a spiegare questi punti con un esempio, senza leggere la slide?

**Frase da tenere a mente.** Ci interessa il perché delle decisioni, non il numero di tool.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 18 — LA DOMANDA CHE CI PORTIAMO DIETRO

**Funzione:** prossima tappa.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Chiudiamo lasciando la domanda aperta. Non iniziamo la lezione successiva in anticipo: deve restare un gancio mentale.

**Domanda alla classe.** Non rispondiamo ancora: quale informazione ci servirà per affrontare questa domanda la prossima volta?

**Frase da tenere a mente.** Se uno scanner ci dice “HIGH”, cosa dobbiamo vedere prima di scriverlo in un report?

**Passaggio successivo.** Chiudiamo qui: la risposta arriva nella giornata seguente.

## Slide 19 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** TCP e TLS: cosa ci interessa davvero

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 20 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Porte comuni: memoria utile, non regola assoluta

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 21 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Mini cheat sheet HTTP

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.
