# CLAUDE.md

Project-specific guidance for Claude Code in this repo. See `AGENTS.md` first for tool-agnostic context — this file only adds Claude-specific notes.

## Nature of this repo

Markdown-first repair documentation (`docs/*.md`), plus a lightweight SvelteKit + adapter-static site (`src/`) that renders it to GitHub Pages. The site is intentionally minimal — no Bazel, no Nix, no Skeleton UI, none of the `tinyland-inc/site.scaffold` house-scaffold tooling. Don't reach for that scaffold's conventions here; this is a one-off personal repo, not a Tinyland brand site.

### Site build commands

- `pnpm install` — install deps
- `pnpm dev` — local dev server
- `pnpm build` — production build to `build/` (what CI deploys)
- `pnpm preview` — serve the production build locally
- `pnpm check` — svelte-check

Content lives in `docs/*.md` at the repo root, not under `src/`. To add a new doc page: add the `.md` file to `docs/`, then add a matching entry to `DOCS` in `src/lib/docs.ts` (this drives both the nav sidebar and the prerendered route list). Cross-doc links use bare `foo.md` filenames (so they still resolve when browsing `docs/` directly on GitHub) — `src/lib/server/markdown.ts` rewrites them to site routes at render time.

## Working conventions

- Use short, direct commit messages describing the physical repair step taken, not just the doc edit (e.g. "Swap donor coupler lever, confirm full wind stroke restored" rather than "update README").
- When adding a new sourced claim (part number, price, spec value), add the source to `docs/bibliography.md` in the same commit.
- Keep `docs/parts-sourcing.md` prices labeled with the date they were checked — never overwrite a price without updating the date.
- No AI attribution in commit messages or docs.
