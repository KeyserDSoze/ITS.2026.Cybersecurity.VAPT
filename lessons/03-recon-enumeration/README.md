# 03 — Reconnaissance & Enumeration

## Obiettivi

- costruire una superficie d'attacco a partire da informazioni incomplete;
- distinguere reconnaissance passiva e attiva;
- usare Nmap e strumenti DNS con un obiettivo preciso;
- trasformare porte e banner in domande di sicurezza, non in conclusioni affrettate.

## Concetti chiave

- asset discovery;
- host e hostname;
- porte e servizi;
- version detection;
- DNS e sottodomini;
- fingerprinting;
- content discovery;
- affidabilità di banner e versioni dichiarate;
- differenza tra informazione osservata, inferita e verificata.

## Demo ragionata

Partire da un singolo hostname/IP e rendere esplicito il processo:

```text
Target
  ↓
Risoluzione / reachability
  ↓
Porte esposte
  ↓
Servizi
  ↓
Tecnologie / contenuti
  ↓
Nuove ipotesi
```

Esempi di comandi in laboratorio:

```bash
nmap <target>
nmap -sV <target>
dig <hostname>
curl -I http://<target>
```

La sintassi avanzata viene introdotta solo quando serve.

## Lab — Build the Attack Surface

Fornire uno o pochi asset iniziali appartenenti all'ambiente autorizzato.

### CORE

Produrre una tabella:

| Asset | Porta | Servizio | Evidenza | Ipotesi successiva |
|---|---:|---|---|---|

### CHALLENGE

Individuare ulteriori hostname, endpoint o superfici esposte attraverso enumeration coerente con lo scope.

### HARD MODE

Creare una piccola attack-surface map e ordinare i punti di interesse per valore investigativo, motivando la priorità.

## Errori da discutere

- assumere che una versione dichiarata sia necessariamente corretta;
- confondere porta aperta con vulnerabilità;
- eseguire scansioni sempre più aggressive senza una domanda;
- ignorare HTTP perché "è solo una porta 80/443";
- dimenticare hostname virtuali e DNS.

## Deliverable

Attack Surface Inventory con fatti, fonti ed eventuali ipotesi.

## Collegamento al report

Le informazioni validate alimentano scope tecnico, metodologia e descrizione degli asset, non diventano automaticamente finding.
