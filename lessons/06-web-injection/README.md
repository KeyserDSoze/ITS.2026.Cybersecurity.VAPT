# 06 — Web Injection & Input Handling

## Missione di oggi

Hai mappato UmbraMarket e sai dove entrano dati controllati dall'utente. Oggi impari a capire **quando un input modifica il comportamento dell'interprete che lo elabora**.

Il punto non è memorizzare payload: è riconoscere contesto, comportamento atteso, anomalia ed evidenza.

## Prima di iniziare — test rapido

Il pre-test ti chiede di distinguere dati, codice, output encoding e tipi di injection. Non serve conoscere payload specifici.

## Cosa imparerai

- capire perché input non fidato può diventare pericoloso;
- distinguere SQL injection, XSS, command injection e path traversal a livello operativo;
- progettare test minimi e controllati;
- riconoscere il contesto in cui l'input viene interpretato;
- collegare causa, impatto e remediation.

## 1. Input non fidato

Ogni dato proveniente dall'utente va trattato come non fidato finché non viene validato e gestito correttamente.

Esempi:

- query string;
- path parameter;
- form;
- JSON body;
- header;
- cookie;
- nome file.

Il problema nasce quando quel dato finisce in un interprete con un significato che lo sviluppatore non aveva previsto.

## 2. Il metodo comune

Useremo sempre questo schema:

```text
Input controllabile
   ↓
Comportamento atteso
   ↓
Test minimo
   ↓
Differenza osservabile
   ↓
Conferma controllata
   ↓
Impatto
   ↓
Remediation
```

La domanda iniziale non è "quale payload provo?", ma:

> "Dove finisce questo input e quale sistema lo interpreta?"

## 3. SQL Injection

Scenario concettuale vulnerabile:

```text
query = "SELECT ... WHERE id = '" + input + "'"
```

Il problema è la costruzione dinamica della query con input non separato dal codice SQL.

### Cosa osservare

- errori SQL;
- differenze di risposta a input equivalenti/non equivalenti;
- variazioni controllate nel risultato;
- comportamento anomalo coerente con l'interpretazione SQL.

### Remediation

La difesa principale è usare query parametrizzate/prepared statements e corretta validazione, non creare blacklist di stringhe "cattive".

## 4. Cross-Site Scripting

XSS si verifica quando input controllato dall'utente viene inserito in un contesto HTML/JavaScript senza corretta gestione e il browser lo interpreta come codice attivo.

Il contesto conta:

```text
HTML text
HTML attribute
JavaScript string
URL
```

Una stringa che produce un effetto in un contesto può essere innocua in un altro.

### Remediation

Output encoding contestuale, templating sicuro e policy complementari come CSP.

## 5. Command Injection

Il rischio nasce quando input dell'utente viene concatenato a un comando di sistema.

Esempio concettuale:

```text
system("ping " + host)
```

Il test deve essere minimo e non distruttivo nel laboratorio. L'obiettivo è dimostrare che l'input può alterare il comando, non causare danno.

### Remediation

Evitare la shell quando possibile, usare API sicure, allowlist robuste e separazione degli argomenti.

## 6. Path Traversal / File Inclusion

Se un'applicazione usa input utente per costruire percorsi file, il tester si chiede:

- il percorso è normalizzato?
- l'utente può uscire dalla directory prevista?
- esiste una allowlist delle risorse?

Anche qui si cerca una prova minima nel target didattico.

## 7. Detection vs impact

Un **detection test** cerca un segnale del problema.

Una **proof of impact** dimostra una conseguenza concreta.

Non sempre devi passare alla seconda fase. Se la RoE o il rischio operativo suggeriscono di fermarti, l'evidenza di detection può essere sufficiente.

## Esempio svolto — ragionare su un parametro

Request:

```http
GET /products?category=chairs HTTP/1.1
```

Prima annoti:

```text
Input: category
Atteso: valore usato per filtrare prodotti
Ipotesi: il backend potrebbe inserirlo in una query
Test: variazioni minime e controllate
Evidenza cercata: differenza coerente e riproducibile
```

Solo dopo scegli il test appropriato per il contesto del laboratorio.

## Errore da principiante

> "Ho incollato dieci payload presi online e uno ha generato 500, quindi è SQL injection."

Un errore 500 dimostra solo che hai provocato un errore. Devi collegare comportamento, contesto e causa.

## Laboratorio — Input to Evidence

### GUIDED

Il docente indica un input del target volutamente vulnerabile.

1. registra la request baseline;
2. descrivi il comportamento atteso;
3. modifica l'input con un test innocuo/minimo indicato;
4. confronta request e response;
5. ripeti per verificare che l'effetto sia riproducibile;
6. classifica l'ipotesi;
7. documenta impatto minimo e remediation.

Scheda:

```text
INPUT
CONTESTO IPOTIZZATO
BASELINE
TEST
DIFFERENZA
CONFERMA
IMPATTO
REMEDIATION
```

### Se sei bloccato

**Hint 1:** torna alla baseline: sai esattamente cosa dovrebbe succedere?

**Hint 2:** cerca una differenza piccola ma riproducibile, non un effetto spettacolare.

### INDEPENDENT

Scegli un secondo input già mappato e determina quale famiglia di test ha senso applicare, spiegando la scelta prima di eseguirla.

### CHALLENGE

Trova un caso in cui un test non funziona perché il contesto è diverso da quello ipotizzato. Spiega come l'evidenza ti ha fatto cambiare strategia.

## Deliverable professionale

Un finding completo con:

- input vulnerabile;
- baseline;
- test minimo;
- evidenza;
- impatto;
- causa;
- remediation.

## Prima di chiudere

Dovresti riuscire a spiegare:

- perché una lista di payload non è una metodologia;
- perché il contesto determina il test;
- differenza tra detection e impact;
- perché la remediation deve eliminare la causa, non solo bloccare una stringa.

Completa l'autoverifica finale.