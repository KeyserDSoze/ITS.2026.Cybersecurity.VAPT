# UmbraMarket — Guida alla rilettura della lezione

> Materiale da conservare dopo il laboratorio. Tutti i sistemi, utenti, dati e situazioni descritti sono fittizi e appartengono all'ambiente didattico.

## A cosa serve questa guida

Questa non è una soluzione da imparare a memoria.

Serve a ricostruire il ragionamento fatto durante la lezione e a ricordare **come si affronta un VAPT**, non quali comandi digitare.

Il filo della giornata è stato:

~~~text
CAPIRE IL CLIENTE
      ↓
CAPIRE LO SCOPE
      ↓
COSTRUIRE LA SUPERFICIE DI ATTACCO
      ↓
FORMULARE IPOTESI
      ↓
SCEGLIERE COSA VALE LA PENA VERIFICARE
      ↓
FARE RECON E VA
      ↓
VALIDARE MANUALMENTE
      ↓
DIMOSTRARE L'IMPATTO MINIMO NECESSARIO
      ↓
RACCOGLIERE EVIDENZE
      ↓
SCRIVERE IL REPORT
      ↓
PROPORRE REMEDIATION E RETEST
~~~

La parte più importante non è il singolo tool. È la qualità delle decisioni prese tra un passaggio e il successivo.

---

# 1. Un VAPT non comincia dalla scansione

Quando un cliente chiede un penetration test, la prima domanda non dovrebbe essere “che scanner usiamo?”.

Prima dobbiamo capire cosa fa l'azienda, quali sistemi sostengono il business, quali dati contano, chi usa i sistemi, quali processi esistono, quali asset possiamo testare e quale problema vuole realmente risolvere il cliente.

In UmbraMarket abbiamo quindi iniziato dalle informazioni sull'organizzazione, non dal sito.

Una superficie di attacco può comprendere:

~~~text
tecnologia
persone
identità
processi
spazi
fornitori
informazioni
abitudini
tempo
~~~

Una porta TCP è solamente una parte del sistema.

---

# 2. Non tutte le informazioni sono uguali

Durante un assessment possiamo ricevere informazioni in modi diversi.

## OBSERVED

L'abbiamo osservata direttamente.

Esempio:

~~~text
Durante la visita erano presenti fogli
nel vassoio della stampante.
~~~

## REPORTED

Qualcuno ce l'ha raccontata.

~~~text
"L'IT disabilita gli account nella stessa giornata."
~~~

## INFERRED

È una nostra interpretazione.

~~~text
Forse il processo di offboarding può avere ritardi.
~~~

## UNKNOWN

Non abbiamo abbastanza informazioni.

La distinzione è fondamentale:

~~~text
REPORTED ≠ VERIFIED
INFERRED ≠ FACT
~~~

Un buon assessment e un buon report non confondono questi livelli.

---

# 3. Dall'informazione alla domanda

Durante la discovery non dobbiamo trasformare immediatamente ogni dettaglio in un attacco.

Esempio:

~~~text
INFORMAZIONE
La postazione del magazzino viene usata da più persone.
~~~

Conclusione sbagliata:

~~~text
Usano tutti la stessa password.
~~~

Non lo sappiamo.

La domanda migliore è:

~~~text
Usano la stessa macchina
oppure anche lo stesso account?
~~~

Quindi il percorso corretto è:

~~~text
INFORMAZIONE
      ↓
DOMANDA
      ↓
NUOVA INFORMAZIONE
      ↓
IPOTESI
~~~

Questo evita di costruire un assessment basato su supposizioni.

---

# 4. Pensare alla superficie di attacco

Durante una pausa alcune persone si trovano sul retro dell'edificio.

Da solo questo fatto non è una vulnerabilità.

Possiamo però chiederci:

~~~text
chi frequenta quell'area?
quando?
quali ingressi sono vicini?
quali attività avvengono lì?
quali controlli esistono?
~~~

La stessa osservazione può generare diverse ipotesi.

Ma:

~~~text
IPOTESI POSSIBILE
≠
ATTACCO DA ESEGUIRE
~~~

Potrebbe essere fuori scope, richiedere troppo tempo, essere troppo invasiva, essere fermata da un controllo oppure avere meno valore di un test molto più semplice.

---

# 5. Possibile, plausibile, autorizzato, conveniente

Una delle idee più importanti della lezione è:

~~~text
POSSIBILE
≠
PLAUSIBILE
≠
AUTORIZZATO
≠
CONVENIENTE
≠
DIMOSTRATO
~~~

Un penetration tester non sceglie necessariamente l'idea più creativa.

Deve valutare:

~~~text
tempo
costo
rischio
scope
obiettivo
valore dell'evidenza
~~~

Per questo anche decidere di NON testare una strada può essere una buona decisione professionale.

---

# 6. I controlli cambiano il nostro modello

UmbraMarket non è stata descritta come un'azienda senza difese.

Abbiamo incontrato anche controlli dichiarati come MFA, EDR, segmentazione guest, account individuali, procedure per visitatori, distruzione documentale e blocco automatico delle postazioni.

La presenza di un controllo non dimostra che funzioni.

L'assenza di una verifica non dimostra che non esista.

Per ogni ipotesi chiediamoci:

~~~text
Quale controllo dovrebbe impedirla?
Il controllo esiste?
È applicato?
È configurato correttamente?
Funziona nel caso che stiamo valutando?
~~~

---

# 7. Il tempo fa parte della superficie di attacco

Un comportamento può essere interessante soltanto in una determinata finestra.

Nel nostro scenario esistono ritmi diversi per consegne, riunioni, pause, presenze in sede e attività dei reparti.

Ma l'engagement ha una finestra precisa.

Quindi una buona domanda è:

> Questa ipotesi è verificabile nel tempo che abbiamo?

Il tempo non è soltanto una limitazione. Può essere parte stessa della superficie di attacco.

---

# 8. Reconnaissance non significa vulnerabilità

Quando siamo passati al target tecnico abbiamo osservato servizi sulle porte autorizzate.

Questa è attack surface.

Non significa:

~~~text
porta aperta = vulnerabilità
/admin = admin bypass
ID numerico = IDOR
versione software = exploitability
~~~

Recon ed enumeration rispondono soprattutto:

> Cosa esiste e come funziona?

---

# 9. Vulnerability Assessment: trovare candidati

Uno scanner può produrre risultati con severity elevate.

Il punto fondamentale è:

~~~text
SCANNER FINDING
=
CANDIDATE FINDING
~~~

non ancora:

~~~text
CONFIRMED VULNERABILITY
~~~

Per ogni alert dobbiamo chiederci:

~~~text
Qual è l'evidenza?
Quale assunzione sta facendo il tool?
Quali prerequisiti devono essere veri?
Come potrei verificarlo?
Quale impatto potrei realmente dimostrare?
~~~

---

# 10. Anche un risultato negativo è utile

Nel laboratorio lo scanner suggeriva una possibile Remote Code Execution basandosi su un fingerprint di versione.

Ma una versione apparentemente interessante non dimostra:

~~~text
vulnerable configuration
exploitability
working primitive
impact
~~~

Il risultato finale può quindi essere:

~~~text
NOT DEMONSTRATED
~~~

Questo è un buon risultato: abbiamo evitato di consegnare al cliente una conclusione non supportata.

---

# 11. Prima del test: costruire la baseline

Per verificare l'authorization sugli ordini abbiamo prima osservato il comportamento normale.

~~~text
Alice → proprio ordine
Bob   → proprio ordine
~~~

Questa è la baseline.

Prima di riconoscere un'anomalia dobbiamo sapere quale dovrebbe essere il comportamento corretto.

---

# 12. Dal candidato BOLA al finding confermato

L'endpoint osservato era:

~~~text
/api/orders/{id}
~~~

Gli ID numerici hanno fatto nascere un'ipotesi, non una conclusione.

## Fatto

L'API accetta un identificatore di ordine.

## Ipotesi

Forse il server controlla che l'utente sia autenticato ma non controlla che l'ordine appartenga a lui.

## Test minimo

Usare la sessione di Alice per richiedere un ordine già stabilito come appartenente a Bob.

~~~text
Alice session
     ↓
GET /api/orders/1002
~~~

## Expected

~~~text
DENY
~~~

## Observed

~~~text
HTTP 200
+
ordine Bob
~~~

A quel punto abbiamo evidenza di una violazione di authorization.

---

# 13. Perché fermarsi

Dopo la prima risposta cross-user positiva avremmo potuto provare molti altri identificatori.

Non serviva.

Avevamo già dimostrato:

~~~text
utente A
→ oggetto appartenente a utente B
→ accesso consentito
~~~

La regola è:

~~~text
PROOF ≠ MAXIMUM DAMAGE
~~~

Una PoC professionale cerca la prova necessaria, non il massimo danno possibile.

---

# 14. Cosa possiamo affermare davvero

Dopo il test possiamo dire:

> Un cliente autenticato può leggere un ordine appartenente a un altro cliente.

Non possiamo automaticamente dire:

> Tutti gli ordini sono accessibili.

Non lo abbiamo testato.

Non possiamo dire:

> Il database è compromesso.

Non lo abbiamo dimostrato.

Non possiamo dire:

> Il server è compromesso.

Non lo abbiamo dimostrato.

Questa disciplina evita l'overclaim.

---

# 15. Authentication e Authorization

Sono concetti diversi.

~~~text
AUTHENTICATION
"Chi sei?"
~~~

~~~text
AUTHORIZATION
"Puoi fare questa cosa
su questo oggetto o funzione?"
~~~

Nel caso degli ordini il server sapeva chi fosse Alice, ma non controllava correttamente se Alice potesse leggere l'ordine richiesto.

Abbiamo visto anche due tipi di confine:

~~~text
HORIZONTAL
customer Alice → oggetto customer Bob

VERTICAL
customer → funzione admin
~~~

---

# 16. Le evidenze devono costruire una storia

Per il finding principale abbiamo raccolto:

~~~text
E-01
Alice → ordine Alice

E-02
Bob → ordine Bob

E-03
Alice → ordine Bob
~~~

Perché non basta E-03?

Perché E-02 ci aiuta a stabilire che l'oggetto 1002 è effettivamente associato a Bob.

Quindi:

~~~text
EVIDENCE
+
CONTEXT
+
CORRELATION
=
SUPPORTED CONCLUSION
~~~

Una buona evidenza dovrebbe essere minimale, chiara, pertinente, riproducibile e collegata a una conclusione precisa.

---

# 17. Il report è parte del penetration test

Il penetration test non finisce quando diciamo:

> “Ha funzionato.”

Dobbiamo trasformare il risultato in qualcosa che il cliente possa usare.

~~~text
TEST
  ↓
EVIDENZA
  ↓
CONCLUSIONE
  ↓
IMPATTO
  ↓
ROOT CAUSE
  ↓
REMEDIATION
  ↓
RETEST
  ↓
COMUNICAZIONE
~~~

---

# 18. Come è composto un finding

Un finding professionale deve permettere a un'altra persona autorizzata di capire cosa è successo e rifare la verifica.

## Title

Descrive il comportamento.

Meglio:

> Customer can access another customer's order

che soltanto:

> IDOR

## Asset

Dove si verifica?

## Summary

Qual è il problema?

## Preconditions

Cosa serve prima del test?

## Steps to reproduce

Come è stata eseguita la verifica?

## Expected

Cosa avrebbe dovuto succedere?

## Observed

Cosa è successo realmente?

## Evidence

Quali prove sostengono la conclusione?

## Demonstrated impact

Che cosa abbiamo realmente dimostrato?

## Not demonstrated

Quali conclusioni non possiamo sostenere?

## Root cause

Perché succede?

## Remediation

Come si corregge la causa?

## Retest

Come verifichiamo che la correzione funzioni?

---

# 19. Root cause e sintomo

Nel nostro esempio:

~~~text
SINTOMO

Cambio 1001 in 1002
e vedo un altro ordine.
~~~

~~~text
ROOT CAUSE

Il backend autentica l'utente
ma non verifica l'ownership
dell'ordine richiesto.
~~~

Una remediation deve agire sulla root cause.

Per questo nascondere l'ID, usare un UUID o togliere il link dall'interfaccia non sostituisce il controllo server-side.

---

# 20. Il retest fa parte della remediation

Dire “aggiungete un controllo” non basta.

Dobbiamo sapere come verificare la correzione.

~~~text
Alice → ordine Alice = ALLOW
Alice → ordine Bob   = DENY
Bob   → ordine Bob   = ALLOW
~~~

PASS significa che la richiesta cross-user viene negata senza restituire dati protetti.

FAIL significa che il confine di authorization continua a essere violato.

---

# 21. Le limitations rendono il report più corretto

Nel report dichiariamo ciò che non è stato testato, per esempio social engineering reale, physical testing, DoS, bulk enumeration, persistence o modifiche distruttive.

Questo impedisce una lettura sbagliata del tipo:

> “Non avete trovato altro, quindi non esiste altro.”

Un assessment ha sempre:

~~~text
scope
tempo
metodologia
vincoli
~~~

Le conclusioni valgono all'interno di questi limiti.

---

# 22. Executive e Technical non sono la stessa cosa

Il team tecnico ha bisogno di dettagli come endpoint, request, response, root cause e retest.

Un manager ha bisogno soprattutto di capire:

~~~text
cosa è successo
perché conta
quanto è urgente
cosa dobbiamo fare
~~~

Il contenuto deve essere coerente. Cambia il livello di dettaglio.

---

# 23. Il percorso completo UmbraMarket

Alla fine abbiamo attraversato tutto il ciclo:

~~~text
CLIENTE
  ↓
OBIETTIVI
  ↓
SCOPE
  ↓
DISCOVERY ORGANIZZATIVA
  ↓
FATTI / DICHIARAZIONI / DOMANDE
  ↓
ATTACK SURFACE
  ↓
IPOTESI
  ↓
PRIORITIZZAZIONE
  ↓
RECON TECNICO
  ↓
VA
  ↓
CANDIDATE FINDINGS
  ↓
MANUAL VALIDATION
  ↓
CONTROLLED PT
  ↓
EVIDENZE
  ↓
FINDING
  ↓
REMEDIATION
  ↓
RETEST
  ↓
FINAL REPORT
~~~

Questo è il filo da ricordare.

---

# 24. Le domande da portarsi dietro

Quando analizzi qualcosa, torna sempre a queste domande:

~~~text
Cosa vedo?

È un fatto, una dichiarazione o una mia inferenza?

Cosa significa?

Cosa non so ancora?

Quale ipotesi posso formulare?

Quali prerequisiti richiede?

Quale controllo dovrebbe impedirla?

È nello scope?

Vale la pena verificarla?

Qual è il test minimo?

Cosa mi aspetto?

Cosa ho osservato?

Cosa posso affermare davvero?

Cosa NON posso affermare?

Qual è l'impatto?

Qual è la causa?

Come la correggo?

Come verifico la correzione?

Posso fermarmi?
~~~

Se riesci a rispondere bene a queste domande, il tool utilizzato diventa secondario.

---

# 25. Ripasso rapido — 5 minuti

Se devi riprendere la lezione velocemente:

~~~text
1. Capisco il cliente.
2. Definisco scope e limiti.
3. Raccolgo fatti prima di immaginare attacchi.
4. Costruisco la superficie di attacco.
5. Formulo ipotesi.
6. Scelgo cosa vale la pena verificare.
7. Uso recon e VA per trovare candidati.
8. Valido manualmente.
9. Dimostro il minimo impatto necessario.
10. Raccolgo evidenze riproducibili.
11. Evito overclaim.
12. Scrivo remediation e retest.
13. Comunico tutto in un report utile al cliente.
~~~

---

# 26. Una frase da ricordare

> Un penetration tester non dimostra quanto riesce a rompere. Dimostra, con il minimo impatto necessario, quali assunzioni di sicurezza non reggono e fornisce al cliente evidenze sufficienti per correggerle.

---

# 27. Materiale collegato

Nel laboratorio trovi:

~~~text
discovery/
    informazioni progressive sul cliente

assessment-decision-board.md
    prioritizzazione delle ipotesi

student-workbook.md
    foglio di lavoro

artifacts/01-scanner-output.txt
    vulnerability assessment simulato

reporting/evidence/
    evidenze del PT

reporting/final-report-template.md
    template da compilare

reporting/sample-client-report.md
    report cliente completo di esempio
~~~

Quando rivedi il laboratorio, prova prima a ricostruire da solo:

~~~text
evidenza
→ conclusione
→ impatto
→ remediation
→ retest
~~~

e solo dopo confrontalo con il report di esempio.
