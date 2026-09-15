# UmbraMarket Lab Platform

Ambiente locale comune per i laboratori 00-07 del corso VAPT.

> **Attenzione:** contiene applicazioni volutamente vulnerabili. Il compose pubblica i servizi solo su `127.0.0.1` per default. Non modificare il binding verso `0.0.0.0` salvo indicazione esplicita del docente e rete di laboratorio isolata.

## Servizi

| Servizio | URL locale | Uso didattico |
|---|---|---|
| UmbraMarket Guided | http://127.0.0.1:5005 | HTTP, sessioni, injection, authorization |
| OWASP Juice Shop | http://127.0.0.1:3000 | esercizi independent/challenge |
| Admin Portal | http://127.0.0.1:8080 | recon, header e content discovery |
| File Service | http://127.0.0.1:9090 | enumeration e directory listing |

Versione Juice Shop pin: `v20.1.0`, scelta per rendere il corso riproducibile.

## Requisiti

- Docker Engine o Docker Desktop;
- Docker Compose v2;
- `curl`;
- per i lab di recon: Nmap;
- per i lab web: browser + Burp Suite Community o OWASP ZAP.

## Avvio

Dalla root della repository:

```bash
cd labs/platform
docker compose pull
docker compose up -d --build
```

Controllo rapido:

```bash
./scripts/check.sh
```

Su Windows PowerShell puoi verificare manualmente gli URL indicati nella tabella.

## Hostname opzionali

Per rendere lo scenario più leggibile puoi aggiungere al file hosts:

```text
127.0.0.1 shop.umbramarket.test
127.0.0.1 app.umbramarket.test
127.0.0.1 admin.umbramarket.test
127.0.0.1 files.umbramarket.test
```

Gli hostname sono solo alias locali. Le porte restano rispettivamente `3000`, `5005`, `8080`, `9090`.

## Credenziali didattiche UmbraMarket Guided

```text
alice / Alice123!
bob   / Bob123!
admin / Admin123!
```

Sono credenziali esclusivamente didattiche e non devono essere riutilizzate altrove.

## Reset

```bash
docker compose down -v
docker compose up -d --build
```

`-v` elimina il database didattico e lo ricrea allo stato iniziale.

## Stop

```bash
docker compose down
```

## Scope standard

Salvo diversa indicazione del singolo laboratorio, sono autorizzati esclusivamente:

```text
127.0.0.1 TCP/3000
127.0.0.1 TCP/5005
127.0.0.1 TCP/8080
127.0.0.1 TCP/9090
```

Qualunque altra porta del computer dello studente è **fuori scope**.

## Perché due applicazioni web?

`UmbraMarket Guided` è intenzionalmente semplice e deterministica: serve per imparare un gesto tecnico senza rumore. Juice Shop viene usato dopo, quando lo studente deve trasferire lo stesso metodo su un'applicazione più realistica.
