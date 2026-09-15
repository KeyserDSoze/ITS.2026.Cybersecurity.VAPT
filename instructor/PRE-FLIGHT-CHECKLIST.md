# Pre-flight checklist — prima della lezione

Checklist operativa da usare prima di ogni incontro. Lo scopo è evitare che problemi di ambiente, link o materiale mangino il tempo destinato a ragionamento e laboratorio.

## 1. Materiale docente

- [ ] Ho aperto `instructor/START-HERE.md`.
- [ ] Ho controllato il blocco della giornata in `30-HOUR-SCHEDULE.md`.
- [ ] Ho aperto il runbook slide-by-slide corretto.
- [ ] Ho aperto il PowerPoint corretto.
- [ ] So quali slide `APPROFONDIMENTO · SE SERVE` posso saltare.
- [ ] So qual è il deliverable minimo da ottenere prima di chiudere.

## 2. Portale studenti

- [ ] Il portale GitHub Pages è raggiungibile.
- [ ] La lezione corretta si apre.
- [ ] Il dossier/lab associato viene mostrato.
- [ ] Gli artefatti previsti sono leggibili.
- [ ] Quiz/checklist della giornata funzionano, se previsti.
- [ ] I PDF scaricabili si aprono, se li useremo.

Portale:

`https://keyserdsoze.github.io/ITS.2026.Cybersecurity.VAPT/`

## 3. UmbraMarket / laboratorio locale

Quando la giornata usa la piattaforma:

```bash
cd labs/platform
docker compose up -d --build
./scripts/check.sh
```

Controllare:

- [ ] `http://localhost:8080` — shop/API;
- [ ] `http://localhost:8081` — admin static service;
- [ ] `http://localhost:8082` — files static service;
- [ ] Alice: `alice / alice-demo`;
- [ ] Bob: `bob / bob-demo`.

A fine attività, quando serve:

```bash
docker compose down
```

Reset completo:

```bash
docker compose down -v
docker compose up -d --build
```

## 4. Tool minimi

A seconda della giornata verificare ciò che serve davvero:

- [ ] browser;
- [ ] DevTools;
- [ ] `curl`;
- [ ] Nmap;
- [ ] Burp Suite o OWASP ZAP;
- [ ] Docker / Docker Compose;
- [ ] editor di testo / Markdown;
- [ ] PowerPoint o viewer compatibile.

Non installiamo tool nuovi durante la lezione se non sono indispensabili all'obiettivo.

## 5. Rete e fallback

- [ ] Ho verificato Wi-Fi / rete aula.
- [ ] Il materiale essenziale è disponibile anche localmente.
- [ ] Ho un piano B se GitHub Pages non risponde: Markdown della repository.
- [ ] Ho un piano B se Docker non parte: artefatti simulati del dossier.
- [ ] Ho un piano B se il proxy crea problemi: request/response già predisposte.

Un problema tecnico non deve trasformare una lezione di ragionamento in una lezione di troubleshooting casuale.

## 6. Prima di iniziare il laboratorio

- [ ] Ho ricordato scope e autorizzazione.
- [ ] Ho chiarito la stop condition.
- [ ] Ho indicato cosa dobbiamo documentare.
- [ ] Ho definito il timebox.
- [ ] Non ho anticipato la soluzione.
- [ ] So quali hint posso dare e in quale ordine.

## 7. Prima di chiudere la giornata

- [ ] Abbiamo prodotto il deliverable previsto.
- [ ] Abbiamo fatto almeno un debrief basato su evidence.
- [ ] Abbiamo distinto ciò che è confermato da ciò che è ancora ipotesi.
- [ ] Abbiamo collegato l'attività al reporting.
- [ ] Abbiamo posto la domanda-ponte verso la giornata successiva.

Domande finali:

> Che cosa sappiamo adesso che prima non sapevamo?

> Quale decisione tecnica possiamo prendere grazie a questa nuova evidenza?
