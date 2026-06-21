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

## ✅ HOTOVO — Milestone 1.8 — i18n EN verze — 2026-06-21

EN homepage (/en/), EN co-umime (/en/co-umime/), EN kontakt (/en/kontakt/) — 23 pages built.
Header a Footer jsou lang-aware (přepínají EN/CS texty a href dle prop).
Accept-Language redirect: statický / → /cs/ 301 funguje. Accept-Language detekce by potřebovala
CF Worker (functions/_middleware.js) — možné, ale CF Pages connection ještě není otestovaná.

---

## MILESTONE 1.8 — i18n EN verze

- [ ] EN překlad: homepage + /co-umime + /kontakt (MVP, zbytek later)
- [ ] hreflang funkční pro všechny přeložené stránky
- [ ] Cloudflare redirect / → /cs/ podle Accept-Language (pokud je to možné bez Workers)
- [ ] commit: "feat: Milestone 1.8 — EN i18n MVP"

Po dokončení: projekt Fáze 1 hotov. Zapiš do QUESTIONS.md summary a čekej na Davida.

---

---

## ✅ HOTOVO — Visual Audit + Design System — 2026-06-21

- [x] Visual audit CS homepage vs. www.aethero.cz — pixel-perfect
- [x] .zk-heading: 70px → 40px, line-height 1.4 → 1.1
- [x] .footer-cta-heading: 52px → 70px, weight 700 → 600, line-height 1.4
- [x] .footer-cta-link: 24px → 40px, barva → var(--action) #0DD4CD
- [x] Footer brand: logo + badge flex row (bylo stacked), odstraněn filter
- [x] /design-system stránka vytvořena (Logo, Barvy, Typografie, Spacing, Komponenty)
- [x] Commit: 1b01173 — pushed to main
- [x] Notion: project card + session log vytvořeny
  - Project card: https://app.notion.com/p/386c2dd1066081f7bec2c0cb810af113
  - Session log: https://app.notion.com/p/386c2dd10660814b9d95c5f7e24dc697

---

## FÁZE 2 — Iterace visual audit (probíhá)

### ✅ 2.3 — EN subpages — HOTOVO 2026-06-21
- [x] /en/co-umime/{potrebuji-brand,novy-shopify-e-shop,prechod-na-shopify,expanze-do-zahranici,rozvoj-a-podpora,analyza-a-strategie,custom-vyvoj-a-aplikace}
- [x] /en/esyncer + /en/ae-translator — EN app pages
- [x] /en/o-nas — EN about page s placeholder initials
- [x] /en/[slug] — EN case study template (GROOMO)
- [x] /en/blog/[slug] — EN blog template (4 statické články)
- [x] Build: 24 → 39 pages — commit 1f1d990

### ✅ 2.4 — CF Worker — HOTOVO 2026-06-21
- [x] functions/_middleware.js — Accept-Language redirect CS/EN (302, pouze na /)
- [x] Build: stále 39 pages, functions/ je pure CF Pages middleware
- [ ] Napojit aethero.agency na CF Pages — čeká na CF dashboard nastavení (David)

### 2.1 — Mobile audit
- [ ] Porovnat mobile layout vs. live www.aethero.cz (375px, 768px)
- [ ] Header hamburger menu — velikost, animace
- [ ] Hero sekce mobile
- [ ] Stats bar mobile
- [ ] Services grid mobile (4col → 1/2col)
- [ ] Footer mobile layout

### 2.2 — Tým fotky (BLOCKER — čeká na Davida)
- [ ] /cs/o-nas + /en/o-nas: nahradit placeholder initials reálnými fotkami
- [ ] Složka TYM foto alias nenalezena lokálně — viz QUESTIONS.md
- [ ] Optimalizovat pro web (WebP, max 400×400)

### 2.5 — Storyblok (Fáze 2)
- [ ] Blog: napojit Storyblok stories
- [ ] Case studies: dynamické stránky

---

## HOTOVÉ (tracking)

- [x] CLAUDE-CODE-START.md — 2026-06-21
- [x] QUESTIONS.md — 2026-06-21
- [x] NEXT.md — 2026-06-21
