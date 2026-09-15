# Labs

Questa cartella contiene i laboratori pubblici del corso VAPT.

## Filosofia

I laboratori non sono liste di comandi. Ogni attività deve far passare lo studente attraverso:

```text
obiettivo → osservazione → ipotesi → test → evidenza → conclusione
```

La progressione usata è:

```text
GUIDED      = passaggi e checkpoint espliciti
INDEPENDENT = obiettivo chiaro, meno indicazioni
CHALLENGE   = obiettivo e vincoli, metodo a scelta dello studente
```

All'inizio del corso prevale GUIDED; procedendo verso il capstone aumenta l'autonomia.

## Simulazioni guidate

I laboratori possono essere svolti anche senza eseguire realmente tool: vengono forniti **output, request, response, note cliente e risultati completamente fittizi**. Lo studente deve interpretarli come se stesse lavorando a un vero assessment.

Questo permette di allenare soprattutto:

```text
COSA HO OSSERVATO?
        ↓
COSA POSSO AFFERMARE?
        ↓
COSA STO SOLO IPOTIZZANDO?
        ↓
QUALE TEST FAREI DOPO?
        ↓
QUALE EVIDENZA MI SERVE?
        ↓
QUANDO POSSO FERMARMI?
```

Simulazioni già disponibili:

| Lab | Storia | Concetto principale |
|---|---|---|
| [`00-baseline-and-mindset/`](00-baseline-and-mindset/) | First Look | fatti vs ipotesi |
| [`01-vapt-engagement/`](01-vapt-engagement/) | Il cliente dice «fateci un pentest» | scope e Rules of Engagement |
| [`02-technical-foundations/`](02-technical-foundations/) | Follow the Request | HTTP, sessione e request anatomy |
| [`03-recon-enumeration/`](03-recon-enumeration/) | Build the Attack Surface | recon ed enumeration |
| [`04-vulnerability-assessment/`](04-vulnerability-assessment/) | Scanner vs Human | validazione e falsi positivi |
| [`05-web-pentesting-foundations/`](05-web-pentesting-foundations/) | Map Before You Attack | attack surface web |
| [`06-web-injection/`](06-web-injection/) | Input Changes Behaviour | input handling e PoC minima |
| [`07-auth-api-security/`](07-auth-api-security/) | Two Users, One Order | authentication vs authorization |
| [`08-controlled-exploitation/`](08-controlled-exploitation/) | From Finding to Controlled Proof | prerequisiti, exploitability e stop condition |
| [`09-post-exploitation/`](09-post-exploitation/) | After Initial Access | privilege boundary e attack path |
| [`10-reporting/`](10-reporting/) | From Raw Evidence to Professional Finding | evidenza, impatto e remediation |
| [`11-ai-assisted-pentesting/`](11-ai-assisted-pentesting/) | AI propone, il tester verifica | VERIFIED / PLAUSIBLE / WRONG e human checkpoint |
| [`12-capstone/`](12-capstone/) | UmbraMarket Mini Assessment | assessment end-to-end e dossier progressivo |

Ogni cartella contiene un `README.md` e, quando utile, una directory `artifacts/` con gli output inventati da analizzare.

## Ambiente comune

I laboratori 00-07 possono inoltre usare [`platform/`](platform/), che contiene:

- UmbraMarket Guided Lab;
- OWASP Juice Shop;
- Admin Portal statico;
- File Service;
- setup Docker Compose e procedura di reset.

Le simulazioni testuali restano però utilizzabili anche senza avviare la piattaforma.

I laboratori 08-11 sono progettati prima di tutto come dossier narrativi: exploitation, post-exploitation, reporting e uso dell'AI vengono rappresentati con output fittizi e prove controllate, così il focus rimane sulle decisioni del tester.

Il laboratorio 12 è un capstone pubblico/formativo: gli artefatti sono ordinati per fasi e devono essere aperti progressivamente, dopo aver annotato cosa si sa, cosa si ipotizza e quale sarebbe il test successivo.

## Struttura

```text
labs/
├── platform/                     # stack locale comune
├── 00-baseline-and-mindset/
├── 01-vapt-engagement/
├── ...
└── 12-capstone/
```

Ogni laboratorio dovrebbe contenere:

- scenario;
- scope;
- obiettivi;
- setup o dossier simulato;
- attività GUIDED;
- attività INDEPENDENT;
- CHALLENGE;
- hint progressivi quando utili;
- deliverable;
- cleanup/reset quando esiste un target attivo.

## Evidenze

Gli studenti devono raccogliere almeno le evidenze necessarie a sostenere le proprie conclusioni. Quando applicabile:

```text
assessment-notes/
├── scope.md
├── recon/
├── requests/
├── screenshots/
├── findings/
└── report/
```

Questa cartella di lavoro è locale allo studente e non va necessariamente committata.

## Regole di sicurezza

- Testare solo i target esplicitamente indicati.
- Non estendere automaticamente lo scope a porte o host scoperti.
- Non usare infrastruttura ITS, LAN dell'aula o servizi Internet come target impliciti.
- Non inserire dati personali o credenziali reali.
- Preferire PoC minime e reversibili.
- Resettare i target dopo attività che modificano stato o dati.
- Le applicazioni volutamente vulnerabili non devono essere esposte pubblicamente.

## Materiale d'esame

La repository è pubblica: nessun target, flag, credenziale, soluzione o configurazione riservata di una futura prova d'esame deve essere inserito qui.
