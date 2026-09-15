# Presentazioni PowerPoint — VAPT 2026

Questa cartella contiene le **presentazioni premium da proiezione** per le giornate del corso VAPT ITS Umbria 2026.

Le slide sono progettate per accompagnare la lezione, non per sostituire il materiale completo disponibile nel portale studenti. Il flusso consigliato in aula è:

```text
slide → spiegazione / discussione → sito del corso → laboratorio → debrief → slide
```

## Presentazioni disponibili

| Giornata | Moduli | Presentazione |
|---:|---|---|
| 1 | 00 + 01 — mindset, engagement e scope | [`premium/day-01-mindset-scope-premium.pptx`](premium/day-01-mindset-scope-premium.pptx) |
| 2 | 02 + 03 — fondamentali tecnici e reconnaissance | [`premium/day-02-foundations-recon-premium.pptx`](premium/day-02-foundations-recon-premium.pptx) |
| 3 | 04 + 05 — Vulnerability Assessment e web mapping | [`premium/day-03-va-web-mapping-premium.pptx`](premium/day-03-va-web-mapping-premium.pptx) |
| 4 | 06 — input handling e injection | [`premium/day-04-input-handling-injection-premium.pptx`](premium/day-04-input-handling-injection-premium.pptx) |
| 5 | 07 — authentication, authorization e API security | [`premium/day-05-auth-api-security-premium.pptx`](premium/day-05-auth-api-security-premium.pptx) |
| 6 | 08 + 09 + 10 + 11 — exploitation, post-exploitation, reporting e AI | [`premium/day-06-exploitation-postex-reporting-ai-premium.pptx`](premium/day-06-exploitation-postex-reporting-ai-premium.pptx) |
| 7 | 12 — capstone UmbraMarket | [`premium/day-07-capstone-premium.pptx`](premium/day-07-capstone-premium.pptx) |
| 8 | 12 + wrap-up — report e client presentation | [`premium/day-08-closing-report-presentation-premium.pptx`](premium/day-08-closing-report-presentation-premium.pptx) |

## Design

Le presentazioni usano intenzionalmente:

- sfondo bianco adatto alla proiezione;
- pochi testi per slide;
- gerarchia tipografica forte;
- card, diagrammi e process flow;
- accenti teal, blu, ambra e violetto;
- una slide ricorrente che indica quando passare al sito del corso.

Il contenuto dettagliato rimane nelle cartelle:

```text
lessons/      teoria e percorso studente
labs/         dossier, output e simulazioni
instructor/   guida docente e conduzione d'aula
```

## Rigenerazione automatica

Le presentazioni sono generate da:

[`generate_premium_decks.py`](generate_premium_decks.py)

La GitHub Action:

[`.github/workflows/presentations.yml`](../.github/workflows/presentations.yml)

rigenera i `.pptx` quando viene modificato il generatore e li salva in `presentations/premium/`.

Questo evita di avere una sorgente non riproducibile: layout, contenuti e file PowerPoint rimangono versionabili insieme al resto del corso.

## Piano delle 30 ore

La suddivisione delle giornate segue:

[`../instructor/30-HOUR-SCHEDULE.md`](../instructor/30-HOUR-SCHEDULE.md)

Le slide sono quindi allineate alla struttura reale di **7 incontri da 4 ore + 1 incontro finale da 2 ore**, con circa 3 ore di contenuto pianificato per ogni blocco da 4 ore.

## Nota sul materiale pubblico

Questa repository è pubblica. Le presentazioni non devono contenere:

- soluzioni riservate d'esame;
- flag segrete;
- credenziali private;
- answer key non destinate agli studenti;
- dettagli di infrastrutture valutative riservate.

Il materiale realmente riservato deve rimanere in storage privato o in una repository privata separata.
