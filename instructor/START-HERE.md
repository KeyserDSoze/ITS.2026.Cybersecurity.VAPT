# START HERE — guida rapida docente

Questa è la pagina da aprire **prima di ogni giornata**. Non sostituisce il calendario, il runbook generale o le guide dei moduli: serve a ricordare il ritmo e le regole che tengono insieme il corso.

## La nostra idea di corso

Non stiamo facendo un catalogo di tool. Per 30 ore ci alleniamo a ragionare come un team che deve condurre un assessment autorizzato.

La domanda ricorrente è sempre:

```text
Cosa sappiamo?
      ↓
Come lo sappiamo?
      ↓
Cosa stiamo ipotizzando?
      ↓
Qual è il test minimo che ci serve?
      ↓
Cosa osserviamo?
      ↓
Cosa possiamo concludere adesso?
```

Quando la classe corre troppo verso tool, exploit o conclusioni, torniamo qui.

## Prima di entrare in aula

- aprire le slide della giornata in `presentations/premium/`;
- aprire il relativo runbook in `instructor/presentations/`;
- avere aperto il portale studenti;
- verificare il laboratorio che useremo;
- sapere quali artefatti vogliamo rivelare e in quale ordine;
- avere chiaro il deliverable minimo della giornata;
- ricordare dove sono le due pause e dove lasciamo elasticità.

Per il controllo tecnico completo usare [`PRE-FLIGHT-CHECKLIST.md`](PRE-FLIGHT-CHECKLIST.md).

## Ritmo di ogni blocco

Il pattern preferito è:

```text
domanda
  ↓
discussione
  ↓
concetto minimo
  ↓
evidenza / esempio
  ↓
decisione
  ↓
attività sul sito o dossier
  ↓
debrief
```

Cerchiamo di non parlare per più di 8–12 minuti senza chiedere alla classe di fare qualcosa: scegliere, classificare, spiegare, annotare, confrontare o produrre un artefatto.

## Come usare le slide

Le slide **non sono le dispense**. Servono a dare ritmo, mostrare una struttura, far emergere una domanda o fermare l'attenzione su un'evidenza.

Quando compare una slide `RAGIONIAMO`, lasciamo qualche secondo prima di parlare.

Quando compare un artefatto tecnico:

1. leggiamolo prima senza interpretarlo;
2. isoliamo i fatti;
3. distinguiamo le inferenze;
4. decidiamo il prossimo test.

Quando compare `ORA TOCCA A NOI`, facciamo davvero lo switch a sito/laboratorio.

Le slide `APPROFONDIMENTO · SE SERVE` sono opzionali. Non vanno usate per riempire tempo.

## Come dare hint

Partiamo sempre dal metodo, non dalla soluzione.

```text
0 — nessun hint
1 — domanda: “cosa sai davvero?”
2 — domanda: “quale evidenza ti manca?”
3 — indichiamo l'area o il concetto da rivedere
4 — guidiamo il passaggio tecnico minimo
```

Se uno studente chiede “che comando devo usare?”, una buona risposta iniziale è spesso:

> Quale domanda vuoi far rispondere a quel comando?

## Cosa proteggere quando siamo in ritardo

Non acceleriamo la teoria successiva per recuperare minuti.

Tagliamo in quest'ordine:

```text
esempio extra
→ challenge
→ dettaglio di tool
→ seconda demo
```

Proteggiamo sempre:

```text
concetto chiave
→ attività
→ evidenza
→ debrief
```

Il piano temporale reale è in [`30-HOUR-SCHEDULE.md`](30-HOUR-SCHEDULE.md).

## Reporting dal primo giorno

Ogni laboratorio deve lasciare almeno una traccia professionale:

- facts / hypotheses / questions;
- request o output rilevante;
- decisione presa;
- evidence minima;
- eventuale finding o motivo per cui **non** possiamo ancora scriverne uno.

Il report finale non nasce nell'ultima lezione: nasce dal modo in cui prendiamo note durante tutto il corso.

## Frasi utili durante la lezione

- «Come lo sappiamo?»
- «Questo è un fatto o un'ipotesi?»
- «Quale test minimo separa le due possibilità?»
- «Cosa ci aspettiamo di osservare se la nostra ipotesi è corretta?»
- «Abbiamo abbastanza evidenza per chiamarla vulnerabilità?»
- «Che cosa cambierebbe per il cliente?»
- «Dove ci fermiamo?»
- «Come lo scriveremmo in un report?»

## Chiusura di ogni giornata

Prima di andare via chiediamo sempre:

> **Che cosa sappiamo adesso che prima non sapevamo?**

E subito dopo:

> **Quale decisione tecnica possiamo prendere grazie a questa nuova evidenza?**

Se la classe sa rispondere con un esempio concreto, la giornata ha prodotto apprendimento utile.

## Percorso rapido

| Giornata | Focus | Slide | Runbook slide-by-slide |
|---:|---|---|---|
| 1 | mindset, engagement, scope | `day-01-mindset-scope-premium.pptx` | `day-01-mindset-scope.md` |
| 2 | fondamentali, HTTP, recon | `day-02-foundations-recon-premium.pptx` | `day-02-foundations-recon.md` |
| 3 | VA, validazione, web mapping | `day-03-va-web-mapping-premium.pptx` | `day-03-va-web-mapping.md` |
| 4 | input handling, injection | `day-04-input-handling-injection-premium.pptx` | `day-04-input-handling-injection.md` |
| 5 | authentication, authorization, API | `day-05-auth-api-security-premium.pptx` | `day-05-auth-api-security.md` |
| 6 | exploitation, post-exploitation, reporting, AI | `day-06-exploitation-postex-reporting-ai-premium.pptx` | `day-06-exploitation-postex-reporting-ai.md` |
| 7 | capstone | `day-07-capstone-premium.pptx` | `day-07-capstone.md` |
| 8 | report, peer review, client presentation | `day-08-closing-report-presentation-premium.pptx` | `day-08-closing-report-presentation.md` |

Percorsi completi:

- slide: [`../presentations/premium/`](../presentations/premium/)
- runbook slide-by-slide: [`presentations/`](presentations/)
- calendario: [`30-HOUR-SCHEDULE.md`](30-HOUR-SCHEDULE.md)
- metodo generale: [`COURSE-RUNBOOK.md`](COURSE-RUNBOOK.md)
