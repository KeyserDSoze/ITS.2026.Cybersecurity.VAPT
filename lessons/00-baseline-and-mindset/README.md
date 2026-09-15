# 00 — Baseline & Pentester Mindset

## Obiettivi

Questa prima lezione ha due scopi: capire da dove parti e darti subito un metodo di lavoro.

Non è un esame e il test iniziale non produce un voto. Se alcune domande ti sembrano difficili, è normale: servono proprio a individuare gli argomenti che dovremo consolidare durante il corso.

Al termine della lezione dovresti essere in grado di:

- spiegare con parole tue che differenza c'è tra Vulnerability Assessment e Penetration Test;
- distinguere **target**, **asset**, **scope**, **vulnerabilità**, **evidenza**, **finding** e **remediation**;
- riconoscere la differenza tra un **fatto osservato** e una **ipotesi**;
- capire a grandi linee cosa rappresentano IP, dominio, porta, protocollo e servizio;
- distinguere autenticazione e autorizzazione;
- spiegare che cos'è una CVE e che cosa non ci dice da sola;
- descrivere il modello mentale che useremo in tutto il corso:

```text
osservazione → ipotesi → test → evidenza → conclusione
```

> **Prima di leggere la teoria:** nella pagina web trovi un **test di ingresso di 10 domande**. Fallo subito, senza cercare le risposte. Il suo scopo è misurare il punto di partenza, non giudicarti.

---

## 1. Che cosa fa davvero un penetration tester?

Un penetration tester non è semplicemente una persona che conosce molti tool e non è nemmeno qualcuno che prova exploit finché qualcosa funziona.

Il lavoro assomiglia molto di più a una **indagine tecnica**.

Ricevi un sistema da analizzare. All'inizio ne sai poco. Devi raccogliere informazioni, capire quali parti esistono, formulare ipotesi sui possibili punti deboli, verificare quelle ipotesi senza uscire dai limiti concordati e documentare ciò che riesci realmente a dimostrare.

Un buon penetration tester deve quindi saper fare tre cose contemporaneamente:

1. **osservare** il sistema;
2. **ragionare** su ciò che osserva;
3. **dimostrare** le proprie conclusioni con evidenze riproducibili.

Questa distinzione sarà importante per tutto il corso.

### Un esempio semplice

Supponiamo che durante un'attività di laboratorio tu scopra che sul target è raggiungibile la porta TCP 443.

Da questa informazione puoi affermare con sicurezza:

> Sul target è raggiungibile un servizio TCP sulla porta 443.

Non puoi ancora affermare con sicurezza:

> Il server usa Nginx.

Non puoi nemmeno dire:

> Il server contiene una vulnerabilità TLS.

E nemmeno:

> Il sistema operativo è Linux.

Queste ultime tre frasi sono **ipotesi**. Potrebbero essere vere, ma richiedono altre evidenze.

La differenza sembra banale, ma è uno dei punti che separa un assessment serio da una raccolta di supposizioni.

---

## 2. Le parole che useremo durante il corso

Prima di parlare di strumenti, dobbiamo avere un linguaggio comune.

| Termine | Significato pratico |
|---|---|
| **Target** | Il sistema che stiamo analizzando in un determinato momento: un IP, un'applicazione, una API, un host. |
| **Asset** | Una risorsa dell'organizzazione che ha valore: server, applicazioni, database, account, dati, servizi cloud. |
| **Scope** | L'insieme di sistemi e attività che siamo autorizzati a testare. |
| **Vulnerabilità** | Una debolezza che può compromettere sicurezza, riservatezza, integrità o disponibilità di un sistema. |
| **Evidence** | Una prova tecnica di ciò che abbiamo osservato: richiesta HTTP, risposta, screenshot, output di un comando, log, versione rilevata. |
| **Finding** | Un problema documentato nel report, supportato da evidenze e corredato da impatto e remediation. |
| **Impact** | La conseguenza concreta che la vulnerabilità potrebbe avere sul sistema o sul business. |
| **Remediation** | L'azione consigliata per eliminare o ridurre il problema. |
| **False positive** | Un problema segnalato da un tool o da una prima analisi che, dopo verifica, non risulta realmente presente o sfruttabile nel contesto analizzato. |

### Perché queste parole contano?

Perché durante il corso non sarà sufficiente dire:

> "Nmap mi ha trovato una cosa."

Dovremo essere in grado di trasformare l'osservazione in qualcosa di più preciso:

> "L'asset `web01` espone il servizio HTTPS sulla porta TCP 443. Il banner osservato indica una determinata tecnologia. Questa informazione genera l'ipotesi che il servizio possa essere interessato da una vulnerabilità nota; l'ipotesi deve però essere verificata prima di diventare un finding."

---

## 3. Vulnerability Assessment e Penetration Test non sono la stessa cosa

I termini vengono spesso messi insieme nell'acronimo **VAPT**, ma identificano attività differenti.

### Vulnerability Assessment

Un Vulnerability Assessment cerca di rispondere soprattutto alla domanda:

> **Quali debolezze sono presenti e quali dovrebbero essere verificate o corrette per prime?**

Può includere scanner automatici, analisi delle versioni, controllo delle configurazioni e verifica manuale.

Il risultato tipico è una lista ragionata di vulnerabilità o potenziali vulnerabilità con priorità, evidenze e remediation.

### Penetration Test

Un Penetration Test prova a rispondere a una domanda ulteriore:

> **Che cosa può realmente ottenere un attaccante sfruttando queste debolezze?**

Il penetration tester tenta quindi, nei limiti autorizzati, di dimostrare l'impatto di una vulnerabilità.

### Un esempio

Un vulnerability scanner segnala che un'applicazione potrebbe avere una SQL Injection.

Quello è un **segnale da verificare**.

Il tester riproduce manualmente il comportamento, dimostra che l'input modifica realmente la query e documenta quali dati potrebbero essere letti.

A quel punto abbiamo una **vulnerabilità verificata** e una dimostrazione dell'impatto.

> Uno scanner può aiutarti a trovare dove guardare. Non sostituisce la verifica del tester.

---

## 4. Prima regola: devi sapere cosa sei autorizzato a fare

La sicurezza offensiva utilizza tecniche che, fuori da un incarico autorizzato, possono causare danni o costituire attività illecite.

Per questo il primo problema di un penetration test non è tecnico.

È capire:

- quali sistemi possiamo analizzare;
- quali sistemi sono esclusi;
- quali tecniche sono ammesse;
- quali tecniche sono vietate;
- in quali orari possiamo operare;
- chi contattare se qualcosa va storto;
- come devono essere gestite le evidenze e gli eventuali dati incontrati.

Queste informazioni fanno parte dello **scope** e delle **Rules of Engagement**.

### Esempio

Il cliente comunica:

```text
IN SCOPE
shop.umbramarket.lab
api.umbramarket.lab

OUT OF SCOPE
payments.umbramarket.lab

VIETATO
Denial of Service
brute force massivo
cancellazione o modifica di dati
```

Se durante la ricognizione scopri `payments.umbramarket.lab`, non significa automaticamente che puoi testarlo.

Lo hai scoperto, ma è esplicitamente **fuori scope**.

Questa capacità di fermarsi è parte del lavoro tanto quanto saper usare un exploit.

---

## 5. I fondamentali tecnici: IP, dominio, porta, protocollo e servizio

Per fare penetration testing dobbiamo essere precisi anche nel modo in cui descriviamo una rete.

### Indirizzo IP

Un indirizzo IP identifica un'interfaccia raggiungibile in una rete IP.

Un esempio IPv4 potrebbe essere:

```text
10.10.20.15
```

L'indirizzo IP non ci dice automaticamente quale applicazione stia girando sulla macchina e non identifica necessariamente un singolo sito web.

### Nome di dominio

Un dominio è un nome leggibile utilizzato per raggiungere una risorsa, ad esempio:

```text
shop.umbramarket.lab
```

Attraverso il DNS quel nome può essere associato a uno o più indirizzi IP.

Più domini possono anche puntare allo stesso IP.

### Porta

TCP e UDP utilizzano numeri di porta per distinguere differenti comunicazioni e servizi.

Alcuni esempi comuni:

| Porta | Uso comune |
|---:|---|
| 22/TCP | SSH |
| 53/UDP e TCP | DNS |
| 80/TCP | HTTP |
| 443/TCP | HTTPS |

Attenzione però: una porta indica un **numero**, non garantisce quale software sia effettivamente in ascolto.

Trovare la porta 22 aperta rende ragionevole ipotizzare SSH, ma il servizio va verificato.

### Protocollo e servizio

Un protocollo definisce le regole con cui due sistemi comunicano. Un servizio è il software o la funzionalità che utilizza quel protocollo.

Esempio:

```text
TCP 443
  ↓
TLS
  ↓
HTTP
  ↓
Applicazione web
```

Nella realtà possono esistere configurazioni differenti: proprio per questo il tester deve verificare e non assumere.

---

## 6. Cosa succede quando apri un sito HTTPS?

Non serve ancora conoscere tutti i dettagli. Per questa lezione è sufficiente avere una mappa mentale.

Quando apri:

```text
https://shop.umbramarket.lab/products
```

succedono, semplificando, diversi passaggi:

```text
nome del sito
    ↓
risoluzione DNS
    ↓
indirizzo IP
    ↓
connessione TCP
    ↓
negoziazione TLS
    ↓
richiesta HTTP
    ↓
risposta HTTP
    ↓
rendering del browser
```

Questa catena è interessante per un penetration tester perché ogni livello può fornire informazioni diverse.

Il DNS può far emergere host e sottodomini. Le porte permettono di individuare servizi. TLS espone certificati e configurazioni. HTTP permette di analizzare endpoint, header, cookie, parametri e logica dell'applicazione.

Non dobbiamo ancora testare tutto. Dobbiamo iniziare a vedere il sistema come una serie di componenti osservabili.

---

## 7. Autenticazione e autorizzazione

Sono due concetti differenti e la differenza è fondamentale nel web pentesting.

### Autenticazione — Chi sei?

L'autenticazione serve a dimostrare la tua identità.

Esempio:

```text
username + password
        ↓
"Sei Alice"
```

### Autorizzazione — Cosa puoi fare?

Dopo aver identificato Alice, l'applicazione deve decidere quali risorse Alice può utilizzare.

```text
Alice è autenticata
        ↓
può vedere gli ordini di Alice
        ↓
NON dovrebbe vedere gli ordini di Bob
```

Un'applicazione può avere un'autenticazione perfettamente funzionante e avere comunque gravi problemi di autorizzazione.

Esempio:

```http
GET /api/orders/1001
```

Alice visualizza il proprio ordine.

Se modificando solamente l'identificatore:

```http
GET /api/orders/1002
```

Alice riesce a visualizzare l'ordine di Bob, il problema non è "il login". È un controllo di autorizzazione mancante o insufficiente.

Questo tipo di ragionamento tornerà molte volte nel corso.

---

## 8. Che cos'è una CVE?

**CVE** significa *Common Vulnerabilities and Exposures*.

Una CVE fornisce un identificatore standard per una vulnerabilità resa pubblica, ad esempio:

```text
CVE-2025-12345
```

L'identificatore permette a vendor, ricercatori, scanner e team di sicurezza di riferirsi allo stesso problema.

Ma trovare una CVE associata alla tecnologia osservata **non dimostra automaticamente che il target sia vulnerabile**.

Dobbiamo ancora verificare almeno:

- prodotto corretto;
- versione effettiva;
- configurazione;
- eventuali patch o backport;
- condizioni necessarie allo sfruttamento;
- esposizione reale nel contesto analizzato.

Quindi:

```text
versione osservata
      +
CVE compatibile
      ≠
vulnerabilità automaticamente confermata
```

È una **ipotesi da verificare**.

---

## 9. Il modello mentale del corso

Useremo continuamente questa sequenza:

```text
OSSERVAZIONE
      ↓
IPOTESI
      ↓
TEST
      ↓
EVIDENZA
      ↓
CONCLUSIONE
```

Vediamola con un esempio completo.

### Osservazione

```text
La porta TCP 443 del target risponde.
```

### Ipotesi

```text
Potrebbe essere esposto un servizio HTTPS.
```

### Test

Effettuiamo una richiesta appropriata al servizio autorizzato per capire come risponde.

### Evidenza

Otteniamo una risposta HTTPS valida con un'applicazione web e ne registriamo richiesta e risposta.

### Conclusione

```text
Il target espone un'applicazione web HTTPS sulla porta TCP 443.
```

Da questa conclusione possono nascere nuove ipotesi.

```text
Che tecnologia usa?
Esistono endpoint non visibili dalla home?
Richiede autenticazione?
Come gestisce la sessione?
Espone API?
```

Il pentest procede così: ogni risposta genera domande migliori.

---

## 10. Esempio guidato — UmbraMarket

Da questo momento useremo un'azienda fittizia come filo conduttore del corso.

Il cliente è **UmbraMarket S.r.l.**, una società che sta preparando una nuova piattaforma di e-commerce.

Per questa attività preliminare il cliente comunica:

```text
TARGET AUTORIZZATO
shop.umbramarket.lab

INFORMAZIONI DISPONIBILI
URL: https://shop.umbramarket.lab
IP comunicato dal cliente: 10.10.20.15

REGOLE
- Nessun Denial of Service
- Nessun brute force
- Nessuna modifica o cancellazione dei dati
- Non testare altri host senza autorizzazione
```

Aprendo l'applicazione nel laboratorio viene osservata questa risposta semplificata:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Server: nginx/1.24.0
Set-Cookie: session=ab12cd34; HttpOnly; Secure
```

### Passo 1 — Scriviamo solamente i fatti

Possiamo documentare:

```text
FACT 1
Il cliente ha indicato shop.umbramarket.lab come target autorizzato.

FACT 2
Il cliente associa il target all'indirizzo 10.10.20.15.

FACT 3
Una richiesta HTTPS al target produce una risposta HTTP 200.

FACT 4
La risposta contiene un header Server con valore nginx/1.24.0.

FACT 5
La risposta imposta un cookie chiamato session con attributi HttpOnly e Secure.
```

### Passo 2 — Formuliamo ipotesi, senza trasformarle in fatti

```text
HYPOTHESIS 1
Il web server potrebbe essere Nginx 1.24.0.

HYPOTHESIS 2
Il cookie session potrebbe essere utilizzato per mantenere lo stato autenticato dell'utente.

HYPOTHESIS 3
L'applicazione potrebbe avere endpoint o API ulteriori raggiungibili dallo stesso host.
```

Perché diciamo "potrebbe"?

Perché alcuni header possono essere modificati o nascosti e un nome di cookie, da solo, non dimostra come venga utilizzato.

### Passo 3 — Trasformiamo una ipotesi in un test

Prendiamo l'ipotesi sul cookie.

Domanda:

> Il cookie cambia quando effettuo il login? Viene utilizzato nelle richieste successive? Cosa accade quando la sessione termina?

Queste sono domande verificabili.

Non stiamo ancora cercando un exploit. Stiamo imparando come funziona il target.

---

## 11. Prova tu — Fatti o ipotesi?

Per ogni frase indica se rappresenta un **fatto**, una **ipotesi** o una **conclusione non supportata**.

1. `10.10.20.15:443` risponde a una connessione TCP.
2. Il server è Linux.
3. La risposta HTTP contiene `Server: nginx/1.24.0`.
4. Il server è sicuramente vulnerabile a tutte le CVE pubblicate per Nginx 1.24.0.
5. La pagina `/login` restituisce HTTP 200.
6. Il login è vulnerabile a SQL Injection.

<details>
<summary><strong>Controlla la soluzione</strong></summary>

1. **Fatto**, se lo abbiamo realmente verificato e ne abbiamo conservato l'evidenza.
2. **Ipotesi**: le informazioni disponibili non dimostrano il sistema operativo.
3. **Fatto**: stiamo descrivendo un valore realmente osservato nella risposta.
4. **Conclusione non supportata**: versione e CVE devono essere correlate e validate nel contesto reale.
5. **Fatto**, se abbiamo effettuato la richiesta e ottenuto quella risposta.
6. **Ipotesi** fino a quando non viene effettuato un test specifico e raccolta un'evidenza.

</details>

---

## 12. Missione 0 — Il tuo primo mini-assessment

Questa attività dura circa **15–20 minuti** e viene svolta prima di utilizzare scanner automatici.

### Scenario

Sei appena entrato nel team che deve analizzare UmbraMarket.

Il cliente ti consegna questa scheda:

```text
Target autorizzato: shop.umbramarket.lab
URL: https://shop.umbramarket.lab
Indirizzo dichiarato: 10.10.20.15
Credenziali: nessuna
Test distruttivi: vietati
Brute force: vietato
```

Durante l'osservazione iniziale ottieni:

```text
TCP/80   raggiungibile
TCP/443  raggiungibile
```

Visitando `http://shop.umbramarket.lab` ricevi un redirect verso HTTPS.

Visitando `https://shop.umbramarket.lab` compare una pagina di login con i campi email e password.

### Il tuo compito

Crea una tabella con quattro colonne:

| FACTS | HYPOTHESES | SAFE NEXT TEST | EVIDENCE TO SAVE |
|---|---|---|---|
| ... | ... | ... | ... |

Devi produrre almeno:

- 5 fatti;
- 3 ipotesi;
- 3 test successivi non distruttivi e compatibili con lo scope;
- per ogni test, quale evidenza vorresti conservare.

### Un esempio per partire

```text
FACT
La porta TCP 80 è raggiungibile.

HYPOTHESIS
Il servizio sulla porta 80 potrebbe essere HTTP.

SAFE NEXT TEST
Effettuare una normale richiesta HTTP e osservare la risposta.

EVIDENCE TO SAVE
Richiesta inviata, status code, header Location e timestamp.
```

Ora continua tu con le altre informazioni.

<details>
<summary><strong>Hai finito? Confronta il tuo ragionamento con un possibile approccio</strong></summary>

Possibili fatti:

- il target autorizzato è `shop.umbramarket.lab`;
- il cliente associa il target a `10.10.20.15`;
- TCP/80 è raggiungibile;
- TCP/443 è raggiungibile;
- una richiesta HTTP viene rediretta verso HTTPS;
- l'applicazione HTTPS espone una pagina di login;
- la pagina contiene almeno i campi email e password.

Possibili ipotesi:

- sulla porta 80 è presente un servizio HTTP dedicato principalmente al redirect;
- sulla 443 è esposta l'applicazione principale;
- l'applicazione potrebbe utilizzare cookie o token dopo l'autenticazione;
- potrebbero esistere altre pagine o endpoint sullo stesso host.

Possibili test successivi sicuri:

- analizzare richiesta e risposta della pagina di login;
- osservare header e cookie inviati dal server;
- verificare quali risorse vengono caricate dalla pagina;
- osservare il comportamento con credenziali volutamente errate senza effettuare brute force;
- mappare manualmente i link raggiungibili dall'interfaccia.

La soluzione non è unica. L'obiettivo è che ogni test derivi da una domanda precisa.

</details>

---

## 13. Come raccogliere una buona evidenza

Un'evidenza deve permettere a un'altra persona di capire **cosa è successo** e, possibilmente, di riprodurlo.

Dire:

> "Il login fa una cosa strana"

non è un'evidenza utile.

Meglio documentare:

```text
Data/ora: 2026-XX-XX 10:32
Target: https://shop.umbramarket.lab/login
Azione: invio del form con credenziali non valide
Risposta: HTTP 401
Messaggio osservato: Invalid credentials
Evidence: request/response salvata
```

Durante il corso impareremo a migliorare progressivamente la qualità delle evidenze.

Per ora ricordati almeno:

- target;
- data/ora;
- azione eseguita;
- risultato osservato;
- output o richiesta/risposta rilevante.

---

## 14. CORE, CHALLENGE e HARD MODE

Ogni laboratorio del corso avrà più livelli.

### CORE

È ciò che devi riuscire a completare per comprendere la lezione.

Per questa lezione:

- completa il test iniziale;
- completa la Missione 0;
- separa correttamente fatti e ipotesi;
- proponi almeno tre test successivi ragionati;
- conserva un'evidenza ordinata per ogni osservazione importante.

### CHALLENGE

Per ogni test proposto nella Missione 0, scrivi:

1. quale domanda vuoi risolvere;
2. quale risultato confermerebbe l'ipotesi;
3. quale risultato la smentirebbe;
4. quale nuova domanda potrebbe nascere.

### HARD MODE

Disegna una prima attack-surface map **solo con le informazioni realmente disponibili**, senza inventare componenti.

Esempio di formato:

```text
UmbraMarket
└── shop.umbramarket.lab
    ├── TCP/80
    │   └── redirect HTTP → HTTPS
    └── TCP/443
        └── web application
            └── /login
```

Se una tecnologia non è ancora verificata, annotala separatamente come ipotesi.

---

## 15. Cosa dovresti portarti via da questa lezione

Il concetto più importante non è un comando.

È questa distinzione:

```text
quello che vedo
      ≠
quello che penso
      ≠
quello che riesco a dimostrare
```

Durante un penetration test dobbiamo continuamente trasformare supposizioni in verifiche.

Il nostro processo sarà quindi:

```text
1. capire il contesto
2. raccogliere fatti
3. formulare ipotesi
4. scegliere il test meno invasivo utile a verificarle
5. raccogliere evidenze
6. trarre conclusioni supportate
7. decidere la domanda successiva
```

Se impari questo metodo, Nmap, Burp, ZAP, Metasploit e gli altri strumenti del corso diventeranno molto più facili da usare correttamente: saprai **perché** li stai utilizzando.

---

## Deliverable

Conserva una pagina di appunti con quattro sezioni:

```text
FACTS

HYPOTHESES

TESTS PERFORMED / TO PERFORM

QUESTIONS FOR THE CLIENT
```

Questo formato verrà raffinato nelle lezioni successive fino a diventare parte del materiale necessario per il report finale.

Prima di segnare la lezione come completata, esegui anche l'**autoverifica finale** presente nella pagina web.