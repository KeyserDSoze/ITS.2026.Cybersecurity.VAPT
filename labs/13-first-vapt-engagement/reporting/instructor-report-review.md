# Instructor Guide — Reviewing the Final VAPT Report

## Obiettivo

Mostrare che il lavoro non finisce quando “la vulnerabilità funziona”.

Il vero deliverable è:

```text
evidenza tecnica
→ conclusione verificabile
→ impatto comprensibile
→ remediation applicabile
→ retest riproducibile
```

Usare:

- `final-report-template.md`;
- `sample-client-report.md`;
- `evidence/`.

---

# 1. Prima mostrare le evidenze, non il report

Aprire nell'ordine:

```text
E-01
E-02
E-03
```

Chiedere:

> Se avessimo soltanto E-03, sapremmo davvero che l'ordine appartiene a Bob?

Questo fa emergere che l'evidenza non è solo “screenshot del risultato”: deve sostenere l'intera conclusione.

Costruire:

```text
E-01 = baseline Alice
E-02 = ownership Bob
E-03 = violazione cross-user
```

---

# 2. Far scrivere il finding prima di mostrare il modello

Ogni gruppo scrive:

```text
TITLE
SUMMARY
PRECONDITIONS
STEPS
EXPECTED
OBSERVED
IMPACT
NOT DEMONSTRATED
ROOT CAUSE
REMEDIATION
RETEST
```

Solo dopo aprire il sample report.

Confrontare frase per frase.

---

# 3. Titolo

Preferire:

> Customer can access another customer's order

a:

> IDOR vulnerability

Il primo comunica immediatamente il comportamento e l'impatto.

---

# 4. Steps to reproduce

Devono essere:

- sufficienti;
- minimali;
- ordinati;
- ripetibili da una persona autorizzata.

Non devono essere un diario di tutto ciò che è stato provato.

La riproduzione dovrebbe spiegare anche il baseline.

---

# 5. Expected vs Observed

Questa coppia è fondamentale.

```text
EXPECTED
Alice non può leggere l'ordine di Bob.

OBSERVED
Alice riceve HTTP 200 e i dati dell'ordine di Bob.
```

Se manca l'expected, spesso manca anche la spiegazione della regola di sicurezza violata.

---

# 6. Evidence

Far distinguere:

```text
RAW EVIDENCE
INTERPRETATION
CONCLUSION
```

Esempio:

```text
RAW:
HTTP 200 + JSON

INTERPRETATION:
la risposta contiene l'oggetto 1002

CORRELATION:
E-02 stabilisce che 1002 appartiene a Bob

CONCLUSION:
la sessione Alice ha accesso cross-user
```

---

# 7. Impact

Chiedere:

> Cosa abbiamo davvero dimostrato?

Corretto:

```text
Un customer può leggere un ordine appartenente
a un altro customer.
```

Non supportato:

```text
tutto il database è compromesso
tutti i clienti sono esposti
il server è compromesso
```

La sezione **Not demonstrated** serve apposta a proteggere la qualità del report.

---

# 8. Root cause vs symptom

Sintomo:

```text
cambiando 1001 in 1002 vedo un altro ordine
```

Root cause:

```text
il backend autentica l'utente ma non applica
l'ownership check sull'oggetto richiesto
```

La remediation deve agire sulla root cause.

---

# 9. Remediation

Rifiutare come soluzione principale:

```text
nascondere l'ID
rendere l'ID casuale
usare UUID
togliere il link dalla UI
```

La correzione è server-side authorization.

UUID può essere defense-in-depth, non la soluzione all'authorization failure.

---

# 10. Retest

Una remediation senza criterio di retest è incompleta.

Per F-01:

```text
Alice → Alice order = ALLOW
Alice → Bob order   = DENY
Bob   → Bob order   = ALLOW
```

Far scrivere esplicitamente PASS e FAIL.

---

# 11. False positive e non-finding

Mostrare la sezione scanner RCE.

Domanda:

> Perché non compare nella Findings Summary come Critical?

Risposta:

Perché un report professionale non ripete automaticamente la severity dello scanner.

La decisione è supportata da:

```text
nessun prerequisito confermato
nessuna primitive
nessun impatto
```

---

# 12. Limitations

Far leggere le limitations e chiedere:

> Sono una debolezza del report?

No.

Sono ciò che impedisce di far credere al cliente che sia stato testato più di quanto sia realmente accaduto.

---

# 13. Executive vs Technical

Leggere prima il finding tecnico.

Poi l'Executive Summary.

Far notare che l'executive:

- non contiene payload;
- non contiene cookie;
- non racconta ogni richiesta;
- comunica rischio, priorità e azione.

---

# 14. Evidence hygiene

Nel report cliente non devono comparire inutilmente:

- password;
- token/sessioni attive;
- dati reali non necessari;
- screenshot pieni di informazioni estranee;
- dump completi quando basta una riga;
- dati di altri clienti oltre la prova minima.

Nel laboratorio i dati sono fittizi, ma la disciplina deve essere quella reale.

---

# 15. Esercizio di revisione

Assegnare a ogni gruppo un colore o simbolo:

```text
F = FACT
I = INTERPRETATION
E = EVIDENCE REFERENCE
C = CONCLUSION
R = RECOMMENDATION
O = OVERCLAIM
```

Far annotare un finding del sample report.

Poi chiedere di identificare:

1. una frase che nasce direttamente da evidenza;
2. una frase di interpretazione;
3. una limitazione;
4. una remediation;
5. una frase che sarebbe diventata overclaim se formulata più forte.

---

# 16. Chiusura

Scrivere:

```text
UN PENTEST NON FINISCE CON:

"FUNZIONA"

FINISCE CON:

"QUESTO È CIÒ CHE ABBIAMO DIMOSTRATO,
QUESTA È L'EVIDENZA,
QUESTO È L'IMPATTO,
QUESTA È LA CAUSA,
QUESTO È COME CORREGGERLO,
QUESTO È COME VERIFICARE LA CORREZIONE."
```
