# Scenario continuo — UmbraMarket (bozza)

Questo scenario serve come filo narrativo pubblico per il corso. Il nome, gli asset e l'architettura potranno essere rinominati o adattati prima dell'erogazione.

## Il cliente

**UmbraMarket S.r.l.** è una società fittizia che sta preparando il lancio di una piattaforma e-commerce con area clienti, API e pannello amministrativo.

Il cliente chiede un assessment prima della messa in produzione.

Richiesta iniziale volutamente generica:

> "Vogliamo capire se la nuova piattaforma è sufficientemente sicura prima del go-live."

La classe deve trasformare questa richiesta in uno scope tecnico e in obiettivi verificabili.

## Asset narrativi

Possibili asset:

```text
shop.umbramarket.lab
api.umbramarket.lab
admin.umbramarket.lab
files.umbramarket.lab
```

Questi nomi sono segnaposto didattici e non devono puntare a sistemi reali su Internet.

## Architettura concettuale

```text
                     ┌─────────────────────┐
                     │       Browser       │
                     └──────────┬──────────┘
                                │ HTTPS
                                ▼
                     ┌─────────────────────┐
                     │   shop.umbramarket  │
                     │      Web App        │
                     └──────────┬──────────┘
                                │ API
                                ▼
                     ┌─────────────────────┐
                     │   api.umbramarket   │
                     │      Backend        │
                     └───────┬─────┬───────┘
                             │     │
                    ┌────────┘     └────────┐
                    ▼                       ▼
          ┌─────────────────┐     ┌─────────────────┐
          │    Database     │     │ File / Object   │
          │                 │     │    Storage      │
          └─────────────────┘     └─────────────────┘

                     ┌─────────────────────┐
                     │  admin.umbramarket  │
                     │    Admin Portal     │
                     └─────────────────────┘
```

L'implementazione reale del laboratorio potrà essere molto più semplice dell'architettura narrativa.

## Ruoli applicativi

Ruoli candidati:

- utente anonimo;
- cliente A;
- cliente B;
- operatore/supporto;
- amministratore.

Avere più identità permette di lavorare bene su authentication, authorization, IDOR/BOLA e business logic.

## Dati fittizi

Usare esclusivamente dati sintetici:

- nomi inventati;
- ordini fittizi;
- indirizzi fittizi;
- documenti generati per il laboratorio;
- credenziali create esclusivamente per il corso.

## Evoluzione durante il corso

### Modulo 1

Il cliente presenta la richiesta. Gli studenti devono ottenere scope e Rules of Engagement.

### Modulo 2

Viene mostrata una funzionalità dell'app e si ricostruisce il flusso HTTP/API.

### Modulo 3

Gli studenti ricevono uno o pochi asset iniziali e costruiscono la attack surface.

### Modulo 4

Vengono introdotti risultati di scanner da validare.

### Moduli 5–7

Si approfondiscono web application, API, sessioni, access control e input handling.

### Moduli 8–9

Un asset secondario o una VM dedicata consente exploitation e post-exploitation controllate senza rendere il corso dipendente dalla sola web application.

### Modulo 10

Tutte le evidenze raccolte diventano report.

### Modulo 11

Lo stesso scenario viene analizzato con supporto AI per confrontare qualità, velocità e falsi positivi.

### Modulo 12

Il capstone pubblico/formativo riutilizza una variante dello scenario con meno indicazioni.

## Cosa non pubblicare qui

Questo documento descrive intenzionalmente solo la narrativa e l'architettura generale.

Non inserire qui:

- soluzioni dei challenge;
- elenco completo delle vulnerabilità intenzionali;
- flag riservati;
- credenziali di un futuro esame;
- configurazioni di un futuro target d'esame.

Le challenge didattiche pubbliche possono invece avere setup e soluzioni rese disponibili quando il docente lo ritiene utile.
