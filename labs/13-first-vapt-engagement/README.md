# Lab 13 — UmbraMarket First VAPT Engagement

## Obiettivo

Questo laboratorio compatta in una sola sessione il percorso:

```text
scope → recon → enumeration → VA → triage → manual validation
→ controlled PT → impact → remediation → reporting
```

Non è una CTF. Non esistono flag da trovare. Il risultato atteso è una conclusione professionale sostenuta da evidenze.

## Scenario

UmbraMarket sta preparando il rilascio di una nuova versione del portale B2B. Il cliente chiede una verifica rapida prima della pubblicazione.

Lo stack è interamente locale e volutamente vulnerabile. Nessun sistema esterno è autorizzato.

## Avvio

Dalla root della repository:

```bash
cd labs/platform
docker compose up -d --build
./scripts/check.sh
```

Target autorizzati:

```text
127.0.0.1:5005   UmbraMarket Guided
127.0.0.1:8080   Admin staging
127.0.0.1:9090   File service
```

Juice Shop su porta 3000 non fa parte di questo engagement.

## Materiale per gli studenti

Aprire nell'ordine:

1. `artifacts/00-client-brief.txt`
2. eseguire recon/enumeration sul target locale;
3. `artifacts/01-scanner-output.txt`;
4. validare manualmente soltanto le piste ritenute utili;
5. compilare `student-workbook.md`;
6. consegnare un finding completo.

Il file `instructor-solution.md` è per il docente.

## Regole

Consentito:

- browser, DevTools, curl;
- Nmap sul solo localhost e sulle sole porte in scope;
- Burp Suite Community o OWASP ZAP;
- autenticazione con account didattici;
- modifica manuale di parametri e identificativi;
- una PoC minima e reversibile.

Non consentito:

- brute force;
- denial of service;
- enumerazione massiva di ID;
- cancellazione o modifica intenzionale di dati;
- persistence;
- test verso host diversi da 127.0.0.1;
- continuare dopo avere ottenuto evidenza sufficiente.

## Account

```text
alice / Alice123!
bob   / Bob123!
```

L'account admin non viene consegnato agli studenti.

## Deliverable

Ogni gruppo deve consegnare:

1. Attack Surface Inventory;
2. triage dei finding automatici;
3. almeno un finding validato;
4. una attack chain o decision path;
5. remediation tecnica;
6. una mini executive summary di massimo 100 parole.

## Domanda guida

Per ogni passaggio:

```text
COSA VEDO?
COSA SIGNIFICA?
COSA STO IPOTIZZANDO?
COME POSSO VERIFICARLO?
COSA HO DIMOSTRATO DAVVERO?
POSSO FERMARMI?
```
