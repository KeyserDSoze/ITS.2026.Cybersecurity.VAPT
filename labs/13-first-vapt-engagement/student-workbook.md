# Student Workbook — First VAPT Engagement

## 1. Scope

```text
BUSINESS QUESTION:
IN SCOPE:
OUT OF SCOPE:
STOP CONDITIONS:
```

## 2. Source / Evidence Board

Prima di proporre attacchi, registra ciò che sai.

| Source | Informazione | Tipo | Confidenza | Domanda successiva |
|---|---|---|---|---|
| | | OBSERVED / REPORTED / INFERRED | | |
| | | | | |
| | | | | |

## 3. Discovery shortlist

Scegli 12 osservazioni.

| Osservazione | Perché potrebbe contare? | Cosa manca? | Utile / incerta / rumore |
|---|---|---|---|
| | | | |
| | | | |

Almeno tre devono risultare poco utili o non sufficientemente supportate.

## 4. Hypothesis record

Solo dopo il discovery checkpoint.

```text
OBSERVATION:
HYPOTHESIS:
PRECONDITIONS:
CONTROL ALREADY KNOWN:
WHAT WE DO NOT KNOW:
POSSIBLE SAFE TEST:
COST:
OPERATIONAL RISK:
SCOPE:
DECISION:
```

Usa `assessment-decision-board.md` per scegliere cosa vale la pena verificare.

## 5. Technical Attack Surface Inventory

| Asset | Porta / path | Osservazione | OBSERVED / INFERRED | Prossima domanda |
|---|---|---|---|---|
| | | | | |
| | | | | |

## 6. Scanner triage

| ID | Evidence dello scanner | Assunzione | Verifica necessaria | Stato finale |
|---|---|---|---|---|
| S-001 | | | | |
| S-002 | | | | |
| S-003 | | | | |
| S-004 | | | | |
| S-005 | | | | |

Stati:

```text
UNVERIFIED
CONFIRMED CONFIGURATION ISSUE
CONFIRMED VULNERABILITY
FALSE POSITIVE / NOT DEMONSTRATED
NEEDS MORE EVIDENCE
```

## 7. Manual Validation Record

```text
FACT:
HYPOTHESIS:
MINIMUM TEST:
EXPECTED:
OBSERVED:
CONCLUSION:
STOP CONDITION:
```

## 8. Authorization baseline

```text
ALICE OWN OBJECT:
BOB OWN OBJECT:
CROSS-USER TEST:
EXPECTED SECURITY CONTROL:
OBSERVED RESULT:
```

Non enumerare ulteriori ID dopo una prova sufficiente.

## 9. Decision Path / Attack Chain

La chain può concludersi anche negativamente.

```text
evidence
  ↓
hypothesis
  ↓
preconditions
  ↓
test
  ├── control works / no evidence → STOP
  ├── too costly / out of scope  → STOP
  └── confirmed                  → IMPACT → STOP
```

## 10. Finding

### Title

### Asset / process

### Summary

### Preconditions

### Steps to reproduce / validation method

### Evidence

### Demonstrated impact

### What is NOT demonstrated

### Severity and rationale

### Remediation

### Retest

## 11. Executive summary

Massimo 100 parole. Nessun overclaim.
