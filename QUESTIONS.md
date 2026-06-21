# QUESTIONS — věci k rozhodnutí

Claude Code sem zapisuje vše nad čím váhá, ale nechce blokovat práci.
David čte tento soubor když má čas a doplní odpovědi.
Claude Code odpovědi přebere a zapracuje — bez nutnosti konverzace.

Formát záznamu:
```
## [datum] — krátký popis
**Kontext:** kde přesně jsem narazil, co jsem implementoval jako výchozí
**Otázka:** co potřebuji rozhodnout
**Výchozí řešení:** co jsem udělal mezitím (co jde změnit)
**Odpověď Davida:** [ČEKÁ]
```

---

## Vstupní kontrola [2026-06-21]

✓ **GitHub:** Repo david-kuba/OS-AI13-023-AETHERO-AI-web-v3 existuje. Git inicializován, remote nastaven. Původně chybělo .git — opraveno.

✓ **Storyblok:** API token funguje. Vrátil stories se story "Home" (uuid: 9bf530d6...). Space je připraven.

⚠️ **Cloudflare hook:** Zablokován automatickým bezpečnostním klasifikátorem Claude Code. Neblokuje start (potřebujeme až od 1.2). David může zkontrolovat ručně: `curl -X POST "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/4b0cc692-c45f-47bd-9510-b5663cfd5585"` — nebo přidat permission do settings.

✓ **Web www.aethero.cz:** Přístupný. Navigace odpovídá spec: Úvod / Co umíme (7 podsekce) / Aplikace (eSyncer, AE Translator) / O nás / Kontakt.
- /esyncer ✓
- /ae-translator ✓ (pravděpodobně, obsah se načetl)
- /o-nas ✓
- /kontakt ✓
- /blog → 404 (buď nemá samostatnou stránku nebo slug je jiný)
- **POZOR:** /co-umime/potrebuji-brand → 404. Živý web má subpages na `/novy-shopify-e-shop` (bez prefixu /co-umime/), ne na `/co-umime/novy-shopify-e-shop`.

✓ **Dropbox /__1 AETHERO:** Přístupná. Klíčové složky:
AETHERO DESIGN SYSTEM alias, 00 BRAND AE, 01 FAKTURACE, 02 WEB, 03 AE PROJEKTY, 04 PRODUKTY, 05 DESIGN + UX, 06-AE DOKUMENTY, 07 DEV, 08-ŠKOLENÍ_KNOWLEDGEBASE, 09 MARKETING OUT, AE APLIKACE, AE TRANSLATOR, OG+MARKETING, Shopify brand assets, TYM foto alias, _OS-AI13-023-AETHETO-AI-web-v3 alias

✓ **Node.js:** v25.6.0 (splňuje 18+), npm 11.8.0

---

## 2026-06-21 — URL struktura sub-stránek CO UMÍME

**Kontext:** Živý web www.aethero.cz má sub-stránky CO UMÍME dostupné jako `/novy-shopify-e-shop` (flat URL, bez prefixu), ale CLAUDE-CODE-START.md definuje strukturu jako `/co-umime/novy-shopify-e-shop` (nested).

**Otázka:** Jakou URL strukturu chceš na novém webu?
- A) Nested: `/co-umime/novy-shopify-e-shop` (hierarchičtější, lepší pro SEO breadcrumbs)
- B) Flat: `/novy-shopify-e-shop` (stejné jako současný web, žádné redirect problémy)

**Výchozí řešení:** Implementuji podle CLAUDE-CODE-START.md — nested `/co-umime/[slug]`. Jde to jednoduše změnit.

**Odpověď Davida:** [ČEKÁ]

---

*Otázky před startem:*
- Výše uvedené URL schéma — flat nebo nested?

→ Doplň odpovědi nebo napiš GO pro start.
