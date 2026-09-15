# Teaching Methodology

## Obiettivo

La metodologia del corso è progettata per evitare due estremi:

- una lezione eccessivamente teorica, in cui gli studenti conoscono termini ma non sanno affrontare un target;
- una lezione eccessivamente tool-driven, in cui gli studenti replicano comandi senza comprendere perché funzionino.

Il principio guida è: **prima il ragionamento, poi il tool**.

## Ciclo didattico di ogni argomento

Per ogni tecnica o famiglia di vulnerabilità, usare quando possibile questo schema:

### 1. Contesto

Presentare il comportamento corretto del sistema e l'assunzione di sicurezza che dovrebbe essere rispettata.

### 2. Osservazione

Mostrare come raccogliere dati utili senza saltare immediatamente all'exploit.

### 3. Ipotesi

Chiedere agli studenti quale comportamento anomalo potrebbe indicare una vulnerabilità.

### 4. Verifica manuale

Verificare l'ipotesi con il minimo numero di azioni necessarie.

### 5. Automazione

Solo dopo la comprensione manuale introdurre scanner o tool che possano accelerare il processo.

### 6. Impatto

Chiedere: "Cosa cambia realmente se questa vulnerabilità è sfruttabile?"

### 7. Evidenza

Salvare richiesta, risposta, screenshot o output necessari a dimostrare il finding in modo riproducibile.

### 8. Remediation

Collegare il difetto osservato alla correzione tecnica e, quando utile, al controllo preventivo.

## Laboratori a tre livelli

Ogni laboratorio dovrebbe prevedere tre livelli.

### CORE

Obiettivo raggiungibile dallo studente che segue la lezione e applica correttamente quanto visto.

Il CORE deve verificare la comprensione del concetto centrale e non la capacità di indovinare un trucco.

### CHALLENGE

Estensione che richiede collegare più concetti, fare enumeration aggiuntiva o trovare una variante non mostrata nella demo.

### HARD MODE

Obiettivo descritto con pochissimi suggerimenti. È rivolto agli studenti che terminano velocemente e vogliono lavorare in maggiore autonomia.

L'esistenza dei tre livelli evita di rallentare l'intera classe sul ritmo minimo e consente agli studenti più motivati di continuare a crescere.

## Regola "evidence first"

Ogni finding deve essere accompagnato almeno da:

- asset interessato;
- prerequisiti;
- passaggi di riproduzione;
- evidenza tecnica;
- impatto;
- proposta di remediation.

Gli studenti devono abituarsi a raccogliere le evidenze mentre lavorano, non a ricostruirle a fine corso.

## Demo del docente

Una demo efficace non dovrebbe essere una sequenza silenziosa di comandi. Il docente esplicita:

- che cosa sa in quel momento;
- che cosa non sa;
- perché sceglie quel test;
- quale risultato si aspetta;
- come cambia il piano in base al risultato.

Il valore principale della demo è rendere visibile il processo mentale.

## Errori come materiale didattico

Quando un test non produce il risultato atteso, evitare di nascondere immediatamente l'errore. Usarlo per mostrare:

- come si distingue un'ipotesi da un fatto;
- come si legge un errore;
- come si cambia tecnica;
- come si evita di forzare una conclusione perché "il tool ha detto così".

## Tooling

I tool vengono introdotti per rispondere a una necessità concreta. Esempi:

- `curl` per osservare e riprodurre richieste;
- Nmap per enumeration di host e servizi;
- Burp Suite o OWASP ZAP per analisi del traffico web;
- scanner di vulnerabilità per discutere copertura, falsi positivi e validazione;
- Metasploit quando è già chiaro quale vulnerabilità si vuole verificare;
- AI per accelerare analisi, ricerca e documentazione, sempre con verifica umana.

## Utilizzo dell'AI

L'AI può essere consentita in molte attività formative, ma lo studente rimane responsabile di ciò che presenta come vero.

Una risposta generata da un modello non è un'evidenza. CVE, payload, remediation e conclusioni devono essere verificati.

Un esercizio utile consiste nel penalizzare esplicitamente i falsi positivi o le affermazioni non dimostrate, anche quando provengono da un assistente AI.

## Discussione finale del laboratorio

Al termine di un laboratorio, la review dovrebbe concentrarsi su domande come:

- Qual è stata la prima informazione veramente utile?
- Quale ipotesi si è rivelata sbagliata?
- Quale test ha dato evidenza sufficiente?
- Avremmo potuto ottenere la stessa prova con meno impatto?
- Come scriveremmo il finding per uno sviluppatore?
- Come spiegheremmo lo stesso rischio a un manager?

## Sicurezza e autorizzazione

Qualunque attività offensiva deve restare dentro il laboratorio e lo scope esplicitamente autorizzato. Questo vincolo non è una nota legale separata dal corso: fa parte del mestiere e deve essere richiamato durante le attività pratiche.
