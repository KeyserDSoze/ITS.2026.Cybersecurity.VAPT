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

## Ambiente comune

I laboratori 00-07 possono usare [`platform/`](platform/), che contiene:

- UmbraMarket Guided Lab;
- OWASP Juice Shop;
- Admin Portal statico;
- File Service;
- setup Docker Compose e procedura di reset.

Per exploitation e post-exploitation viene usata una VM isolata separata, documentata nei relativi laboratori.

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
- setup;
- attività GUIDED;
- attività INDEPENDENT;
- CHALLENGE;
- hint progressivi quando utili;
- deliverable;
- cleanup/reset.

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
