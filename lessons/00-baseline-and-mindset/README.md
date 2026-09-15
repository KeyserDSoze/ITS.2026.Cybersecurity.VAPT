# 00 — Baseline & Pentester Mindset

## Obiettivi

Questa attività non è un esame. Serve a capire da dove parte la classe e a introdurre il modo di ragionare che useremo nel corso.

Al termine, gli studenti dovrebbero aver chiaro che un pentest non consiste nel lanciare tool a caso, ma nel trasformare osservazioni in ipotesi verificabili.

## Domande iniziali

Discussione breve, senza voto:

- Che differenza c'è tra IP e dominio?
- Che cosa rappresenta una porta TCP?
- Cosa succede, a grandi linee, quando il browser apre un sito HTTPS?
- Che differenza c'è tra autenticazione e autorizzazione?
- Cos'è una vulnerabilità?
- Cos'è una CVE?
- Cosa dovrebbe dimostrare un penetration test?
- Perché serve un'autorizzazione esplicita?

Le risposte servono al docente per capire quali fondamentali riprendere.

## Mini challenge

Fornire un target di laboratorio volutamente semplice e autorizzato.

Consegna:

> Avete ricevuto l'URL/IP di un sistema appartenente al cliente. Senza cercare exploit e senza fare azioni distruttive, raccogliete quante più informazioni utili possibile e annotate per ciascuna informazione **come l'avete ottenuta** e **perché potrebbe essere utile**.

## CORE

Produrre almeno:

- elenco di informazioni osservate;
- distinzione tra fatti e supposizioni;
- tre domande che vorrebbero porre al cliente prima di continuare.

## CHALLENGE

Per ogni informazione raccolta, formulare almeno una possibile ipotesi di test successivo senza eseguirla.

## HARD MODE

Costruire una piccola attack-surface map senza utilizzare scanner automatici.

## Debrief

Domande guida:

- Chi ha iniziato da un tool e chi dal target?
- Quali dati erano realmente verificati?
- Quali erano solo inferenze?
- Quale informazione ha cambiato maggiormente il piano?
- Quali attività non avremmo dovuto eseguire senza confermare lo scope?

## Deliverable

Una pagina di note con tre sezioni:

```text
FACTS
HYPOTHESES
QUESTIONS FOR THE CLIENT
```

## Collegamento al corso

Questa struttura verrà riutilizzata continuamente:

```text
osservazione → ipotesi → test → evidenza → conclusione
```
