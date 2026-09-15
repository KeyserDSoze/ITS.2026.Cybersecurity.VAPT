# Lab 01 — Client Kickoff & Rules of Engagement

## Scenario

Il cliente dice soltanto:

> "UmbraMarket sta per andare in produzione. Vogliamo sapere se è sicura. Fateci un penetration test."

Il problema del laboratorio non è tecnico: devi trasformare una richiesta vaga in un incarico eseguibile e autorizzato.

## Regola fondamentale

In questa attività **non si testa nulla** finché scope e Rules of Engagement non sono sufficientemente chiari.

## GUIDED — Le prime domande

Dividi le domande in cinque gruppi:

1. **obiettivo** — cosa vuole sapere il cliente?
2. **asset** — quali sistemi sono inclusi?
3. **modalità** — black, grey o white box?
4. **limiti** — cosa non dobbiamo fare?
5. **comunicazione** — chi contattiamo se qualcosa va storto?

Per ogni gruppo formula almeno due domande.

### Esempio

Domanda debole:

> Possiamo usare Nmap?

Domanda migliore:

> Quali hostname e indirizzi IP sono esplicitamente inclusi nello scope e sono autorizzate attività di network enumeration su tutti questi asset?

La seconda domanda chiarisce prima il **confine**, poi lo strumento.

## Decision point

Il cliente dichiara:

```text
In scope:
- applicazione web di staging
- API usata dalla web app
- account test forniti dal cliente

Out of scope:
- sistemi di pagamento di terze parti
- e-mail reali dei dipendenti
- denial of service
- social engineering
```

Scrivi cosa è ancora ambiguo.

## INDEPENDENT

Produci una pagina `Scope & Rules of Engagement` con almeno:

- obiettivo dell'assessment;
- asset in scope;
- asset out of scope;
- approccio black/grey/white box;
- credenziali fornite;
- tecniche vietate;
- finestra temporale;
- stop condition;
- contatto di escalation;
- gestione delle evidenze;
- deliverable attesi.

## CHALLENGE

Trova almeno tre situazioni che potrebbero creare un incidente se il contratto restasse ambiguo. Per ciascuna scrivi la domanda che useresti per risolvere l'ambiguità.

## Deliverable

`scope.md`, massimo due pagine, scritto come documento che un collega potrebbe usare senza chiederti chiarimenti.

## Debrief

Domanda finale:

> Quale singola informazione mancante avrebbe potuto causare il problema più serio durante il test?
