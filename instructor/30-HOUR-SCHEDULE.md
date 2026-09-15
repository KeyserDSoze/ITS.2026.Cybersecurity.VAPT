# Piano corso — 30 ore reali

Questo piano traduce il corso VAPT in **30 ore di calendario**, organizzate principalmente in incontri da 4 ore.

La convenzione di progettazione è volutamente conservativa:

```text
4 ore reali in aula
≈ 3 ore di contenuto/laboratorio pianificato
+ 30 minuti di pause
+ 30 minuti di elasticità
```

L'elasticità serve per:

- avvio dei PC e problemi tecnici;
- domande;
- studenti che procedono a velocità diverse;
- recupero di concetti non chiari;
- debrief più lunghi quando il laboratorio produce discussione utile.

Non va riempita in anticipo con altra teoria.

## Monte ore effettivo

Con 30 ore reali e questa regola, progettiamo circa **22,5 ore effettive** di attività didattica.

Una distribuzione pratica è:

```text
7 incontri × 4 ore = 28 ore
1 incontro × 2 ore =  2 ore
--------------------------------
Totale                 30 ore
```

Ore didattiche pianificate:

```text
7 incontri × 3 h   = 21 h
ultimo incontro    ≈ 1,5 h
-------------------------
contenuto pianificato = 22,5 h
```

Se il calendario ITS assegna comunque un ultimo slot completo da 4 ore, usare il tempo eccedente come buffer/capstone e non aggiungere nuovi argomenti.

# Struttura degli incontri

## Incontro 1 — Mindset, incarico e scope

**Moduli:** 00 + 01  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

### Obiettivi

- capire il livello iniziale della classe;
- introdurre facts vs hypotheses;
- distinguere VA e PT a livello operativo;
- far capire che scope e Rules of Engagement vengono prima dei tool;
- simulare il primo colloquio con il cliente.

### Distribuzione suggerita

```text
00:00–00:25  baseline / quiz di ingresso
00:25–00:55  facts, hypotheses, evidence
00:55–01:10  PAUSA
01:10–01:50  cos'è davvero un VAPT engagement
01:50–02:10  black / grey / white box + PTES come mappa
02:10–02:25  PAUSA
02:25–03:15  lab Client Kickoff
03:15–03:30  debrief e deliverable
03:30–04:00  buffer / domande / recupero
```

### Output

```text
FACTS / HYPOTHESES / QUESTIONS
Scope & Rules of Engagement
```

---

## Incontro 2 — Fondamentali tecnici + Reconnaissance

**Moduli:** 02 + 03  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

### Obiettivi

- collegare DNS → TCP → TLS → HTTP → applicazione;
- leggere una request senza trattarla come testo magico;
- distinguere host, hostname, porta, servizio e applicazione;
- costruire una prima attack surface.

### Distribuzione suggerita

```text
00:00–00:45  DNS, IP, porte, TCP/TLS
00:45–00:55  anatomia HTTP
00:55–01:10  PAUSA
01:10–01:45  request/response + sessione/auth
01:45–02:10  demo Follow the Request
02:10–02:25  PAUSA
02:25–03:05  recon/enumeration e Nmap ragionato
03:05–03:30  lab Build the Attack Surface
03:30–04:00  buffer / debrief
```

### Output

```text
Request Anatomy
Attack Surface Inventory
```

---

## Incontro 3 — Vulnerability Assessment + Web Mapping

**Moduli:** 04 + 05  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

### Obiettivi

- capire Scanner ≠ VA ≠ PT;
- introdurre CVE/CWE/CVSS solo nel contesto di un finding;
- validare alert e riconoscere falsi positivi;
- usare un proxy per mappare funzionalità e request;
- passare da UI a attack surface applicativa.

### Distribuzione suggerita

```text
00:00–00:35  scanner, assessment, CVE/CWE/CVSS
00:35–00:55  false positive / false negative
00:55–01:10  PAUSA
01:10–01:55  lab Scanner vs Human
01:55–02:10  debrief finding validato/scartato
02:10–02:25  PAUSA
02:25–02:55  proxy, request replay, ruoli e oggetti
02:55–03:30  lab Map Before You Attack
03:30–04:00  buffer
```

### Output

```text
Validation table
Application Attack Surface Map
```

---

## Incontro 4 — Input Handling & Injection

**Modulo:** 06  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

Questo modulo riceve un incontro quasi intero perché qui gli studenti devono imparare a passare da input → anomalia → ipotesi → evidenza, senza ridurre il lavoro a una lista di payload.

### Distribuzione suggerita

```text
00:00–00:35  trust boundary e input non fidato
00:35–00:55  contesti: SQL / HTML / shell / path
00:55–01:10  PAUSA
01:10–01:45  detection vs impact + esempio guidato
01:45–02:10  ragionamento su baseline e differenze
02:10–02:25  PAUSA
02:25–03:15  lab Input to Evidence
03:15–03:30  finding + remediation sulla causa
03:30–04:00  buffer / challenge
```

### Output

```text
INPUT
BASELINE
TEST
DIFFERENZA
CONFERMA
IMPATTO
REMEDIATION
```

---

## Incontro 5 — Authentication, Authorization & API Security

**Modulo:** 07  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

È uno dei moduli centrali del corso e non va compresso troppo.

### Distribuzione suggerita

```text
00:00–00:35  authentication vs session vs authorization
00:35–00:55  horizontal / vertical access control
00:55–01:10  PAUSA
01:10–01:40  REST API, object ID, ruoli, JWT operativo
01:40–02:10  esempio Two Users, One Object
02:10–02:25  PAUSA
02:25–03:15  lab authorization/API
03:15–03:30  finding + stop condition
03:30–04:00  buffer / challenge
```

### Output

```text
API map
Authorization test evidence
Finding access-control/API
```

---

## Incontro 6 — Exploitation, Post-Exploitation, Reporting e AI

**Moduli:** 08 + 09 + 10 + 11  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

Questo incontro è volutamente più denso. I moduli 08 e 09 vengono trattati soprattutto tramite i dossier simulati: l'obiettivo è insegnare **decisioni, prerequisiti, impatto e stop condition**, non fare una lunga sessione di tool.

Il reporting è già stato allenato durante tutto il corso, quindi qui viene formalizzato. Anche l'AI viene trattata come overlay del metodo già acquisito.

### Distribuzione suggerita

```text
00:00–00:30  08 — vulnerability vs exploit vs payload + decision gate
00:30–00:55  dossier: prerequisiti, PoC minima, stop condition
00:55–01:10  PAUSA
01:10–01:35  09 — security context e privilege boundary
01:35–01:55  dossier attack path + cleanup
01:55–02:10  reporting: da evidence a finding
02:10–02:25  PAUSA
02:25–02:55  10 — finding, severity, remediation, executive summary
02:55–03:20  11 — AI propone, umano verifica
03:20–03:30  briefing capstone
03:30–04:00  buffer / domande
```

### Output

```text
Exploitation decision sheet
Attack Path
Finding professionale
AI claim review
Capstone briefing compreso
```

### Cosa sacrificare se il tempo scarseggia

Non tagliare:

- stop condition;
- evidence;
- reporting;
- differenza verified/unverified nell'AI.

Tagliare prima:

- dettagli di sintassi Metasploit;
- tassonomia MITRE estesa;
- panoramiche lunghe sugli agent framework;
- ulteriori esempi di tool.

---

## Incontro 7 — Capstone UmbraMarket

**Modulo:** 12  
**Tempo reale:** 4 h  
**Tempo pianificato:** 3 h

Questa giornata va protetta. Non usarla per recuperare intere lezioni precedenti salvo necessità assoluta.

### Distribuzione suggerita

```text
00:00–00:15  briefing, scope, deliverable
00:15–00:55  planning + attack surface
00:55–01:10  PAUSA
01:10–02:10  testing / validation
02:10–02:25  PAUSA
02:25–03:05  evidence review + finding
03:05–03:30  report / executive summary
03:30–04:00  buffer o prosecuzione autonoma
```

### Regola docente

Durante il capstone non rispondere subito con hint tecnici.

Usare la scala:

```text
0 nessun hint
1 domanda sul metodo
2 rileggi una evidence
3 area/concetto
4 passaggio guidato
```

### Output

```text
Scope summary
Attack Surface Inventory
Structured Notes
Finding(s)
Evidence Pack
Executive Summary
```

---

## Incontro 8 — Chiusura, report e client presentation

**Modulo:** 12 + consolidamento 10  
**Tempo reale:** 2 h  
**Tempo pianificato:** circa 1,5 h

Questo incontro serve a chiudere il lavoro, non a introdurre nuovi argomenti.

### Distribuzione suggerita

```text
00:00–00:30  chiusura finding/report
00:30–00:50  evidence review finale
00:50–01:05  PAUSA
01:05–01:35  presentazioni cliente / peer review
01:35–01:50  debrief del corso
01:50–02:00  buffer
```

### Debrief finale

Riprendere la frase obiettivo del corso:

> Mi danno un target autorizzato che non conosco. So come partire, cosa osservare, formulare ipotesi, verificarle, documentare ciò che trovo e spiegare perché rappresenta un rischio.

Chiedere agli studenti di mostrare **dove** nel capstone hanno fatto ciascuno di questi passaggi.

# Priorità del corso

Con solo 22,5 ore didattiche pianificate, non tutto può avere lo stesso peso.

## Priorità A — da proteggere

```text
00 mindset
01 scope/RoE
02 HTTP/request anatomy
03 recon/enumeration
04 validation
05 web mapping
06 input handling
07 auth/API
10 reporting continuo
12 capstone
```

## Priorità B — importanti ma comprimibili

```text
08 controlled exploitation
09 post-exploitation
11 AI-assisted
```

## Priorità C — primi candidati al taglio

```text
liste di tool
flag avanzati dei programmi
molte CVE d'esempio
sintassi Metasploit estesa
MSFVenom come argomento autonomo
MITRE ATT&CK dettagliato
panoramiche prodotto AI troppo specifiche
```

# Formula standard per ogni incontro da 4 ore

Quando non serve una scansione diversa, usare questa forma:

```text
Blocco A   50 min
PAUSA      15 min
Blocco B   50 min
PAUSA      15 min
Blocco C   80 min
BUFFER     30 min
----------------
Totale    240 min
```

I 30 minuti finali di buffer possono essere distribuiti durante la giornata; non devono necessariamente essere una pausa finale.

# Regola di adattamento

Se una lezione va lunga, **non recuperare aumentando la velocità della teoria successiva**.

Tagliare invece in questo ordine:

```text
esempio extra
↓
challenge
↓
dettaglio tool
↓
seconda demo
```

Da proteggere sempre:

```text
concetto chiave
↓
esempio minimo
↓
attività dello studente
↓
debrief
```

Un modulo non è completato perché il docente ha finito le slide. È completato quando lo studente riesce a usare il concetto per prendere una decisione tecnica.
