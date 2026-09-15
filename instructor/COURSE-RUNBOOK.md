# Course Runbook — ITS Umbria VAPT 2026

Questa pagina è il punto di controllo operativo del docente durante l'erogazione del corso.

Le singole guide dettagliate sono in `instructor/00-...` fino a `12-...`.

## Obiettivo finale del percorso

Al termine del corso lo studente dovrebbe poter dire:

> Mi danno un target autorizzato che non conosco. So come partire, cosa osservare, come formulare ipotesi, come verificarle, come documentare ciò che trovo e come spiegare perché rappresenta un rischio.

## Sequenza didattica

| Modulo | Passaggio mentale | Deliverable principale |
|---:|---|---|
| 00 | distinguo fatti e ipotesi | facts / hypotheses / questions |
| 01 | chiarisco cosa sono autorizzato a fare | scope & RoE |
| 02 | capisco una request end-to-end | request anatomy |
| 03 | costruisco la superficie d'attacco | attack surface inventory |
| 04 | valido ciò che un tool suggerisce | finding validato/scartato |
| 05 | mappo una web application | application attack surface map |
| 06 | collego input, contesto ed evidenza | injection/input finding |
| 07 | verifico decisioni di authorization | access-control/API finding |
| 08 | decido se e come fare una PoC | exploitation evidence pack |
| 09 | misuro propagazione e privilege boundary | attack path |
| 10 | trasformo evidence in deliverable | mini report |
| 11 | uso AI senza delegare il giudizio | manual vs AI-assisted review |
| 12 | conduco un assessment end-to-end | capstone report + presentation |

## Dipendenze importanti

```text
00 mindset
   ↓
01 scope
   ↓
02 HTTP/fondamentali
   ↓
03 recon
   ↓
04 validation
   ↓
05 web mapping
   ↓
06 input handling ─┐
07 auth/API ───────┤
                   ↓
08 controlled exploitation
   ↓
09 post-exploitation
   ↓
10 reporting
   ↓
11 AI-assisted
   ↓
12 capstone
```

Il modulo 10 può essere anticipato in piccole dosi fin dal primo giorno: ogni laboratorio produce già note ed evidence che confluiranno nel reporting.

## Routine prima di ogni lezione

Checklist docente:

```text
[ ] apro la guida instructor del modulo
[ ] apro lezione e dossier studente
[ ] verifico gli artefatti nell'ordine previsto
[ ] provo eventuale demo locale
[ ] preparo la lavagna/tabella iniziale
[ ] decido quali informazioni NON anticipare
[ ] definisco il checkpoint minimo della lezione
[ ] preparo una variante se la classe è più debole/forte del previsto
```

## Routine durante la lezione

Ritornare continuamente a:

```text
COSA SO?
COME LO SO?
COSA STO IPOTIZZANDO?
COSA TESTO DOPO?
COSA MI ASPETTO?
COSA HO OSSERVATO?
COSA POSSO CONCLUDERE?
```

Quando uno studente propone un tool/comando, chiedere prima:

> «Quale domanda vuoi rispondere con quel comando?»

Quando propone una vulnerabilità, chiedere:

> «Quale evidence la dimostra?»

Quando propone di continuare un test, chiedere:

> «Che cosa aggiunge questa azione rispetto a ciò che sappiamo già?»

## Routine dopo ogni laboratorio

Far produrre almeno una traccia persistente:

```text
FACTS
HYPOTHESES
TESTS
EVIDENCE
FINDINGS / REJECTED ALERTS
NEXT QUESTIONS
```

Non serve raccogliere tutto ogni volta; l'obiettivo è abituare alla disciplina documentale.

## Regola sugli hint

Usare una scala progressiva:

```text
LEVEL 0 — nessun hint
LEVEL 1 — domanda sul metodo
LEVEL 2 — indicazione di quale evidence rileggere
LEVEL 3 — indicazione dell'area/concetto
LEVEL 4 — passaggio guidato
```

Partire sempre dal livello più basso possibile.

Esempio:

```text
NO: "guarda l'ID nell'URL"

PRIMA: "quale parte della request identifica l'oggetto?"
```

## Gestione classe a livelli diversi

### Studenti in difficoltà

Ridurre la superficie, non il metodo.

Meglio:

```text
1 request
1 input
1 ipotesi
1 test
```

che dieci tool senza comprensione.

### Studenti medi

Lasciare scelta del next test e chiedere motivazione.

### Studenti forti

Aggiungere ambiguità, falsi positivi, evidence contraddittorie, asset fuori scope e decisioni di priorità.

Non premiare semplicemente la velocità.

## Reporting continuo

Da modulo 00 in poi gli studenti dovrebbero costruire mentalmente la futura struttura del finding:

```text
asset
osservazione
test
evidence
conclusione
impact
remediation
```

Nel modulo 10 queste parti vengono formalizzate, ma non devono essere concetti nuovi.

## Uso dell'AI nel corso

Prima del modulo 11 l'AI può essere consentita o limitata a discrezione del docente, ma valgono sempre queste regole:

```text
AI output ≠ evidence
AI reference ≠ fonte verificata
AI suggestion ≠ autorizzazione
AI severity ≠ decisione finale
```

Nel modulo 11 queste regole diventano oggetto esplicito di laboratorio.

## Capstone

Il capstone pubblico deve verificare il processo, non sorprendere con tecniche mai viste.

Prima di avviarlo verificare che gli studenti sappiano almeno:

- leggere una request;
- distinguere authn/authz;
- costruire attack surface;
- validare un alert;
- raccogliere evidence;
- scrivere un finding.

Se una di queste competenze manca in gran parte della classe, usare il capstone come attività guidata invece che autonoma.

## Cose da non fare durante il corso

- trasformare ogni lezione in una lista di tool;
- premiare chi trova più vulnerabilità senza validarle;
- mostrare subito la soluzione del dossier;
- presentare lo scanner come fonte di verità;
- usare exploitation come spettacolo;
- lasciare reporting tutto all'ultima lezione;
- confondere materiale formativo pubblico ed esame riservato.

## Fine di ogni incontro

Chiudere sempre con due domande:

> «Che cosa sappiamo adesso che prima non sapevamo?»

> «Quale decisione tecnica possiamo prendere grazie a questa nuova evidenza?»

Se gli studenti riescono a rispondere, la lezione ha prodotto apprendimento utilizzabile.