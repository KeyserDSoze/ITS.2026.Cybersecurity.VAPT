# Lab 03 — Build the Attack Surface

## Scenario

Il cliente ti fornisce un singolo asset locale e conferma che quattro porte appartengono al laboratorio. Devi costruire un inventario tecnico senza confondere servizi esposti e vulnerabilità.

## Scope

Autorizzato esclusivamente:

```text
127.0.0.1 TCP/3000
127.0.0.1 TCP/5005
127.0.0.1 TCP/8080
127.0.0.1 TCP/9090
```

Qualunque altra porta del computer è fuori scope.

## Setup

```bash
cd labs/platform
docker compose up -d --build
```

## GUIDED — Prima domanda: cosa è esposto?

```bash
nmap -sV -p 3000,5005,8080,9090 127.0.0.1
```

Non copiare semplicemente l'output. Trasformalo in una tabella:

| Porta | Stato | Servizio/versione dichiarata | Evidenza | Ipotesi |
|---:|---|---|---|---|
| | | | | |

### Step 2 — Verifica via protocollo

```bash
curl -I http://127.0.0.1:8080
curl -I http://127.0.0.1:9090
curl -i http://127.0.0.1:5005/api/health
```

Confronta ciò che Nmap ha inferito con ciò che il servizio dichiara direttamente.

### Step 3 — Content discovery manuale

Apri:

```text
http://127.0.0.1:8080/robots.txt
http://127.0.0.1:9090/
```

Domande:

- quali nuovi path emergono?
- sono vulnerabilità o semplicemente informazioni?
- quali path meritano verifica successiva?

## Errore da evitare

```text
Porta 8080 aperta → server vulnerabile
```

è una conclusione non supportata.

Forma corretta:

```text
Porta 8080 aperta → servizio HTTP raggiungibile → verifico tecnologia, contenuti e configurazione.
```

## INDEPENDENT

Costruisci l'Attack Surface Inventory completo dei quattro servizi, includendo eventuali path interessanti scoperti manualmente.

## CHALLENGE

Ordina i punti di interesse per priorità investigativa e difendi l'ordine scelto. Non vince chi trova più URL: conta la qualità delle ipotesi.

## Deliverable

`attack-surface.md` con asset, porta, servizio, evidenza, livello di confidenza e prossimo test suggerito.
