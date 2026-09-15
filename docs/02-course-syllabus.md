# Course Syllabus — Bozza modulare

Questa è una struttura modulare iniziale. Il numero definitivo di incontri e la durata di ciascun modulo verranno adattati al monte ore effettivo.

## Modulo 0 — Baseline e mindset

### Obiettivi

- capire il livello iniziale della classe;
- osservare come gli studenti affrontano un problema non completamente guidato;
- introdurre il concetto di ipotesi, evidenza e validazione.

### Attività

- breve discussione su rete, web e sistemi;
- mini esercizio di osservazione di un target controllato;
- raccolta delle aree da rinforzare.

### Output

Una baseline formativa, non valutativa.

---

## Modulo 1 — VAPT, engagement e metodologia

### Concetti

- Vulnerability Scanning vs Vulnerability Assessment vs Penetration Test;
- black box, grey box, white box;
- scope;
- Rules of Engagement;
- autorizzazione;
- vincoli tecnici e organizzativi;
- PTES come riferimento metodologico.

### Lab

Simulazione di kickoff con un cliente: gli studenti devono raccogliere le informazioni necessarie prima di iniziare qualsiasi test.

### Output

Bozza di scope e Rules of Engagement.

---

## Modulo 2 — Fondamenti tecnici per il pentesting

### Concetti

- IP e porte;
- TCP/UDP a livello operativo;
- DNS;
- TLS essenziale;
- HTTP request/response;
- metodi HTTP;
- header;
- cookie e sessioni;
- autenticazione vs autorizzazione;
- frontend, API, backend e database.

### Lab

Analisi manuale di richieste HTTP con browser developer tools, `curl` e proxy.

### Output

Mappa del flusso di una richiesta applicativa.

---

## Modulo 3 — Reconnaissance ed Enumeration

### Concetti

- passive vs active reconnaissance;
- attack surface;
- host discovery;
- port scanning;
- service/version detection;
- DNS e sottodomini;
- fingerprinting tecnologico;
- qualità dell'informazione raccolta.

### Tool indicativi

- Nmap;
- `dig` / `nslookup`;
- browser;
- WHOIS e fonti OSINT dove appropriate;
- strumenti di content discovery in laboratorio.

### Lab

Partendo da poche informazioni, costruire una scheda degli asset e dei servizi osservati.

### Output

Attack surface inventory iniziale.

---

## Modulo 4 — Vulnerability Assessment

### Concetti

- scanner vs assessment;
- signature/version-based findings;
- falsi positivi e falsi negativi;
- CVE;
- severity;
- CVSS;
- prioritizzazione;
- validazione manuale.

### Lab

Eseguire uno scan su un ambiente controllato e validare manualmente un sottoinsieme dei risultati.

### Output

Tabella: finding scanner → evidenza → validato/non validato → motivazione.

---

## Modulo 5 — Web Pentesting I: osservare l'applicazione

### Concetti

- proxy di intercettazione;
- mappatura di funzionalità ed endpoint;
- parametri;
- input e output;
- autenticazione;
- session management;
- access control;
- differenza tra comportamento client-side e server-side.

### Tool indicativi

- Burp Suite Community e/o OWASP ZAP;
- browser developer tools;
- `curl`.

### Lab

Mappare una web application volutamente vulnerabile e produrre una lista ragionata di test da eseguire.

### Output

Application attack surface map.

---

## Modulo 6 — Web Pentesting II: input e injection

### Concetti

- input validation;
- output encoding;
- SQL Injection;
- Cross-Site Scripting;
- Command Injection;
- Path Traversal / File Inclusion come concetti;
- differenza tra payload dimostrativo e impatto.

### Lab

Challenge progressive su ambiente volutamente vulnerabile.

### Output

Almeno un finding completo con evidenza e remediation.

---

## Modulo 7 — Authentication, Authorization e API Security

### Concetti

- authentication flaws;
- authorization flaws;
- IDOR/BOLA;
- sessioni e token;
- JWT a livello operativo;
- API REST;
- object-level e function-level authorization;
- rate limiting;
- mass assignment e business logic, se coerenti con il livello della classe.

### Lab

Testare due identità diverse contro una API volutamente vulnerabile e verificare controlli di accesso.

### Output

Finding focalizzato su authorization o API security.

---

## Modulo 8 — Exploitation controllata

### Concetti

- exploitation come fase successiva alla validazione;
- prerequisiti;
- PoC vs weaponization;
- exploit pubblici e verifica delle condizioni;
- gestione dell'impatto;
- quando fermarsi.

### Tool indicativi

- exploit manuali in laboratorio;
- Metasploit, quando appropriato.

### Lab

Partire da una vulnerabilità già identificata e dimostrarne l'impatto in un ambiente isolato.

### Output

Evidence pack riproducibile.

---

## Modulo 9 — Post-Exploitation e privilege boundaries

### Concetti

- contesto utente;
- raccolta informazioni locale;
- privilege escalation come concetto;
- credential access;
- lateral movement e pivoting a livello metodologico;
- persistence e cleanup come concetti da comprendere nel contesto delle Rules of Engagement.

### Lab

Scenario controllato con accesso iniziale limitato e obiettivi espliciti.

### Output

Attack path documentato.

---

## Modulo 10 — Reporting professionale

### Concetti

- differenza tra nota tecnica e finding;
- executive summary;
- scope e metodologia;
- severity e rischio contestuale;
- evidenze;
- steps to reproduce;
- impatto;
- remediation;
- limiti dell'assessment;
- retest.

### Lab

Trasformare le evidenze raccolte nelle lezioni precedenti in finding leggibili e professionali.

### Output

Mini penetration test report.

---

## Modulo 11 — Pentesting nell'era dell'AI

### Concetti

- AI per analisi e automazione;
- supporto alla reconnaissance;
- spiegazione di codice e output;
- generazione di checklist;
- supporto al reporting;
- hallucination;
- CVE inesistenti o riferimenti errati;
- false positive;
- responsabilità del tester;
- agent e orchestrazione come evoluzione del tooling.

### Lab

Human vs AI-assisted workflow sullo stesso target, con penalizzazione di affermazioni non verificate.

### Output

Confronto tra risultati, errori e vantaggi dei due approcci.

---

## Modulo 12 — Capstone pubblico/formativo

Il capstone didattico deve essere distinto da eventuali prove d'esame riservate.

### Obiettivi

- integrare recon, testing, validazione e reporting;
- lavorare con pochi hint;
- gestire il tempo;
- presentare il rischio.

### Output

- scope interpretato correttamente;
- note operative;
- evidenze;
- report tecnico;
- executive summary;
- breve presentazione finale.

## Nota sugli esami

La progettazione e il materiale di un eventuale esame valutativo riservato **non fanno parte di questo file né della repository pubblica**.
