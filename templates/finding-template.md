# Vulnerability Finding Template

Usare questo template come base per documentare un finding durante i laboratori e la preparazione del report.

---

## Finding ID

`VAPT-XXX`

## Titolo

Titolo sintetico e descrittivo della vulnerabilità.

## Asset interessato

- Host / URL:
- Endpoint / servizio:
- Porta, se applicabile:
- Ambiente:

## Severity

- Criticità: `Critical / High / Medium / Low / Informational`
- CVSS, se utilizzato:
- Vector, se disponibile:

> La severity deve essere motivata nel contesto del target e non copiata automaticamente da uno scanner.

## Descrizione

Descrivere il problema in modo tecnico ma leggibile:

- quale comportamento è stato osservato;
- quale controllo di sicurezza manca o è inefficace;
- quali prerequisiti sono necessari.

## Impatto

Spiegare che cosa può ottenere un attaccante se la vulnerabilità viene sfruttata con successo.

Evitare formulazioni generiche quando è possibile descrivere un impatto concreto sul sistema o sul dato interessato.

## Evidenza

Inserire solo le evidenze necessarie a dimostrare il finding.

Possibili elementi:

- request HTTP;
- response HTTP;
- output del comando;
- screenshot;
- log;
- differenza tra comportamento atteso e osservato.

Sanitizzare token, password e dati non necessari.

## Steps to reproduce

1. Prerequisito o stato iniziale.
2. Azione eseguita.
3. Parametro o input modificato.
4. Risultato osservato.
5. Eventuale conferma indipendente.

I passaggi devono essere sufficienti perché un tecnico autorizzato possa riprodurre il problema.

## Proof of Concept

Se necessario, riportare una PoC minima e controllata.

Non aumentare l'impatto della PoC oltre quanto necessario per dimostrare la vulnerabilità.

## Riferimenti

- CVE, se applicabile:
- CWE, se applicabile:
- OWASP, se applicabile:
- MITRE ATT&CK, se realmente pertinente:
- documentazione vendor:

Non forzare associazioni solo per riempire il campo.

## Remediation

Descrivere la correzione raccomandata.

Quando utile distinguere:

### Fix immediato

Misura concreta per rimuovere o mitigare il problema.

### Miglioramento strutturale

Controllo di progettazione, configurazione, processo o test che riduca la probabilità che il problema si ripresenti.

## Retest

- Stato: `Not tested / Fixed / Partially fixed / Not fixed`
- Data:
- Evidenza del retest:

---

## Checklist qualità

Prima di considerare il finding completo, verificare:

- [ ] il target è nello scope;
- [ ] la vulnerabilità è stata verificata e non solo riportata da un tool;
- [ ] l'evidenza è sufficiente ma non contiene dati inutilmente sensibili;
- [ ] i passaggi sono riproducibili;
- [ ] l'impatto è distinto dalla descrizione tecnica;
- [ ] la severity è motivata;
- [ ] la remediation affronta la causa del problema;
- [ ] riferimenti e CVE sono stati verificati.
