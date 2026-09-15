# 01 — VAPT, Scope & Engagement

## Missione di oggi

Sei entrato nel team che deve valutare **UmbraMarket**, una nuova piattaforma e-commerce. Il cliente dice soltanto:

> "La piattaforma sta per andare in produzione. Vorremmo sapere se è sicura. Fateci un penetration test."

Sembra una richiesta chiara, ma non lo è. Prima di aprire Kali, lanciare uno scanner o provare un endpoint, devi trasformare una richiesta generica in un **incarico autorizzato, misurabile e sicuro**.

In questa lezione impari a fare proprio questo.

## Prima di iniziare — test rapido

Nel portale trovi un breve test iniziale. Non fa voto: serve a capire se distingui già scope, obiettivo, VA/PT e livelli di conoscenza del tester.

## Cosa imparerai

Al termine dovresti saper:

- distinguere Vulnerability Scanning, Vulnerability Assessment e Penetration Test;
- spiegare black box, grey box e white box;
- definire scope, out-of-scope e Rules of Engagement;
- trasformare una richiesta del cliente in un obiettivo verificabile;
- capire quando fermarti e chiedere una conferma invece di procedere.

## Perché interessa a un pentester

Un penetration test è un attacco simulato, ma soprattutto è un'attività **autorizzata e controllata**. Una tecnica perfettamente lecita su un asset in scope può diventare un problema se applicata all'asset sbagliato, nell'orario sbagliato o oltre i limiti concordati.

Il primo strumento del pentester, quindi, non è Nmap: è la capacità di chiarire **che cosa è autorizzato a dimostrare**.

## 1. Scanner, Vulnerability Assessment e Penetration Test

Questi termini vengono spesso confusi.

### Vulnerability Scanner

È uno strumento. Produce segnali, rilevazioni e possibili finding. Può essere molto utile, ma non decide da solo se il rischio è reale.

### Vulnerability Assessment

È un processo che cerca di capire:

- quali debolezze esistono;
- quali sono plausibili o confermate;
- quanto sono rilevanti nel contesto del target;
- quali dovrebbero essere corrette prima.

### Penetration Test

Aggiunge la domanda:

> "Questa debolezza può realmente essere sfruttata, nei limiti concordati, per produrre un impatto?"

Non significa che ogni vulnerabilità vada sfruttata fino al massimo impatto. Significa che, quando serve, il tester produce una **prova controllata**.

### Prova tu

Classifica i tre esempi:

1. un tool segnala che il server potrebbe usare una libreria vulnerabile;
2. il tester verifica versione, configurazione e condizioni e conclude che il problema è reale;
3. il tester dimostra che il problema consente l'accesso a dati che l'utente non dovrebbe vedere.

Una possibile classificazione è: **scanner → VA → PT**.

## 2. Obiettivo: cosa vuole sapere davvero il cliente?

"È sicuro?" non è un obiettivo testabile.

Un obiettivo migliore è:

> "Valutare se un utente Internet non autenticato può ottenere accesso non autorizzato a dati cliente o funzioni amministrative della piattaforma UmbraMarket."

Questa frase aiuta il tester a decidere cosa cercare, quali asset servono e quando l'evidenza è sufficiente.

### Errore da principiante

> "Il cliente ha detto penetration test, quindi possiamo provare qualunque cosa."

No. Il nome dell'attività non sostituisce scope e regole.

## 3. Scope: dove puoi lavorare

Lo **scope** definisce gli asset autorizzati.

Esempio:

```text
IN SCOPE
- shop.umbramarket.lab
- api.umbramarket.lab

OUT OF SCOPE
- sistemi di pagamento di terze parti
- posta aziendale
- infrastruttura ITS
```

Lo scope può includere domini, IP, API, applicazioni, account, ambienti e reti.

### Caso pratico

Durante la recon trovi `admin.umbramarket.lab`, ma non compare nello scope.

La scelta professionale è:

1. documentare la scoperta;
2. non testarlo;
3. chiedere al contatto autorizzato se va incluso.

Scoperta e autorizzazione non sono la stessa cosa.

## 4. Rules of Engagement: come puoi lavorare

Le **Rules of Engagement (RoE)** definiscono modalità e limiti.

Dovrebbero chiarire almeno:

- periodo e orari del test;
- tecniche consentite e vietate;
- account forniti;
- limiti su brute force, DoS e azioni distruttive;
- gestione di credenziali e dati sensibili;
- contatto di emergenza;
- stop condition;
- modalità di consegna delle evidenze;
- eventuale retest.

### Stop condition

Una stop condition è una situazione in cui ti fermi e contatti il cliente. Esempi:

- degrado del servizio;
- accesso inatteso a dati reali sensibili;
- scoperta di un asset critico non previsto;
- dubbio concreto sul perimetro autorizzato.

## 5. Black, Grey e White Box

Questi termini descrivono quante informazioni riceve il tester.

| Approccio | Informazioni iniziali | Utile per |
|---|---|---|
| Black box | minime | simulare un attaccante esterno e osservare ciò che è esposto |
| Grey box | parziali, ad esempio credenziali standard | testare scenari realistici con accesso limitato |
| White box | ampie, anche architettura o codice | massimizzare copertura e profondità |

Nessun approccio è "sempre migliore". Dipende dall'obiettivo.

## 6. PTES come mappa del lavoro

PTES può essere usato come struttura mentale dell'incarico:

1. Pre-engagement Interactions
2. Intelligence Gathering
3. Threat Modeling
4. Vulnerability Analysis
5. Exploitation
6. Post-Exploitation
7. Reporting

Non serve imparare l'elenco a memoria oggi. Serve capire che un pentest professionale ha **un prima, un durante e un dopo**.

## Esempio svolto — dal cliente allo scope

Richiesta iniziale:

> "Testate UmbraMarket prima del go-live."

Domande utili:

1. Qual è l'obiettivo di business del test?
2. Quali domini/IP/applicazioni sono in scope?
3. Esistono sistemi di terze parti da escludere?
4. Avremo account standard o amministrativi?
5. Il test è black, grey o white box?
6. Quali tecniche non sono consentite?
7. Quali sono gli orari?
8. Chi contattiamo in caso di incidente?
9. Come trattiamo eventuali dati sensibili?
10. Quali deliverable si aspettano?

Dopo il kickoff, una sintesi potrebbe essere:

```text
Obiettivo: verificare accesso non autorizzato a dati e funzioni sensibili.
Scope: shop.umbramarket.lab, api.umbramarket.lab.
Approccio: grey box con due account standard.
Esclusioni: payment provider e servizi terzi.
Vincoli: niente DoS, niente social engineering, niente azioni distruttive.
Stop: degrado del servizio o accesso a dati reali non previsti.
Contatto: referente tecnico del cliente.
```

## Laboratorio — Client Kickoff

### GUIDED

Il docente interpreta il cliente e fornisce soltanto:

> "La nuova piattaforma deve andare online. Vogliamo un penetration test."

Lavorando in gruppo, prepara almeno **8 domande**. Usa queste categorie come guida:

```text
OBIETTIVO
ASSET
ACCESSI
LIMITI
TEMPI
DATI
CONTATTI
DELIVERABLE
```

Poi trasforma le risposte in una bozza di scope.

### Se sei bloccato

**Hint 1:** pensa a cosa potrebbe causare un incidente se non fosse chiarito.

**Hint 2:** prova a completare la frase: "Posso testare ___ usando ___ fino a quando ___".

### INDEPENDENT

Ricevi un secondo scenario cliente con informazioni incomplete. Individua autonomamente:

- almeno 5 ambiguità;
- almeno 3 rischi operativi;
- le domande necessarie a risolverli.

### CHALLENGE

Scrivi una mini Rules of Engagement che un altro team potrebbe usare senza chiederti ulteriori chiarimenti.

## Deliverable professionale

Produci una pagina con:

```text
OBIETTIVO
IN SCOPE
OUT OF SCOPE
APPROCCIO
VINCOLI
STOP CONDITIONS
CONTATTO DI ESCALATION
DELIVERABLE
```

Questa pagina entrerà più avanti nelle sezioni **Scope, Metodologia e Limitazioni** del report.

## Prima di chiudere

Dovresti riuscire a rispondere senza esitazione:

- perché "testate questo IP" non è un obiettivo sufficiente?
- perché un asset scoperto non è automaticamente autorizzato?
- quando useresti grey box invece di black box?
- qual è la differenza tra scope e Rules of Engagement?

Nel portale trovi l'autoverifica finale.

> Un penetration tester professionale non inizia chiedendo "quale exploit uso?", ma "che cosa sono autorizzato a dimostrare?".