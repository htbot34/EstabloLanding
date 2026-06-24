# Establo landing page

A single-page marketing site for **Establo**: a Spanish-first, WhatsApp-based SOP
training and **FARM Animal Care v5** compliance tool for large dairies. The page is
built around one idea, **the hand-off**: a casual Spanish WhatsApp message becomes a
stamped FARM v5 continuing-education training record.

Built with **Vite + React + TypeScript (strict) + Tailwind CSS**, icons from
**lucide-react**, and the pilot form wired to **Formspree**.

---

## Run it locally

Requires [Node](https://nodejs.org) 18+ and [pnpm](https://pnpm.io) 10+.

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server (http://localhost:5173)
pnpm build        # type-check + production build into dist/
pnpm preview      # preview the production build locally
pnpm typecheck    # type-check only (no emit)
```

The two gate commands are `pnpm typecheck` and `pnpm build`; both must pass clean.

---

## Configuration

The Formspree form ID is already wired (see below). The one remaining configurable item,
the GitHub Pages base path, is marked in the source with a `// TODO(Henry):` comment.

### 1. Formspree form ID (already wired)

The pilot-request form posts to [Formspree](https://formspree.io) via `@formspree/react`,
wired to the live form `xvzjzqgz` in **`src/components/PilotForm.tsx`**:

```ts
const [state, handleSubmit] = useForm('xvzjzqgz')
```

To point it at a different form, swap that ID for the code after `/f/` in your Formspree
endpoint (`https://formspree.io/f/XXXXXXXX`). Submissions are emailed to the address on the
Formspree form; the form shows submitting, success, and inline error states.

### 2. GitHub Pages base path

`base` in **`vite.config.ts`** is set to `'/'` because the site is served from the root of
the custom domain **establo.xyz** (configured by **`public/CNAME`**, which Vite copies to
`dist/CNAME` on every build so the domain persists across deploys):

```ts
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

If you ever remove the custom domain and serve from the GitHub project page
(`https://<user>.github.io/EstabloLanding/`) instead, set `base` back to `'/EstabloLanding/'`
and delete `public/CNAME`.

---

## Deploy (GitHub Pages via Actions)

The workflow at **`.github/workflows/deploy.yml`** builds and publishes the site on
every push to `main`:

1. Checks out the repo and installs pnpm + Node 22.
2. Runs `pnpm install --frozen-lockfile` then `pnpm build`.
3. Uploads `dist/` as a Pages artifact and deploys it with `actions/deploy-pages`.

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build and
deployment → Source** and choose **GitHub Actions**. After the first push to `main`,
the site publishes automatically; subsequent pushes redeploy it.

**Custom domain:** the site serves from **establo.xyz**, set by **`public/CNAME`** (kept in
the build output so it persists across deploys). The apex `A`/`AAAA` records point at GitHub
Pages, and HTTPS is enforced under **Settings → Pages**.

---

## Project structure

```
src/
  main.tsx              # entry; loads fonts + mounts <App>
  App.tsx               # page composition + skip link
  index.css             # Tailwind layers, design tokens, reduced-motion rules
  components/
    Nav.tsx             # sticky nav + accessible mobile menu
    Hero.tsx            # dual-surface hand-off (phone -> training record)
    Phone.tsx           # WhatsApp thread mock: text/voice bubbles, citation line
    RecordCard.tsx      # the FARM v5 training-record card (shared)
    TrustStrip.tsx      # three guarantees
    Entrena.tsx         # Train: onboarding + Q&A + voice beat
    Documenta.tsx       # Document: the hand-off + exportable audit artifact
    Confia.tsx          # Trust: safeguards + ALTA / BAJA / ACEPTO consent codes
    PilotForm.tsx       # Formspree pilot-request form
    Footer.tsx          # contact + founder
    ui.tsx              # small shared primitives (labels, chips, waveform)
```

## Design system

- **Color:** evergreen primary (`#1E5A41`), warm manila paper surfaces for the
  "document" side, warm off-white page background. WhatsApp green (`#DCF8C6`) is used
  only on worker chat bubbles.
- **Type:** IBM Plex Sans for headings + body, IBM Plex Mono (with tabular numerals)
  for every ID, timestamp, record number, herd count, and consent code.
- Tokens live in `tailwind.config.js`; fonts are self-hosted via `@fontsource`.

---

Built by Henry Turcotte.
