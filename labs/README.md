# Labs

Questa cartella contiene i laboratori pubblici del corso.

## Obiettivo

I laboratori devono allenare il processo di lavoro, non la sola esecuzione di comandi. Ogni laboratorio dovrebbe partire da un obiettivo e da uno scope chiaro e richiedere agli studenti di raccogliere evidenze.

## Struttura consigliata di un laboratorio

Ogni laboratorio può seguire questo formato:

```text
labs/<numero>-<nome>/
├── README.md            # consegna pubblica
├── setup/               # docker compose, config e asset necessari
├── starter/             # eventuale materiale iniziale
└── references/          # riferimenti pubblici utili
```

Non inserire nella cartella pubblica materiale riservato d'esame o soluzioni che si desidera mantenere segrete.

## Template README del laboratorio

Ogni laboratorio dovrebbe indicare almeno:

### Scenario

Contesto sintetico e realistico.

### Scope

Asset che possono essere testati e limiti dell'attività.

### Obiettivi didattici

Cosa lo studente dovrebbe imparare.

### Prerequisiti

Software, VM/container e conoscenze richieste.

### CORE

Obiettivo minimo del laboratorio.

### CHALLENGE

Estensione per chi completa rapidamente il CORE.

### HARD MODE

Obiettivo con pochi o nessun hint.

### Deliverable

Che cosa deve produrre lo studente, ad esempio:

- note di enumeration;
- request/response rilevanti;
- screenshot o output;
- uno o più finding compilati;
- breve riflessione sul percorso seguito.

### Cleanup

Come ripristinare l'ambiente e rimuovere eventuali artefatti prodotti dal test.

## Regole di sicurezza

- Eseguire i test solo su target esplicitamente indicati nel laboratorio.
- Non usare l'infrastruttura ITS o servizi Internet come target impliciti.
- Non riutilizzare credenziali reali nei laboratori.
- Non inserire dati personali nei target didattici.
- Preferire ambienti isolati, container o VM volutamente vulnerabili.

## Ambienti candidati

In base al modulo potranno essere utilizzati, tra gli altri:

- OWASP Juice Shop;
- laboratori PortSwigger Web Security Academy;
- applicazioni/API volutamente vulnerabili;
- Kali Linux come workstation di test;
- VM dedicate per scenari di network exploitation e post-exploitation.

La scelta definitiva di ogni target sarà documentata nel relativo laboratorio.
