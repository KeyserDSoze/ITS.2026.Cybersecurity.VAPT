# Lab 00 — First Look at UmbraMarket

## Scenario

Sei appena entrato nel team che deve valutare UmbraMarket prima del rilascio. In questa prima attività **non devi cercare vulnerabilità**: devi imparare a separare ciò che osservi da ciò che stai ipotizzando.

## Scope

Autorizzati esclusivamente:

```text
http://127.0.0.1:5005
http://127.0.0.1:8080
http://127.0.0.1:9090
```

Niente scansioni estese del computer, niente altri host, niente exploit.

## Setup

```bash
cd labs/platform
docker compose up -d --build
./scripts/check.sh
```

## GUIDED — Osserva prima di concludere

### Step 1 — Verifica che il target esista

```bash
curl -i http://127.0.0.1:5005/api/health
```

Annota almeno tre **fatti osservabili**. Esempio di forma corretta:

```text
FACT: la risposta HTTP restituisce status 200.
FACT: il body contiene un campo status con valore ok.
```

Non scrivere ancora frasi come "è sicuro", "usa sicuramente Flask" o "è vulnerabile".

### Step 2 — Confronta due servizi

```bash
curl -I http://127.0.0.1:8080
curl -I http://127.0.0.1:9090
```

Per ciascun servizio compila:

| Osservazione | È un fatto? | Quale ipotesi suggerisce? |
|---|---|---|
| | | |

### Step 3 — Dal fatto alla domanda

Scegli due osservazioni e trasformale in un possibile test successivo.

Schema:

```text
Osservazione → Ipotesi → Test che potrei eseguire → Evidenza che cercherei
```

Non eseguire ancora il test se richiede attività non previste dallo scope.

## Hint progressivi

**Hint 1:** guarda status code, header, tipo di contenuto e nomi esposti.

**Hint 2:** una stringa `Server:` è un dato dichiarato dal server, non prova assoluta della tecnologia reale.

**Hint 3:** chiediti sempre se stai descrivendo ciò che hai visto o ciò che pensi significhi.

## INDEPENDENT

Visita i tre target autorizzati e produci:

- almeno 8 fatti;
- almeno 4 ipotesi;
- almeno 4 possibili test successivi;
- 3 domande da porre al cliente.

## CHALLENGE

Disegna una mini attack-surface map usando solo le informazioni raccolte senza scanner automatici.

## Deliverable

Una pagina con:

```text
FACTS
HYPOTHESES
TESTS TO CONSIDER
QUESTIONS FOR THE CLIENT
```

## Cleanup

```bash
cd labs/platform
docker compose down
```
