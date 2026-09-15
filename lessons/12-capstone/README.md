# 12 — Capstone Formativo

## La missione finale

Sei arrivato alla fine del percorso. Ora non riceverai un walkthrough.

Riceverai un **incarico pubblico/formativo**, uno scope e un ambiente autorizzato. Dovrai organizzare un piccolo assessment end-to-end utilizzando il metodo costruito durante il corso.

> Questo capstone non è e non contiene l'eventuale prova d'esame riservata.

## Prima di iniziare — readiness check

Il pre-test non serve a ripassare definizioni. Ti propone decisioni di processo: scope ambiguo, output scanner, finding, exploitation e reporting. Se alcune risposte sono incerte, usa i link alle lezioni precedenti prima di partire.

## Obiettivo

Dimostrare che sai lavorare con autonomia crescente:

```text
scope → recon → ipotesi → test → evidence → finding → remediation → comunicazione
```

Non viene premiato il numero di tool usati e nemmeno il semplice numero di vulnerabilità trovate.

## Briefing che riceverai

Il docente fornirà:

- scenario cliente;
- target autorizzati;
- eventuali credenziali didattiche;
- obiettivo;
- vincoli e stop condition;
- tempo disponibile;
- deliverable richiesti.

Se qualcosa è ambiguo, **chiedere chiarimenti fa parte del test**.

## Fase 1 — Planning

Prima di toccare il target, spendi pochi minuti per scrivere:

```text
OBIETTIVO
SCOPE
OUT OF SCOPE
VINCOLI
DATI DISPONIBILI
PIANO INIZIALE
EVIDENZA CHE VORREI OTTENERE
```

Non serve prevedere tutto. Serve avere una direzione.

### Checkpoint

Sai dire in una frase cosa devi dimostrare e cosa non sei autorizzato a fare?

Se no, non iniziare ancora.

## Fase 2 — Recon & Enumeration

Costruisci l'attack surface inventory.

Non accumulare output: aggiorna continuamente:

```text
FACTS
HYPOTHESES
NEXT TESTS
```

### Checkpoint

Hai una mappa abbastanza chiara da decidere dove investire il tempo?

## Fase 3 — Vulnerability Analysis

Usa scanner, proxy e test manuali come strumenti per verificare ipotesi.

Per ogni potenziale finding chiediti:

1. qual è l'evidenza?
2. posso riprodurlo?
3. qual è la causa?
4. qual è l'impatto?
5. è dentro scope?

### Checkpoint

Non inserire nel report un alert che non sapresti difendere davanti al cliente.

## Fase 4 — Controlled Exploitation

Solo quando autorizzato e utile.

Prima di eseguire una PoC scrivi:

```text
PREREQUISITI
RISCHIO
EVIDENZA ATTESA
STOP CONDITION
CLEANUP
```

Se l'impatto è già sufficientemente dimostrato, non devi necessariamente spingerti oltre.

## Fase 5 — Evidence Review

Prima di scrivere il report, verifica che ogni conclusione importante abbia:

- asset;
- timestamp/contesto utile;
- passaggi essenziali;
- request/output pertinente;
- risultato osservato;
- distinzione tra fatto e interpretazione.

Questa fase evita di accorgersi troppo tardi che manca una prova.

## Fase 6 — Reporting

Produci finding usando il template del corso.

Poi scrivi una executive summary che risponda:

- cosa abbiamo testato?
- cosa abbiamo dimostrato?
- quali rischi richiedono priorità?
- cosa dovrebbe fare il cliente adesso?
- quali limitazioni dobbiamo dichiarare?

## Fase 7 — Client Presentation

Prepara una restituzione breve.

Ordine consigliato:

```text
1. obiettivo e scope
2. postura generale
3. rischio principale
4. altri finding rilevanti
5. priorità di remediation
6. limitazioni / retest
```

Non leggere il report. Racconta le decisioni che il cliente deve prendere.

## Come gestire il tempo

Un possibile ritmo, da adattare alla durata assegnata:

```text
10% planning
25% recon/mapping
35% testing/validation
10% evidence review
20% reporting/presentation
```

Non è una regola rigida: serve a evitare di spendere tutto il tempo sulla prima curiosità tecnica.

## Se ti blocchi

Nel capstone non ci sono hint tecnici progressivi come nelle prime lezioni, ma puoi usare questo recovery loop:

```text
Che cosa so con certezza?
Qual è la mia ipotesi migliore?
Quale test minimo la distingue da un'alternativa?
Che evidenza mi aspetto?
È coerente con scope e tempo rimasto?
```

Se non sai rispondere, torna alle evidenze invece di cambiare tool a caso.

## Livelli di completamento

### BASELINE

- scope compreso;
- attack surface inventory;
- note strutturate;
- almeno un finding validato;
- report sintetico.

### STRONG

In aggiunta:

- più finding ben validati;
- priorità motivate;
- evidence pack ordinato;
- executive summary chiara;
- gestione del tempo efficace.

### CHALLENGE

- attack path che concatena più debolezze/osservazioni;
- finding non rilevato automaticamente;
- severity difesa tecnicamente;
- presentazione cliente convincente.

## Criteri formativi

La qualità viene valutata soprattutto su:

| Area | Cosa conta |
|---|---|
| Scope | rispetto dei limiti e capacità di chiarire ambiguità |
| Metodo | test guidati da ipotesi, non tool casuali |
| Accuratezza | pochi falsi positivi e conclusioni prudenti |
| Evidence | prove riproducibili e ordinate |
| Impatto | dimostrato con misura |
| Reporting | chiarezza, severity, remediation |
| Comunicazione | capacità di adattare il messaggio al cliente |

## Deliverable

Usa:

- [`../../templates/finding-template.md`](../../templates/finding-template.md)
- [`../../templates/pentest-report-template.md`](../../templates/pentest-report-template.md)

Consegna prevista nel capstone formativo:

```text
1. Scope summary
2. Attack Surface Inventory
3. Structured notes
4. Finding(s)
5. Evidence Pack
6. Executive Summary / mini report
7. Breve restituzione orale
```

## Autovalutazione finale

Prima di consegnare, chiediti:

- ho separato fatti e ipotesi?
- ogni finding ha evidence?
- ho rispettato scope e RoE?
- ho fatto test necessari o solo interessanti?
- la remediation agisce sulla causa?
- un tecnico può riprodurre?
- un manager capisce perché importa?

Completa anche il quiz finale del portale: è un ultimo controllo del processo, non un esame.

## Nota sulla prova d'esame

Qualunque futura prova valutativa riservata verrà progettata e conservata **fuori da questa repository pubblica**. Questo capstone rimane materiale di esercitazione accessibile agli studenti.