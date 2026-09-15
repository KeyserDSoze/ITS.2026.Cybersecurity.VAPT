# Presentazioni VAPT — giornate d'aula

Questa cartella contiene le presentazioni da proiezione per le otto giornate del corso.

La regola editoriale è una sola: **facciamo il percorso insieme alla classe**. Le slide evitano formule come “gli studenti devono…” e usano un linguaggio condiviso: cosa sappiamo, cosa stiamo ipotizzando, quale evidenza ci manca, quale test minimo ci serve e dove dobbiamo fermarci.

## Release stabile

La prima versione congelata delle presentazioni è disponibile come GitHub Release:

- [`presentations-v1.0.0`](https://github.com/KeyserDSoze/ITS.2026.Cybersecurity.VAPT/releases/tag/presentations-v1.0.0)

La release contiene gli otto deck PowerPoint, un bundle ZIP unico e `SHA256SUMS.txt` per la verifica di integrità. La cartella `premium/` su `main` può continuare a evolvere; la release resta invece immutata come riferimento della versione distribuita.

## Deck

| Giornata | Focus | PowerPoint | Runbook docente |
|---:|---|---|---|
| 1 | mindset, engagement e scope | [`premium/day-01-mindset-scope-premium.pptx`](premium/day-01-mindset-scope-premium.pptx) | [`../instructor/presentations/day-01-mindset-scope.md`](../instructor/presentations/day-01-mindset-scope.md) |
| 2 | fondamentali tecnici e recon | [`premium/day-02-foundations-recon-premium.pptx`](premium/day-02-foundations-recon-premium.pptx) | [`../instructor/presentations/day-02-foundations-recon.md`](../instructor/presentations/day-02-foundations-recon.md) |
| 3 | VA e web mapping | [`premium/day-03-va-web-mapping-premium.pptx`](premium/day-03-va-web-mapping-premium.pptx) | [`../instructor/presentations/day-03-va-web-mapping.md`](../instructor/presentations/day-03-va-web-mapping.md) |
| 4 | input handling e injection | [`premium/day-04-input-handling-injection-premium.pptx`](premium/day-04-input-handling-injection-premium.pptx) | [`../instructor/presentations/day-04-input-handling-injection.md`](../instructor/presentations/day-04-input-handling-injection.md) |
| 5 | authentication, authorization e API | [`premium/day-05-auth-api-security-premium.pptx`](premium/day-05-auth-api-security-premium.pptx) | [`../instructor/presentations/day-05-auth-api-security.md`](../instructor/presentations/day-05-auth-api-security.md) |
| 6 | exploitation, post-exploitation, reporting e AI | [`premium/day-06-exploitation-postex-reporting-ai-premium.pptx`](premium/day-06-exploitation-postex-reporting-ai-premium.pptx) | [`../instructor/presentations/day-06-exploitation-postex-reporting-ai.md`](../instructor/presentations/day-06-exploitation-postex-reporting-ai.md) |
| 7 | capstone UmbraMarket | [`premium/day-07-capstone-premium.pptx`](premium/day-07-capstone-premium.pptx) | [`../instructor/presentations/day-07-capstone.md`](../instructor/presentations/day-07-capstone.md) |
| 8 | reporting, peer review e client presentation | [`premium/day-08-closing-report-presentation-premium.pptx`](premium/day-08-closing-report-presentation-premium.pptx) | [`../instructor/presentations/day-08-closing-report-presentation.md`](../instructor/presentations/day-08-closing-report-presentation.md) |

## Uso in aula

Il flusso preferito è:

```text
slide
→ discussione
→ esempio/evidenza
→ sito o dossier
→ decisione
→ debrief
→ slide
```

Le slide marcate `APPROFONDIMENTO · SE SERVE` sono opzionali: non sono materiale da completare a tutti i costi.

## Rigenerazione

Il generatore è [`generate_premium_decks.py`](generate_premium_decks.py). La GitHub Action [`../.github/workflows/presentations.yml`](../.github/workflows/presentations.yml) rigenera i PowerPoint quando il generatore cambia.

La GitHub Action [`../.github/workflows/release-presentations.yml`](../.github/workflows/release-presentations.yml) permette invece di creare release versionate delle presentazioni indicando versione e commit/tag/branch da congelare.

Il design usa sfondo bianco, una sola idea dominante per slide, esempi tecnici concreti e poco testo per blocco.
