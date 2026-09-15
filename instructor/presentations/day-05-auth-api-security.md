# Runbook slide-by-slide — day-05-auth-api-security

Queste note sono pensate per la conduzione d’aula. Le slide restano essenziali; qui teniamo le informazioni extra, le domande da fare e il passaggio successivo.

## Slide 1 — Authentication, Authorization & API Security

**Funzione:** cover.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Apriamo la giornata con il problema, non con l’elenco degli obiettivi. Colleghiamo subito la giornata precedente e diciamo che oggi aggiungiamo un pezzo al nostro metodo.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Seguiamo l’identità attraverso sessioni e token, poi verifichiamo se il server protegge davvero ogni oggetto e funzione.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 2 — Oggi facciamo questo percorso

**Funzione:** journey.  **Tempo indicativo:** 2 min.

**Come la conduciamo.** Usiamola come mappa, non leggiamola voce per voce. Indichiamo dove entrerà il sito e dove inizierà il laboratorio.

**Domanda alla classe.** Qual è la cosa più importante che aggiungiamo al nostro modello mentale?

**Frase da tenere a mente.** Alterniamo ragionamento, esempi, sito e laboratorio

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 3 — Tre concetti che non dobbiamo confondere

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Essere autenticati non significa essere autorizzati a tutto

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 4 — Un login, visto come flusso

**Funzione:** metodo.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Percorriamo il flusso da sinistra a destra con un esempio concreto. Ogni freccia deve corrispondere a una decisione, non a una fase “da imparare a memoria”.

**Domanda alla classe.** In quale punto di questa sequenza siamo adesso? Quale passaggio viene prima del prossimo test?

**Frase da tenere a mente.** Dopo il login iniziano molte domande interessanti

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 5 — Cookie di sessione: attributi che osserviamo

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Sono controlli importanti, ma non sostituiscono l’autorizzazione

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 6 — JWT: leggibile non significa fidato

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** Il server deve verificare la firma e decidere cosa usare per autorizzare

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 7 — Access control: tre famiglie che vedremo spesso

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** La decisione deve essere server-side, ogni volta

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 8 — Two Users, One Object

**Funzione:** metodo.  **Tempo indicativo:** 3–5 min.

**Come la conduciamo.** Percorriamo il flusso da sinistra a destra con un esempio concreto. Ogni freccia deve corrispondere a una decisione, non a una fase “da imparare a memoria”.

**Domanda alla classe.** In quale punto di questa sequenza siamo adesso? Quale passaggio viene prima del prossimo test?

**Frase da tenere a mente.** Cambiamo una sola variabile: l’object ID

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 9 — La prova minima di un problema di authorization

**Funzione:** evidenza.  **Tempo indicativo:** 5–8 min.

**Come la conduciamo.** Leggiamo prima l’artefatto tecnico senza commentarlo. Poi separiamo insieme osservato, inferito e prossimo test. Resistiamo alla tentazione di nominare subito la vulnerabilità.

**Domanda alla classe.** Prima di interpretare: quali sono i fatti osservabili? Qual è invece la nostra ipotesi?

**Frase da tenere a mente.** A questo punto abbiamo già una stop condition sensata

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 10 — Authorization Matrix

**Funzione:** mappa.  **Tempo indicativo:** 5–7 min.

**Come la conduciamo.** Costruiamo almeno una riga insieme. La mappa deve essere utile a scegliere il prossimo passo, non diventare documentazione fine a se stessa.

**Domanda alla classe.** Quale riga o relazione di questa mappa ci suggerisce il prossimo test?

**Frase da tenere a mente.** La matrice ci dice cosa dovrebbe accadere prima di testarlo

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 11 — API: cosa guardiamo oltre all’object ID

**Funzione:** concetto.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Non leggiamo le card. Prendiamo un elemento per volta e leghiamolo a UmbraMarket o a un esempio visto poco prima. Usiamo le altre card solo se serve chiarire una distinzione.

**Domanda alla classe.** Quale esempio concreto del nostro scenario UmbraMarket possiamo collegare a questo concetto?

**Frase da tenere a mente.** Non memorizziamo una Top 10: costruiamo domande dal modello dell’API

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 12 — UI e server non hanno lo stesso ruolo

**Funzione:** confrontiamo.  **Tempo indicativo:** 4–6 min.

**Come la conduciamo.** Facciamo emergere il contrasto dalla classe. Dopo una prima risposta, usiamo i due lati della slide per formalizzare la differenza.

**Domanda alla classe.** Qual è la differenza che cambia davvero il nostro modo di testare?

**Frase da tenere a mente.** “Il bottone non c’è” non è un controllo di sicurezza.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 13 — Laboratorio — Two Users, One Order

**Funzione:** laboratorio.  **Tempo indicativo:** 3–5 min di lancio + lab.

**Come la conduciamo.** Qui facciamo davvero lo switch al sito/dossier. Diamo la consegna, il timebox e la stop condition. Non anticipiamo il contenuto degli artefatti successivi.

**Domanda alla classe.** Prima di aprire l’artefatto successivo: cosa sappiamo, cosa ipotizziamo e quale evidenza ci manca?

**Frase da tenere a mente.** Adesso usiamo il metodo sul dossier.

**Passaggio successivo.** Apriamo il sito/dossier e lavoriamo sugli artefatti. Gli hint partono da domande sul metodo, non dalla soluzione.

## Slide 14 — Quanta prova ci serve?

**Funzione:** debrief.  **Tempo indicativo:** 6–10 min.

**Come la conduciamo.** Facciamo parlare prima i gruppi. Chiediamo una decisione presa bene e una conclusione che hanno evitato perché non supportata.

**Domanda alla classe.** Quale decisione abbiamo preso grazie all’evidenza? E quale conclusione sarebbe stata troppo forte?

**Frase da tenere a mente.** Se Alice legge un ordine di Bob, non serve enumerare 1000 ID per “essere più sicuri”.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 15 — Prima di andare via, dobbiamo riuscire a…

**Funzione:** chiudiamo.  **Tempo indicativo:** 5 min.

**Come la conduciamo.** Usiamola come autoverifica collettiva: per ogni riga chiediamo un esempio concreto. Se l’esempio non arriva, quel punto merita 2 minuti in più.

**Domanda alla classe.** Riusciamo a spiegare questi punti con un esempio, senza leggere la slide?

**Frase da tenere a mente.** Ci interessa il perché delle decisioni, non il numero di tool.

**Passaggio successivo.** Torniamo alla domanda guida della giornata e verifichiamo quale nuova informazione abbiamo aggiunto.

## Slide 16 — LA DOMANDA CHE CI PORTIAMO DIETRO

**Funzione:** prossima tappa.  **Tempo indicativo:** 1–2 min.

**Come la conduciamo.** Chiudiamo lasciando la domanda aperta. Non iniziamo la lezione successiva in anticipo: deve restare un gancio mentale.

**Domanda alla classe.** Non rispondiamo ancora: quale informazione ci servirà per affrontare questa domanda la prossima volta?

**Frase da tenere a mente.** Quando una vulnerabilità è confermata, quando vale davvero la pena fare una PoC più profonda?

**Passaggio successivo.** Chiudiamo qui: la risposta arriva nella giornata seguente.

## Slide 17 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Token lifecycle: domande utili

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 18 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** BOLA, IDOR: nomi diversi, stessa domanda pratica

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.

## Slide 19 — APPROFONDIMENTO · SE SERVE

**Funzione:** approfondimento.  **Tempo indicativo:** solo se serve.

**Come la conduciamo.** Slide opzionale. Usiamola solo se serve a sciogliere un dubbio, se la classe va veloce o se un esempio richiede più profondità.

**Domanda alla classe.** Questa informazione ci aiuta a decidere qualcosa nel caso che stiamo discutendo?

**Frase da tenere a mente.** Una matrice semplice per i test di authorization

**Passaggio successivo.** Se non serve, saltiamo senza problemi: il percorso principale è già completo.
