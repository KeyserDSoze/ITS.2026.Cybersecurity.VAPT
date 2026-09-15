# Ambiente di laboratorio — Linee guida iniziali

Questa guida definisce la base tecnica del corso. I singoli laboratori potranno aggiungere requisiti specifici.

## Obiettivi dell'ambiente

L'ambiente deve essere:

- riproducibile;
- isolabile;
- semplice da ripristinare;
- abbastanza leggero da funzionare sui portatili degli studenti;
- adatto sia a web/API security sia, quando necessario, a scenari di rete e sistema.

## Workstation dello studente

Configurazione consigliata:

```text
Host dello studente
│
├── Browser moderno
├── Git
├── Docker / Docker Compose
│
└── Kali Linux
     ├── come VM principale per i lab offensivi, oppure
     └── come ambiente separato quando serve tooling specifico
```

Non è necessario obbligare ogni esercizio a passare da Kali. Per i laboratori web, browser, proxy, `curl` e Docker possono essere sufficienti anche sull'host.

## Tool base

Ogni studente dovrebbe avere accesso almeno a:

- browser con Developer Tools;
- `curl`;
- Git;
- Docker e Docker Compose;
- Nmap;
- Burp Suite Community e/o OWASP ZAP;
- un editor di testo o IDE;
- Kali Linux per gli esercizi che lo richiedono.

Tool aggiuntivi verranno introdotti solo quando servono a un obiettivo didattico preciso.

## Target web/API

Come target principali privilegiare applicazioni volutamente vulnerabili e facili da ripristinare, preferibilmente containerizzate.

Candidati:

- OWASP Juice Shop;
- applicazioni/API vulnerabili predisposte per il corso;
- laboratori online autorizzati come PortSwigger Web Security Academy.

## Target di rete/sistema

Per exploitation e post-exploitation potranno essere usate VM dedicate e isolate.

Requisiti:

- rete host-only o equivalente quando possibile;
- nessuna esposizione non necessaria verso Internet o LAN dell'aula;
- snapshot prima delle attività più invasive;
- credenziali esclusivamente didattiche;
- dati fittizi.

## Networking

Una configurazione tipica per VM locali può prevedere:

```text
[Kali / Tester] ---- rete di laboratorio isolata ---- [Target]
```

Quando serve accesso Internet per aggiornamenti o documentazione, separare concettualmente e, se possibile, tecnicamente l'interfaccia usata per il laboratorio da quella usata per Internet.

## Regola sul target

Prima di eseguire un comando attivo, lo studente deve poter rispondere a:

1. qual è il target autorizzato?
2. è nello scope?
3. qual è l'obiettivo del comando?
4. quale impatto può avere?

## Reset e riproducibilità

Ogni lab locale dovrebbe documentare:

- comando di avvio;
- configurazione di rete;
- credenziali didattiche;
- comando di arresto;
- procedura di reset;
- eventuali volumi o dati da eliminare.

Per Docker, preferire quando possibile un flusso simile a:

```bash
docker compose up -d
# laboratorio
docker compose down -v
```

Il comando reale dipenderà dal laboratorio.

## Raccolta evidenze

Creare una cartella locale di lavoro per ogni assessment, fuori dalla repository del corso se contiene dati personali o materiale che non deve essere pubblicato.

Esempio:

```text
assessment-notes/
├── scope.md
├── recon/
├── requests/
├── screenshots/
├── findings/
└── report/
```

Questa struttura serve a insegnare ordine e tracciabilità, non deve necessariamente essere committata.

## Materiale d'esame

Nessun target, compose file, flag, credenziale o configurazione che riveli una futura prova d'esame riservata deve essere aggiunto a questa repository pubblica.
