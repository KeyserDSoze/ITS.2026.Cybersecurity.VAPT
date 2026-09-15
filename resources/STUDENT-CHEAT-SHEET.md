# VAPT — Cheat Sheet di ragionamento

Questa pagina non è una lista di payload o comandi da copiare. È un promemoria per non perdere il filo durante un assessment.

## 1. Prima di testare

```text
SCOPE     → dove possiamo testare?
RoE       → come possiamo testare?
STOP      → quando dobbiamo fermarci?
OUTPUT    → cosa dobbiamo documentare?
```

Un asset scoperto non diventa automaticamente autorizzato.

## 2. Il nostro ciclo mentale

```text
OSSERVAZIONE
    ↓
IPOTESI
    ↓
TEST MINIMO
    ↓
EVIDENZA
    ↓
CONCLUSIONE
    ↓
IMPATTO / FINDING?
```

Domande utili:

- Che cosa so davvero?
- Come lo so?
- Che cosa sto inferendo?
- Quale risultato mi aspetterei se la mia ipotesi fosse corretta?
- Quale test separa due spiegazioni possibili?
- Ho abbastanza evidenza per scrivere un finding?

## 3. HTTP in 30 secondi

Request:

```http
GET /api/orders/1001 HTTP/1.1
Host: shop.umbramarket.lab
Cookie: session=...
Accept: application/json
```

Guardiamo almeno:

- metodo;
- path / endpoint;
- hostname;
- query e parametri;
- header;
- cookie / token;
- body;
- oggetto coinvolto;
- ruolo dell'utente.

Response:

- status code;
- header;
- body;
- differenza rispetto alla baseline;
- eventuale nuovo identificatore o hostname.

`200 OK` non significa automaticamente “sicuro” o “autorizzato”.

## 4. Recon → Attack Surface

Non collezioniamo output: costruiamo una mappa.

| Asset / hostname | Porta | Servizio / contenuto | Come lo sappiamo? | Stato | Next test |
|---|---:|---|---|---|---|
| | | | | OBSERVED / INFERRED / UNVERIFIED | |

Ricordiamo:

```text
hostname → DNS → IP → porta → servizio → contenuto → ipotesi → test
```

## 5. Scanner output

Uno scanner produce **segnali e ipotesi**, non automaticamente finding.

Per ogni alert chiediamoci:

1. qual è l'evidenza?
2. quali prerequisiti servono?
3. sono presenti nel nostro target?
4. possiamo riprodurre il comportamento?
5. qual è l'impatto nel nostro contesto?

Possibili conclusioni:

```text
CONFIRMED
PLAUSIBLE / NEEDS EVIDENCE
NOT APPLICABLE
FALSE POSITIVE
OUT OF SCOPE
```

## 6. Web / API mapping

Per ogni funzione interessante annotiamo:

```text
azione utente
→ request
→ endpoint
→ input
→ oggetto
→ identità/sessione
→ decisione di authorization
→ effetto
```

Prima mappiamo il comportamento normale. Poi modifichiamo una variabile per volta.

## 7. Authentication ≠ Session ≠ Authorization

```text
AUTHENTICATION  → chi siamo?
SESSION         → come il server ricorda chi siamo?
AUTHORIZATION   → possiamo fare questa azione su questo oggetto?
```

Per testare authorization, confrontiamo:

```text
IDENTITÀ × AZIONE × OGGETTO × EXPECTED × OBSERVED
```

Own-object prima. Cross-user dopo. Una prova minima può bastare.

## 8. Input handling

Prima del payload chiediamoci:

```text
SOURCE → TRANSFORMATION → SINK / INTERPRETER → CONTROL
```

Metodo:

```text
baseline
→ una variazione
→ differenza
→ ipotesi alternativa
→ conferma controllata
→ impatto minimo
→ stop
```

Un errore `500` è un segnale, non la prova automatica di una injection.

## 9. Controlled exploitation

Prima di una PoC:

- finding già abbastanza supportato?
- exploitation consentita dalle RoE?
- prerequisiti verificati?
- che nuova informazione vogliamo ottenere?
- qual è la stop condition?
- possiamo dimostrare l'impatto con meno rischio?

L'obiettivo non è “ottenere una shell”. L'obiettivo è produrre evidence utile e proporzionata.

## 10. Evidence notebook

Per ogni passaggio importante:

| Campo | Nota |
|---|---|
| Fact | cosa abbiamo osservato |
| Evidence | request, response, output, screenshot, file |
| Hypothesis | spiegazione da verificare |
| Test | cosa facciamo dopo |
| Expected | cosa ci aspettiamo |
| Observed | cosa è successo davvero |
| Conclusion | cosa possiamo affermare adesso |

## 11. Finding minimo

Un finding utile dovrebbe rispondere a:

```text
CHE PROBLEMA È?
DOVE SI TROVA?
COME LO ABBIAMO VERIFICATO?
CHE IMPATTO PRODUCE?
PERCHÉ SUCCEDE?
COME SI CORREGGE ALLA RADICE?
```

La forza del linguaggio deve essere proporzionata alla forza dell'evidenza.

Meglio:

> Un utente autenticato può leggere un ordine appartenente a un altro utente modificando l'identificatore dell'ordine.

che una conclusione più ampia di ciò che abbiamo realmente dimostrato.

## 12. AI

L'AI può aiutarci a:

- riordinare note;
- proporre ipotesi;
- confrontare alternative;
- migliorare chiarezza del report;
- suggerire verifiche.

Ma:

```text
AI OUTPUT ≠ EVIDENCE
```

Classifichiamo sempre le sue affermazioni:

```text
VERIFIED
PLAUSIBLE BUT UNVERIFIED
WRONG / HALLUCINATED
```

Quando una decisione conta, torniamo alla fonte primaria e al target.

## 13. Se siamo bloccati

Non chiediamoci subito “che tool uso?”. Chiediamoci:

1. qual è la mia domanda?
2. che cosa so già?
3. quale informazione mi manca?
4. quale test minimo può darmela?
5. che output mi aspetto?

Il tool arriva dopo la domanda.
