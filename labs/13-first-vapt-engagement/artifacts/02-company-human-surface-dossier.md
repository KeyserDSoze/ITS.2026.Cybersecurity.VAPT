# UmbraMarket — Company & Human Attack Surface Dossier

> **Documento per gli studenti**  
> Tutti i nomi, ruoli, luoghi, comportamenti e dati presenti in questo dossier sono fittizi e creati esclusivamente per il laboratorio.

## Perché esiste questo documento

Un assessment reale non parte sempre da una porta TCP.

Un'azienda è composta da:

```text
persone
processi
abitudini
spazi
fornitori
tecnologie
documenti
decisioni
eccezioni
```

Durante questo laboratorio considerate **ogni informazione come potenziale elemento della superficie di attacco**, ma non assumete che ogni dettaglio sia vulnerabile o utile.

Per ogni osservazione chiedetevi:

```text
COSA HO OSSERVATO?
        ↓
CHE COSA MI DICE SULL'ORGANIZZAZIONE?
        ↓
QUALE IPOTESI DI RISCHIO POTREBBE SUGGERIRE?
        ↓
QUALI PREREQUISITI SERVIREBBERO?
        ↓
È NELLO SCOPE?
        ↓
VALE DAVVERO LA PENA VERIFICARLA?
```

---

# 1. Profilo aziendale

## UmbraMarket S.r.l.

UmbraMarket è una PMI che vende arredi e accessori per ufficio a clienti business.

L'azienda possiede:

- un portale e-commerce B2B;
- un piccolo team commerciale;
- un ufficio amministrativo;
- un magazzino;
- un reparto IT interno di dimensioni ridotte;
- alcuni fornitori esterni per software, logistica e manutenzione.

L'azienda sta crescendo rapidamente e molti processi sono nati in modo informale.

### Dimensioni indicative

```text
circa 48 dipendenti
circa 10 collaboratori/consulenti ricorrenti
2 sedi operative nello scenario
1 portale clienti
1 area amministrativa
1 magazzino
```

La sede oggetto del laboratorio ospita circa 35 persone durante una giornata normale.

---

# 2. Organizzazione interna

## Direzione

La direzione è composta da:

- CEO;
- responsabile amministrazione;
- responsabile commerciale;
- responsabile operations.

La direzione usa principalmente laptop aziendali.

Il CEO viaggia frequentemente e lavora spesso da smartphone.

---

## IT

Il team IT è composto da tre persone:

- IT Manager;
- System Administrator;
- Developer / Application Support.

Il team gestisce:

- account;
- laptop;
- rete interna;
- portale UmbraMarket;
- applicazioni SaaS;
- supporto agli utenti.

Quando il carico di lavoro aumenta, alcune attività vengono svolte rapidamente e documentate solo successivamente.

---

## Commerciale

Il reparto commerciale ha 9 persone.

Utilizza:

- CRM;
- email;
- portale clienti;
- file PDF;
- fogli di calcolo;
- smartphone aziendali.

Il commerciale riceve spesso documenti da clienti e potenziali clienti.

---

## Amministrazione

L'amministrazione ha 6 persone.

Gestisce:

- fatture;
- ordini;
- pagamenti;
- dati dei fornitori;
- documentazione contrattuale.

Riceve frequentemente email con allegati provenienti da soggetti esterni.

---

## Magazzino e logistica

Il magazzino ha 12 operatori.

Alcune postazioni sono condivise tra più turni.

Il personale del magazzino utilizza:

- terminali;
- stampanti;
- lettori di codici;
- una postazione Windows condivisa per documenti e spedizioni.

---

# 3. Una normale giornata in UmbraMarket

## 07:45–08:30 — Arrivo dei primi dipendenti

Il personale del magazzino arriva prima degli uffici.

L'ingresso principale non è ancora molto frequentato.

Il cancello viene aperto per permettere l'accesso ai corrieri.

Durante questa fascia oraria possono arrivare contemporaneamente:

- dipendenti;
- corrieri;
- manutentori;
- fornitori.

La reception apre ufficialmente alle 08:30.

---

## 08:30–09:00 — Ingresso uffici

La maggior parte dei dipendenti arriva tra le 08:30 e le 09:00.

L'accesso avviene tramite badge.

Quando più persone entrano contemporaneamente è comune che la porta venga tenuta aperta per chi arriva subito dietro.

I dipendenti si conoscono quasi tutti di vista.

I nuovi collaboratori e i consulenti non sempre sono riconoscibili.

---

# 4. Reception e visitatori

La reception registra normalmente i visitatori.

Il processo previsto è:

```text
visitatore
→ reception
→ registrazione
→ badge visitatore
→ contatto interno
→ accesso
```

Tuttavia:

- i corrieri abituali sono conosciuti;
- alcuni fornitori ricorrenti vengono fatti entrare rapidamente;
- nei momenti di maggiore traffico il controllo è meno formale;
- i visitatori attendono vicino all'ingresso principale.

I badge visitatore devono essere restituiti all'uscita.

---

# 5. Pausa caffè

Tra le 10:15 e le 10:45 molte persone vanno nella zona break.

Nella zona break sono presenti:

- macchina del caffè;
- distributore automatico;
- tavoli;
- stampante multifunzione poco distante.

I dipendenti parlano frequentemente di:

- clienti;
- riunioni;
- problemi tecnici;
- scadenze;
- colleghi assenti.

Non esistono regole particolari sulle conversazioni nella zona break.

---

# 6. Pausa sigaretta

Circa 8–10 dipendenti fumano regolarmente.

La zona utilizzata si trova sul retro dell'edificio, vicino:

- all'uscita secondaria;
- all'area dei cassonetti;
- al parcheggio del personale;
- alla zona di carico/scarico.

Durante la pausa:

- alcune persone lasciano il badge al collo;
- vengono utilizzati smartphone personali;
- si parla spesso di lavoro;
- la porta posteriore viene aperta frequentemente.

L'area non è presidiata continuamente.

---

# 7. Parcheggio

Il parcheggio dipendenti si trova accanto all'edificio.

Alcune automobili sono facilmente riconoscibili perché riportano:

- adesivi aziendali;
- pass del parcheggio;
- materiale commerciale visibile dall'esterno.

Il personale tende a lasciare l'auto sempre nella stessa zona.

---

# 8. Scrivanie

La politica aziendale prevede di bloccare il computer quando ci si allontana.

Nella pratica il comportamento varia.

Alcuni dipendenti:

- bloccano sempre la postazione;
- lasciano il PC sbloccato durante pause brevi;
- lasciano documenti cartacei sulla scrivania;
- tengono post-it con promemoria;
- utilizzano notebook personali per prendere appunti.

Non è noto se sui post-it siano presenti password.

---

# 9. Sale riunioni

Le sale riunioni hanno:

- monitor;
- adattatori HDMI/USB-C;
- lavagna;
- rete Wi-Fi aziendale;
- rete Wi-Fi guest.

Al termine delle riunioni possono rimanere sulla lavagna:

- nomi di progetti;
- diagrammi;
- date;
- nominativi di clienti.

Le sale vengono utilizzate anche da consulenti esterni.

---

# 10. Stampanti

Sono presenti stampanti multifunzione condivise.

Le persone inviano documenti e spesso li ritirano qualche minuto più tardi.

Occasionalmente alcuni fogli rimangono nel vassoio.

La stampante principale viene utilizzata anche dall'amministrazione.

---

# 11. Documenti cartacei

UmbraMarket cerca di lavorare digitalmente, ma vengono ancora stampati:

- ordini;
- fatture;
- documenti di spedizione;
- preventivi;
- fogli di lavoro;
- documentazione tecnica.

I documenti da eliminare dovrebbero essere inseriti nei contenitori dedicati alla distruzione sicura.

I normali cestini degli uffici vengono però utilizzati per fogli considerati non importanti.

---

# 12. Rifiuti e area cassonetti

Sul retro dell'edificio si trovano:

- rifiuti ordinari;
- carta;
- imballaggi;
- materiale proveniente dal magazzino.

Per documenti sensibili esiste un contenitore interno dedicato.

Non tutti i dipendenti hanno però la stessa percezione di cosa sia "sensibile".

Vicino ai cassonetti transitano:

- fumatori;
- personale del magazzino;
- addetti alle pulizie;
- corrieri.

---

# 13. Supporti USB

Le porte USB dei laptop non sono completamente disabilitate.

Il personale utilizza occasionalmente chiavette per:

- presentazioni;
- trasferimenti temporanei;
- documenti di fornitori;
- aggiornamenti di apparecchiature non connesse.

L'IT raccomanda di non utilizzare dispositivi sconosciuti.

Non è stato verificato quanto questa regola venga rispettata.

---

# 14. Smartphone

Molti dipendenti utilizzano lo smartphone personale durante le pause.

Alcuni account aziendali sono accessibili anche tramite smartphone.

Il CEO e alcuni commerciali lavorano spesso in mobilità.

In ufficio vengono utilizzati sia dispositivi aziendali sia personali.

---

# 15. Wi-Fi

Esistono due reti principali:

```text
UMBRA-CORP
UMBRA-GUEST
```

La rete guest è utilizzata da:

- clienti;
- consulenti;
- visitatori.

Le credenziali della guest vengono cambiate periodicamente.

La password viene comunicata verbalmente o mostrata alla reception.

---

# 16. Riunioni online

UmbraMarket utilizza regolarmente videoconferenze.

Gli inviti alle riunioni vengono condivisi via email.

Talvolta un dipendente inoltra un invito a un collega senza creare una nuova riunione.

Le riunioni commerciali possono includere soggetti esterni.

---

# 17. Email

La posta elettronica è uno degli strumenti principali.

Gli utenti ricevono messaggi da:

- clienti;
- fornitori;
- corrieri;
- consulenti;
- candidati;
- software SaaS.

Gli allegati più comuni sono:

```text
PDF
DOCX
XLSX
ZIP
immagini
```

Le comunicazioni urgenti vengono spesso gestite rapidamente.

---

# 18. Fatture e pagamenti

L'amministrazione riceve fatture via email.

Le variazioni delle coordinate bancarie dei fornitori dovrebbero essere verificate.

Per fornitori abituali, il personale tende però a riconoscere:

- nome;
- logo;
- stile delle comunicazioni;
- referente.

---

# 19. Help desk IT

Le richieste IT arrivano attraverso:

- sistema ticket;
- email;
- telefono;
- messaggi diretti ai tecnici.

Quando una persona non riesce a lavorare, tende a cercare il metodo più rapido.

L'IT conosce personalmente molti dipendenti.

---

# 20. Password e account

L'azienda utilizza account individuali.

Alcuni sistemi richiedono MFA.

Altri sistemi legacy utilizzano soltanto username e password.

I dipendenti hanno ricevuto indicazioni per non condividere password.

Nel magazzino esistono però alcune postazioni operative utilizzate da più persone.

---

# 21. Nuovi assunti

I nuovi dipendenti ricevono:

- laptop;
- account;
- badge;
- breve onboarding;
- documentazione aziendale.

Nei primi giorni fanno spesso domande a colleghi e IT.

Il personale tende ad aiutarli.

---

# 22. Persone che lasciano l'azienda

Quando un dipendente termina il rapporto:

- HR comunica la cessazione;
- IT disabilita gli account;
- vengono restituiti dispositivi e badge.

Le tempistiche possono dipendere dal coordinamento tra HR e IT.

---

# 23. Fornitori IT

UmbraMarket utilizza alcuni fornitori esterni.

Un tecnico esterno interviene occasionalmente su:

- stampanti;
- networking;
- apparati del magazzino.

I tecnici ricorrenti sono spesso riconosciuti dal personale.

---

# 24. Impresa di pulizie

Una società esterna effettua le pulizie quando una parte del personale ha già lasciato l'ufficio.

Gli addetti possono accedere a:

- corridoi;
- uffici;
- sale riunioni;
- zona break.

Non devono utilizzare i computer.

---

# 25. Corrieri

Il magazzino riceve numerosi corrieri ogni giorno.

Gli operatori conoscono alcuni autisti abituali.

I corrieri possono avvicinarsi:

- all'ingresso magazzino;
- alla zona carico;
- ad alcune aree operative.

---

# 26. Candidati e colloqui

I candidati vengono ricevuti in reception e accompagnati in una sala riunioni.

Durante le giornate con molti colloqui possono essere presenti più visitatori contemporaneamente.

I CV vengono ricevuti principalmente via email.

---

# 27. Eventi e fiere

Il reparto commerciale partecipa a fiere.

Durante questi eventi:

- vengono distribuiti biglietti da visita;
- vengono raccolti contatti;
- vengono mostrati laptop e tablet;
- vengono utilizzate reti esterne;
- vengono scambiate presentazioni.

---

# 28. Social media

UmbraMarket ha profili pubblici.

Vengono pubblicati:

- fotografie dell'ufficio;
- eventi;
- nuove assunzioni;
- partecipazione a fiere;
- nuove partnership;
- lanci di prodotto.

Alcuni dipendenti indicano pubblicamente il proprio ruolo professionale.

---

# 29. Assenze e ferie

Le assenze vengono gestite internamente tramite calendario e comunicazioni di reparto.

Durante le ferie di una persona, altri colleghi possono gestire alcune sue attività.

In certi casi viene impostato un messaggio automatico di assenza.

---

# 30. Orari ricorrenti

Alcuni comportamenti sono abbastanza prevedibili:

```text
08:30–09:00  ingresso uffici
10:15–10:45  pausa caffè / sigaretta
12:30–14:00  pausa pranzo
17:30–18:30  uscita della maggioranza del personale
```

Il magazzino ha orari differenti.

---

# 31. Eccezioni operative

Quando c'è urgenza, alcune procedure diventano più flessibili.

Esempi:

- ordine cliente urgente;
- problema con una spedizione;
- blocco dell'account;
- fattura vicina alla scadenza;
- riunione importante;
- visita inattesa di un fornitore.

Le persone cercano normalmente di risolvere il problema velocemente.

---

# 32. Informazioni tecniche già note dall'engagement

Il precedente brief autorizza l'analisi dei servizi locali:

```text
127.0.0.1:5005
127.0.0.1:8080
127.0.0.1:9090
```

Questo dossier **non sostituisce** la superficie tecnica.

La completa.

Pensate all'organizzazione come a un grafo:

```text
PERSONE ───── PROCESSI ───── TECNOLOGIA
   │              │               │
   ├── SPAZI      ├── FORNITORI   ├── ACCOUNT
   │              │               │
   └── ABITUDINI ─┴── DOCUMENTI ──┴── DATI
```

---

# 33. Esercizio

Scegliete almeno 10 osservazioni dal dossier.

Per ciascuna compilate:

| Osservazione | Possibile ipotesi | Prerequisiti | Potenziale impatto | Vale la pena verificarla? |
|---|---|---|---|---|
| | | | | |

Non è necessario trovare un attacco per ogni comportamento.

Sono risposte perfettamente valide:

```text
non vedo una strada realistica
richiederebbe troppo tempo
fuori scope
rischio operativo eccessivo
beneficio troppo basso
mancano prerequisiti
esiste un controllo compensativo
```

## Regola fondamentale

Il pensiero offensivo non significa:

> "Come posso attaccare tutto?"

Significa:

> "Quali condizioni potrebbero trasformare un comportamento normale in una superficie di rischio, e quali di queste ipotesi meritano davvero una verifica?"
