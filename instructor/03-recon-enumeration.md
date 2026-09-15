# 03 — Reconnaissance & Enumeration — Guida docente

## Obiettivo docente

Far passare gli studenti da «lancio una scansione» a «costruisco una superficie d'attacco e decido cosa investigare».

Il modello da fissare è:

```text
TARGET
↓
ASSET / HOSTNAME
↓
PORTA
↓
SERVIZIO
↓
CONTENUTO / TECNOLOGIA
↓
IPOTESI
↓
TEST SUCCESSIVO
```

La qualità del lavoro non si misura nel numero di righe prodotte da Nmap, ma nella capacità di trasformare i dati in una mappa utilizzabile.

## Durata suggerita

Circa **2–2,5 ore**.

```text
00:00–00:10  apertura: da un solo hostname cosa posso scoprire?
00:10–00:30  passive vs active recon
00:30–00:55  porte, servizi, version detection e affidabilità
00:55–01:15  DNS, hostname, virtual host e content discovery
01:15–01:35  demo guidata
01:35–02:10  laboratorio Build the Attack Surface
02:10–02:25  prioritizzazione della superficie
02:25–02:30  debrief
```

## Preparazione

Aprire:

- lezione 03;
- `labs/03-recon-enumeration/`;
- eventuale piattaforma UmbraMarket locale;
- `nmap`, `dig`, `curl` oppure usare esclusivamente gli output simulati.

Preparare una tabella vuota:

| Asset | Porta | Servizio | Evidenza | Confidence | Next test |
|---|---:|---|---|---|---|

## Apertura

Scrivere soltanto:

```text
shop.umbramarket.lab
```

Chiedere:

> «Senza cercare vulnerabilità, quali domande vorreste riuscire a rispondere su questo target?»

Portare la classe verso:

- a quale IP risolve?
- esistono altri hostname correlati?
- quali servizi espone?
- che cosa risponde via HTTP?
- ci sono endpoint o directory interessanti?
- quali informazioni sono affidabili e quali soltanto dichiarate?

La parola chiave della lezione è **superficie d'attacco**, non scanner.

## Passive vs Active

Spiegazione operativa:

```text
PASSIVE
uso informazioni già disponibili senza interagire direttamente con il target

ACTIVE
invio richieste/pacchetti al target per osservare il comportamento
```

Poi aggiungere subito:

> «Passivo non significa automaticamente consentito e attivo non significa automaticamente aggressivo: conta sempre lo scope.»

Nel laboratorio tutto è autorizzato e fittizio, ma il ragionamento professionale deve essere mantenuto.

## Nmap — cosa voglio sapere?

Non iniziare mostrando 20 flag.

Partire da:

```bash
nmap <target>
```

Domanda:

> «Quale domanda sta cercando di rispondere questo comando?»

Risposta: quali porte TCP comuni risultano raggiungibili/apparire aperte nel test.

Poi:

```bash
nmap -sV <target>
```

Domanda:

> «Cosa stiamo aggiungendo?»

Risposta: tentativo di identificare il servizio/versione.

Subito dopo chiedere:

> «Il risultato della version detection è verità assoluta?»

No. È evidenza/fingerprinting da interpretare.

## Porte e servizi

Esempio simulato:

```text
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
8080/tcp open  http-alt
```

Domande:

- «Quale riga vi interessa di più e perché?»
- «8080 è necessariamente un pannello admin?»
- «443 significa che 80 è irrilevante?»
- «porta aperta significa vulnerabilità?»

Obiettivo: evitare associazioni automatiche.

## DNS e hostname

Mostrare:

```text
shop.umbramarket.lab   → 10.10.10.20
api.umbramarket.lab    → 10.10.10.20
```

Chiedere:

> «Sono due asset o uno?»

Risposta utile: dipende dal livello a cui stiamo mappando. Stesso IP ma superfici applicative/virtual host differenti.

Questo è un ottimo momento per distinguere:

```text
host di rete
hostname
applicazione
servizio
```

## HTTP enumeration

Usare:

```bash
curl -I http://<target>
```

oppure output simulato.

Far osservare:

- status;
- `Server`;
- redirect;
- `Location`;
- cookie;
- content type.

Poi `robots.txt`/sitemap o artefatto equivalente.

Domanda:

> «Se robots.txt elenca `/admin`, significa che abbiamo trovato una vulnerabilità?»

No: abbiamo trovato **una superficie da comprendere**, forse interessante, forse non accessibile, forse fuori scope.

## Demo guidata

Partire da un solo target.

Verbalizzare sempre il motivo del passo successivo.

Esempio:

```text
1. risolvo hostname
   perché voglio sapere dove sto andando

2. verifico porte
   perché voglio conoscere i servizi esposti

3. identifico i servizi
   perché voglio capire cosa parla su quelle porte

4. osservo HTTP
   perché una parte della superficie è web

5. individuo nuovi hostname/path
   perché la superficie iniziale si sta ampliando
```

Non fare comandi senza spiegare quale decisione dipende dall'output.

## Laboratorio — Build the Attack Surface

Dare gli artefatti in sequenza.

Dire:

> «Il vostro compito non è trovare la vulnerabilità. È consegnarmi la mappa migliore possibile di ciò che il cliente espone nel perimetro autorizzato.»

### GUIDED

Compilare:

| Asset | Porta | Servizio | Evidence | Hypothesis | Next test |
|---|---:|---|---|---|---|

### INDEPENDENT

Chiedere di scegliere **solo tre** punti da approfondire e motivare la priorità.

Questo obbliga a ragionare invece di testare tutto indiscriminatamente.

### CHALLENGE

Nel dossier compare un hostname correlato ma fuori scope.

Domanda:

> «Come lo documentate?»

Risposta desiderata:

```text
DISCOVERED ASSET
admin.umbramarket.lab

STATUS
not tested — outside current scope

ACTION
request scope clarification if relevant
```

## Prioritizzazione

Dopo il laboratorio chiedere a ogni gruppo:

> «Avete dieci minuti in più. Dove li spendete?»

Far motivare la decisione con:

- esposizione;
- funzione apparente;
- autenticazione;
- dati;
- stranezza dell'output;
- relazione con l'obiettivo cliente.

Non accettare «perché sembra interessante» senza dettaglio.

## Domande ricorrenti

- «Questo è un fatto o fingerprinting?»
- «Quale evidenza supporta il nome del servizio?»
- «Quale altra spiegazione è possibile?»
- «Questa informazione cambia il piano?»
- «È dentro scope?»
- «È un finding oppure solo attack surface?»
- «Perché questo test viene prima di quell'altro?»

## Misconception da intercettare

### Porta aperta = vulnerabilità

Correggere sempre.

### Version string = software certo e patch level certo

Distinguere dichiarazione/fingerprinting dalla reale esposizione.

### Scanner più aggressivo = recon migliore

Il recon migliore produce decisioni migliori, non necessariamente più traffico.

### Solo IP, niente hostname

Far vedere perché virtual hosting e DNS contano.

### Tutto ciò che scopro è automaticamente in scope

Riprendere il modulo 01.

### Enumeration = finding

Una directory, porta o servizio esposto non è automaticamente un problema di sicurezza.

## Debrief

Far disegnare una mappa collettiva alla lavagna:

```text
                   ┌─ shop hostname ─ HTTP paths
10.10.10.20 ──────┼─ api hostname ─ API endpoints
                   └─ port 22 ─ SSH

? admin hostname → DISCOVERED / OUT OF SCOPE
```

Poi chiedere:

> «Qual è la differenza tra questa mappa e l'output grezzo dello scanner?»

Risposta desiderata: la mappa contiene interpretazione, relazioni, confidence e priorità.

## Evidenze da osservare

Un buon Attack Surface Inventory:

- non chiama vulnerabilità ciò che non lo è;
- associa ogni affermazione a una fonte/output;
- separa hostname/IP/servizi;
- segnala correttamente asset fuori scope;
- contiene next test sensati;
- assegna priorità motivate.

## Adattamento del livello

### Classe debole

Fornire già le colonne e lavorare artefatto per artefatto.

Limitare inizialmente la superficie a:

```text
1 IP
2 porte
1 hostname
2 endpoint
```

### Classe media

Dossier completo e scelta autonoma dei next test.

### Classe forte

Aggiungere ambiguità:

- banner contraddittori;
- redirect tra hostname;
- servizio non identificato su porta non standard;
- hostname che risolve allo stesso IP ma risponde diversamente.

Chiedere di assegnare un livello di confidence alle conclusioni.

## Collegamento al modulo 04

Chiudere con:

> «Ora sappiamo quali superfici esistono. Il passo successivo è cercare possibili debolezze. Ma un tool che segnala una vulnerabilità non significa ancora che abbiamo un finding.»

Questo introduce direttamente Vulnerability Assessment e validazione.