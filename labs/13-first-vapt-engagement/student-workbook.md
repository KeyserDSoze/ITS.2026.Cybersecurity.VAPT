# Student Workbook — First VAPT Engagement

## 1. Scope check

Scrivi in una frase cosa puoi testare e cosa non puoi testare.

## 2. Attack Surface Inventory

| Asset | Porta / path | Osservazione | OBSERVED / INFERRED | Prossima domanda |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

## 3. Scanner triage

| ID | Prima impressione | Verifica necessaria | Stato finale |
|---|---|---|---|
| S-001 | | | |
| S-002 | | | |
| S-003 | | | |
| S-004 | | | |
| S-005 | | | |

Stati suggeriti:

```text
UNVERIFIED
CONFIRMED CONFIGURATION ISSUE
CONFIRMED VULNERABILITY
FALSE POSITIVE / NOT DEMONSTRATED
NEEDS MORE EVIDENCE
```

## 4. Manual validation record

Per ogni pista che scegli di verificare:

```text
FACT:
HYPOTHESIS:
MINIMUM TEST:
EXPECTED:
OBSERVED:
CONCLUSION:
STOP CONDITION:
```

## 5. Authorization test

Confronta il comportamento di due utenti diversi.

```text
ALICE OWN OBJECT:
BOB OWN OBJECT:
CROSS-USER TEST:
EXPECTED SECURITY CONTROL:
OBSERVED RESULT:
```

Non enumerare altri ID quando hai ottenuto una prova sufficiente.

## 6. Attack chain / decision path

Disegna il tuo percorso, anche se alcune piste terminano:

```text
evidence
  ↓
hypothesis
  ↓
test
  ├── no signal → stop / reprioritize
  └── confirmed → impact → stop
```

## 7. Finding

### Title

### Asset

### Summary

### Preconditions

### Steps to reproduce

### Evidence

### Demonstrated impact

### What is NOT demonstrated

### Severity and rationale

### Remediation

### Retest

## 8. Executive summary

Massimo 100 parole. Nessun overclaim.
