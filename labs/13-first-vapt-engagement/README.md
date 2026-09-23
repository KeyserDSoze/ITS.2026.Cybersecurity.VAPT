# Lab 13 — UmbraMarket First VAPT Engagement

## Obiettivo

Questo laboratorio compatta in una sola sessione il percorso:

```text
azienda → persone/processi/spazi → scope → recon → enumeration
→ VA → triage → manual validation → controlled PT
→ impact → remediation → reporting
```

Non è una CTF. Non esistono flag da trovare. Il risultato atteso è una conclusione professionale sostenuta da evidenze.

L'obiettivo è ragionare sull'**intera superficie di attacco**, non soltanto sugli asset tecnici:

```text
persone + processi + identità + informazioni
+ spazi + fornitori + tecnologia + tempo
```

## Scenario

UmbraMarket sta preparando il rilascio di una nuova versione del portale B2B. Il cliente chiede una verifica rapida prima della pubblicazione.

Lo stack è interamente locale e volutamente vulnerabile. Tutte le persone, le abitudini e i dati descritti nel dossier aziendale sono fittizi. Nessun sistema esterno è autorizzato.

## Avvio

Dalla root della repository:

```bash
cd labs/platform
docker compose up -d --build
./scripts/check.sh
```

Target tecnici autorizzati:

```text
127.0.0.1:5005   UmbraMarket Guided
127.0.0.1:8080   Admin staging
127.0.0.1:9090   File service
```

Juice Shop su porta 3000 non fa parte di questo engagement.

## Materiale per gli studenti

Aprire progressivamente:

1. `artifacts/00-client-brief.txt`;
2. `artifacts/02-company-human-surface-dossier.md`;
3. costruire una prima mappa della superficie di attacco organizzativa;
4. eseguire recon/enumeration sul target locale;
5. `artifacts/01-scanner-output.txt`;
6. validare manualmente soltanto le piste ritenute utili;
7. compilare `student-workbook.md`;
8. consegnare un finding completo e una attack-surface analysis.

Non tutte le abitudini descritte nel dossier devono portare a un attacco. Sono conclusioni valide anche:

```text
NON ATTACCABILE CON LE EVIDENZE DISPONIBILI
FUORI SCOPE
TROPPO COSTOSO
TROPPO INVASIVO
BASSA PRIORITÀ
SERVONO ALTRI PREREQUISITI
ESISTE UN CONTROLLO COMPENSATIVO
```

## Materiale docente

- `instructor-runbook.md` — scaletta completa della lezione;
- `instructor-solution.md` — soluzione della parte tecnica;
- `instructor-human-attack-surface.md` — guida per discutere persone, processi, spazi, terze parti e attack chain non tecniche.

## Regole

Consentito:

- browser, DevTools, curl;
- Nmap sul solo localhost e sulle sole porte in scope;
- Burp Suite Community o OWASP ZAP;
- autenticazione con account didattici;
- modifica manuale di parametri e identificativi;
- una PoC minima e reversibile;
- threat modeling e tabletop discussion sulle superfici umane, fisiche e procedurali.

Non consentito:

- brute force;
- denial of service;
- enumerazione massiva di ID;
- cancellazione o modifica intenzionale di dati;
- persistence;
- test verso host diversi da 127.0.0.1;
- social engineering reale verso persone;
- introduzione reale di supporti o dispositivi sconosciuti;
- accesso fisico non autorizzato;
- continuare dopo avere ottenuto evidenza sufficiente.

## Account

```text
alice / Alice123!
bob   / Bob123!
```

L'account admin non viene consegnato agli studenti.

## Deliverable

Ogni gruppo deve consegnare:

1. Attack Surface Inventory tecnico;
2. Human / Process / Physical Attack Surface Map;
3. almeno 10 ipotesi derivate dal dossier, incluse alcune da scartare;
4. triage dei finding automatici;
5. almeno un finding validato;
6. una attack chain o decision path;
7. remediation tecnica o procedurale;
8. una mini executive summary di massimo 100 parole.

## Domanda guida

Per ogni passaggio:

```text
COSA VEDO?
COSA SIGNIFICA?
COSA STO IPOTIZZANDO?
QUALI PREREQUISITI SERVONO?
È NELLO SCOPE?
VALE LA PENA VERIFICARLO?
COME POSSO VERIFICARLO IN SICUREZZA?
COSA HO DIMOSTRATO DAVVERO?
POSSO FERMARMI?
```

## Principio del laboratorio

```text
POSSIBILE
≠
PLAUSIBILE
≠
AUTORIZZATO
≠
CONVENIENTE
≠
DIMOSTRATO
```
