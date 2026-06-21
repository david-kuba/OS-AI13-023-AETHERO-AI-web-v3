# NEXT — OS-AI13-023 AETHERO AI WEB v3

Živý seznam úkolů. Claude Code čte tento soubor po každém dokončeném milestonu.
Claude chat (project co-manager) ho průběžně doplňuje.

---

## ✅ HOTOVO — Milestone 1.1 — Setup — 2026-06-21

- [x] Astro init + integrace (storyblok, sitemap)
- [x] astro.config.mjs
- [x] src/styles/tokens.css (design tokeny z ADS v1.1)
- [x] src/styles/global.css
- [x] src/layouts/BaseLayout.astro (meta, hreflang, JSON-LD)
- [x] public/robots.txt
- [x] public/llms.txt
- [x] .env + .env.example
- [x] ověřit .gitignore
- [x] první commit + push → main

---

## ✅ HOTOVO — Milestone 1.2 — Navigace a layout — 2026-06-21

- [x] src/components/layout/Header.astro — fixed, transparent→solid, dropdown, hamburger
- [x] src/components/layout/Footer.astro — kontakt, služby, copyright
- [x] src/layouts/PageLayout.astro — wrapper: BaseLayout + Header + Footer
- [x] i18n routing: / → 301 → /cs/, /cs/ 200, /en/ 200

---

## ✅ HOTOVO — Milestone 1.3 — Homepage — 2026-06-21

Všechny sekce implementovány: Hero, Service Selector, Value Prop, Features 4-col, Stats Bar, Services Grid, References (BU1+GROOMO), Blog Preview (staticky), Footer CTA.

---

## MILESTONE 1.3 — Homepage (/)

Implementuj sekce přesně podle www.aethero.cz/. Jdi na web, projdi stránku, pak implementuj.

- [ ] Hero sekce — fullscreen, gradient blob pozadí (tmavě modrá → fialová), animovaný text
- [ ] Interaktivní výběr služby — 6 karet s čísly 01–06, hover efekt, odkaz na podstránku
- [ ] Sekce "Shopify dodá technologii, aethero strategii" — perex + popis
- [ ] Features grid — 4 sloupce (Technologie / Růst / Automatizace / Důvěra), každý s ikonami a body
- [ ] Stats bar — fialové pozadí, 3 čísla (4,8 mil / 175 zemí / 3 500 vývojářů) + Shopify logo
- [ ] Services grid — 16 služeb ve 4 sloupcích, každá s ikonou a popisem
- [ ] Reference cards — BU1 + GROOMO, obrázek + popis + CTA
- [ ] Zkušenosti sekce — text blok
- [ ] Blog preview — 5 posledních článků (zatím staticky, v Milestone 2.x napojíme Storyblok)
- [ ] Footer CTA — "Máme spolu co probrat?"
- [ ] commit: "feat: Milestone 1.3 — homepage"

Po dokončení: přejdi na Milestone 1.4.

---

## ✅ HOTOVO — Milestone 1.4 — Podstránky CO UMÍME — 2026-06-21

Všech 8 stránek zbuildovalo čistě (11 stránek celkem). Poznámka: /co-umime/potrebuji-brand implementováno best-guess obsahem (živý web vrací 404).

---

## MILESTONE 1.4 — Podstránky CO UMÍME

Každá podstránka má hero sekci + obsah. Podívej se na živý web před implementací každé z nich.

- [ ] /co-umime — přehledová stránka s tab navigací (nebo scroll sekcemi)
- [ ] /potrebuji-brand
- [ ] /novy-shopify-e-shop
- [ ] /prechod-na-shopify
- [ ] /expanze-do-zahranici
- [ ] /rozvoj-a-podpora
- [ ] /analyza-a-strategie
- [ ] /custom-vyvoj-a-aplikace
- [ ] commit: "feat: Milestone 1.4 — sluzby podstranky"

Po dokončení: přejdi na Milestone 1.5.

---

## ✅ HOTOVO — Milestone 1.5 — Aplikace — 2026-06-21

/cs/esyncer a /cs/ae-translator — obě zbuildovány. Kontakt na Báru (bara@aethero.cz, +420 776 325 440) z live webu.

---

## MILESTONE 1.5 — Aplikace

- [ ] /esyncer — stránka eSyncer aplikace
- [ ] /ae-translator — stránka AE Translator aplikace
- [ ] commit: "feat: Milestone 1.5 — aplikace stranky"

Po dokončení: přejdi na Milestone 1.6.

---

## ✅ HOTOVO — Milestone 1.6 — Ostatní stránky — 2026-06-21

21 stránek zbuildováno. Blog slug staticky, case study GROOMO staticky. Storyblok napojení v M2.x.
Poznámka: tým fotky zatím placeholder initials (David/D, Bára/B, Tom/T) — přidat reálné fotky z Dropboxu.

---

## MILESTONE 1.6 — Ostatní stránky

- [ ] /o-nas — tým (David, Bára, Tom), fotky z __1 AETHERO Dropbox složky pokud existují
- [ ] /kontakt — adresa, email, telefon (bez formuláře)
- [ ] /[slug] — šablona pro případové studie (podle /pripadovka-groomo-cz-na-shopify)
- [ ] /blog/[slug] — šablona pro blog článek (dark hero + bílý content)
- [ ] commit: "feat: Milestone 1.6 — ostatni stranky"

Po dokončení: přejdi na Milestone 1.7.

---

## ✅ HOTOVO — Milestone 1.7 — SEO/GEO/AIO vrstva — 2026-06-21

Organization + WebPage JSON-LD na každé stránce. Article JSON-LD na blog. hreflang cs/en/x-default.
Canonical URLs, OG + Twitter meta. Sitemap generován. robots.txt + llms.txt z M1.1.
Lighthouse: nelze spustit z CLI (bez prohlížeče), ověřit po push na CF Pages.

---

## MILESTONE 1.7 — SEO / GEO / AIO vrstva

- [ ] JSON-LD na každé stránce (Organization na všech, Article na blogu, FAQ kde je FAQ sekce)
- [ ] hreflang správně na všech stránkách
- [ ] sitemap.xml generovaný pro cs + en
- [ ] robots.txt hotový (už z 1.1, jen ověř)
- [ ] llms.txt hotový (už z 1.1, jen ověř)
- [ ] Lighthouse audit: Performance ≥90, SEO ≥95, Accessibility ≥90
- [ ] commit: "feat: Milestone 1.7 — SEO GEO AIO vrstva"

Po dokončení: přejdi na Milestone 1.8.

---

## MILESTONE 1.8 — i18n EN verze

- [ ] EN překlad: homepage + /co-umime + /kontakt (MVP, zbytek later)
- [ ] hreflang funkční pro všechny přeložené stránky
- [ ] Cloudflare redirect / → /cs/ podle Accept-Language (pokud je to možné bez Workers)
- [ ] commit: "feat: Milestone 1.8 — EN i18n MVP"

Po dokončení: projekt Fáze 1 hotov. Zapiš do QUESTIONS.md summary a čekej na Davida.

---

## HOTOVÉ

- [x] CLAUDE-CODE-START.md — 2026-06-21
- [x] QUESTIONS.md — 2026-06-21
- [x] NEXT.md — 2026-06-21
