# 03 — Reconnaissance & Enumeration

## Missione di oggi

UmbraMarket ti ha dato un solo punto di partenza. Il tuo lavoro è trasformare poche informazioni in una **mappa verificata della superficie d'attacco**, senza saltare subito alla ricerca di exploit.

Reconnaissance ed enumeration servono a rispondere:

> "Che cosa esiste davvero, che cosa è raggiungibile e quali domande di sicurezza vale la pena fare?"

## Prima di iniziare — leggi questo output

Nel test iniziale troverai piccoli output DNS/Nmap da interpretare. Non devi conoscere tutte le opzioni: devi distinguere ciò che l'output **dimostra** da ciò che puoi soltanto ipotizzare.

## Cosa imparerai

- distinguere recon passiva e attiva;
- identificare host, hostname, porte e servizi;
- usare `dig`, `curl` e Nmap con uno scopo preciso;
- leggere banner e versioni senza trattarli come verità assolute;
- costruire un attack surface inventory;
- prioritizzare cosa approfondire.

## 1. Reconnaissance ed enumeration

La recon raccoglie informazioni utili sul target. Può essere:

### Passiva

Cerca di ottenere dati senza interagire direttamente con il target, ad esempio da informazioni pubbliche o documentazione disponibile.

### Attiva

Interagisce con sistemi in scope: risoluzioni, richieste HTTP, scansioni autorizzate, interrogazioni di servizi.

Nel laboratorio lavoreremo solo sugli asset esplicitamente autorizzati.

## 2. Dal target alla superficie d'attacco

Il processo può essere letto così:

```text
Target iniziale
   ↓
Hostname / IP
   ↓
Porte raggiungibili
   ↓
Servizi
   ↓
Tecnologie e contenuti
   ↓
Nuovi asset / endpoint
   ↓
Ipotesi da verificare
```

Ogni freccia deve essere supportata da evidenza.

## 3. DNS come fonte di asset

Esempio:

```bash
dig shop.umbramarket.lab
```

Possibile risultato:

```text
shop.umbramarket.lab.  300 IN A 10.10.10.20
```

**Fatto:** quel nome ha restituito un record A verso quell'indirizzo.

**Non ancora un fatto:** che l'IP ospiti solo quel sito, che il sistema operativo sia Linux o che il servizio sia vulnerabile.

## 4. Porte e servizi

Comando base in laboratorio:

```bash
nmap <target>
```

Esempio semplificato:

```text
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https
```

Ciò che puoi affermare:

- quelle porte risultano aperte secondo la scansione;
- Nmap associa nomi di servizio comuni alle porte.

Ciò che **non** puoi ancora affermare:

- versione del software;
- vulnerabilità presente;
- sistema operativo certo.

### Version detection

```bash
nmap -sV <target>
```

Può raccogliere informazioni aggiuntive sui servizi. Anche in questo caso la versione rilevata è un'evidenza da verificare, non una garanzia assoluta.

## 5. Banner e fingerprinting

Una risposta HTTP potrebbe contenere:

```http
Server: nginx/1.24.0
```

Modo professionale di annotarla:

> "La risposta HTTP contiene un header `Server` che dichiara `nginx/1.24.0`. Tecnologia e versione effettive richiedono verifica."

Non:

> "Il server è sicuramente Nginx 1.24.0 ed è vulnerabile."

## 6. HTTP non è solo "porta 80/443"

Con:

```bash
curl -I http://<target>
```

puoi osservare header, redirect, cookie e altri indizi.

Poi il browser/proxy può mostrarti:

- pagine;
- endpoint;
- link;
- richieste API;
- hostname virtuali;
- tecnologie client-side.

L'enumeration web diventa parte fondamentale della superficie d'attacco.

## 7. Esempio svolto

Punto iniziale:

```text
shop.umbramarket.lab
```

Osservazioni:

```text
DNS → 10.10.10.20
Nmap → 22, 80, 443 aperte
HTTP 80 → redirect a HTTPS
HTTPS → applicazione web UmbraMarket
```

Possibili ipotesi:

```text
22/tcp → quale implementazione SSH? è necessaria all'esposizione Internet?
443/tcp → quali endpoint e ruoli espone l'applicazione?
redirect → esistono altri hostname o API richiamati dal browser?
```

Nota che le ipotesi non sono ancora finding.

## 8. Prioritizzare

Non devi approfondire tutto nello stesso momento.

Puoi chiederti:

- è esposto a Internet?
- è un servizio amministrativo?
- gestisce autenticazione o dati sensibili?
- presenta una tecnologia/versione interessante da verificare?
- conduce a nuovi asset?

Questo crea una coda di investigazione razionale.

## Laboratorio — Build the Attack Surface

### GUIDED

Ricevi un hostname o IP di laboratorio.

1. risolvilo, se applicabile;
2. verifica raggiungibilità/porte secondo le istruzioni del docente;
3. identifica i servizi;
4. osserva HTTP/HTTPS se presente;
5. registra **evidenza e fonte**;
6. per ogni dato formula una sola domanda successiva.

Compila:

| Asset | Porta | Servizio/indizio | Evidenza | Confidenza | Prossimo test |
|---|---:|---|---|---|---|

### Se sei bloccato

**Hint 1:** parti da nome/IP e chiediti cosa puoi verificare senza ancora cercare vulnerabilità.

**Hint 2:** DNS → porte → servizi → contenuto web.

### INDEPENDENT

Trova almeno un ulteriore hostname, endpoint o superficie esposta coerente con lo scope e documenta come ci sei arrivato.

### CHALLENGE

Crea una attack-surface map e assegna priorità ai punti di interesse. Ogni priorità deve avere una motivazione.

## Errori da evitare

- porta aperta = vulnerabilità;
- banner = verità certa;
- più opzioni di scansione = migliore metodologia;
- asset trovato = asset autorizzato;
- 80/443 = "solo sito web";
- output del tool senza contesto = evidenza sufficiente.

## Deliverable professionale

**Attack Surface Inventory** con:

- asset;
- servizi;
- fonte/evidenza;
- livello di confidenza;
- ipotesi successive;
- priorità.

Queste informazioni alimenteranno metodologia e descrizione tecnica dell'assessment, ma non diventano automaticamente finding.

## Prima di chiudere

Chiediti: se un collega ricevesse solo la tua tabella, capirebbe **cosa hai realmente verificato** e cosa invece resta un'ipotesi?

Completa l'autoverifica finale.