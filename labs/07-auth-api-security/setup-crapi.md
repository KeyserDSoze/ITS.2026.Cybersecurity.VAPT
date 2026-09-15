# Setup OWASP crAPI

crAPI è un'applicazione volutamente vulnerabile progettata per training su API security.

Documentazione ufficiale:

- https://owasp.org/crAPI/docs/setup.html
- https://github.com/OWASP/crAPI

## Requisiti

- Docker;
- Docker Compose;
- spazio disco e RAM maggiori rispetto allo stack UmbraMarket base.

## Avvio con immagini prebuild ufficiali

Linux/macOS:

```bash
curl -L -o /tmp/crapi.zip https://github.com/OWASP/crAPI/archive/refs/heads/main.zip
unzip /tmp/crapi.zip
cd crAPI-main/deploy/docker
docker compose pull
docker compose -f docker-compose.yml --compatibility up -d
```

Windows PowerShell:

```powershell
curl.exe -L -o crapi.zip https://github.com/OWASP/crAPI/archive/refs/heads/main.zip
tar -xf .\crapi.zip
cd crAPI-main\deploy\docker
docker compose pull
docker compose -f docker-compose.yml --compatibility up -d
```

L'applicazione è normalmente disponibile su:

```text
http://localhost:8888
```

MailHog:

```text
http://localhost:8025
```

## Sicurezza

Non impostare `LISTEN_IP=0.0.0.0` in aula salvo rete volutamente isolata e indicazione esplicita del docente. L'obiettivo è mantenere il target sul computer dello studente.

## Metodo prima delle challenge

Prima di testare:

1. registra un utente;
2. completa il flusso normale dell'applicazione;
3. osserva le API nel proxy;
4. identifica object ID, token e ruoli;
5. solo dopo formula ipotesi di authorization testing.

## Stop

Dalla directory `deploy/docker` di crAPI:

```bash
docker compose down
```
