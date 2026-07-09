# AGENTS.md

Context for any coding/AI agent working in this repository.

## What this repo is

A documentation-only repair log for a single physical object (a Minolta X-370 35mm SLR), not a software project. `docs/*.md` is the single source of truth — "contributions" are markdown edits recording what was actually done to the camera, sourced parts, and bench-test results.

There is a thin SvelteKit + adapter-static site (`src/`) that renders `docs/*.md` at <https://jesssullivan.github.io/minolta-x370-repair/> (private Pages, repo-access only). It's a presentation layer, not the content source — never add content by editing `src/`, only by editing `docs/*.md`. See `CLAUDE.md` for the site's build commands. Previously mkdocs-material; migrated off it 2026-07 since Material for MkDocs entered maintenance mode ahead of the MkDocs 2.0 plugin-system removal (see `docs/bibliography.md`).

## Ground rules for agents

- **Never assert a live price, stock level, or listing as current fact.** Marketplace data (eBay, KEH, Kamerastore, etc.) goes stale within hours. Always re-search before quoting a number to the user, and phrase prices as "as of <date>, X reported Y" with a source link, not as an unqualified fact.
- **Prefer primary/official sources over forum paraphrase** when both are available: factory service manual > OEM parts diagram > repair-forum thread > secondhand summary. Note which tier a claim came from in `docs/bibliography.md`.
- **This is a 45+ year old mechanical/electronic device.** Default to the lowest-risk diagnostic step first (visual/mechanical check, then DMM, then destructive disassembly). Don't recommend desoldering or removing the mirror box as a first move.
- **Electrical scope is tiny**: this camera runs on ~3V. Standard DMM/scope safety precautions for mains-adjacent work do not apply, but probe loading and polarity on the electrolytic capacitor absolutely do — flag polarity explicitly whenever giving capacitor-replacement instructions.
- When updating `docs/diagnosis.md`, keep the falsified hypotheses in place (struck through or marked resolved) rather than deleting them — the ranking logic is useful history for future issues on the same camera.
- Keep `CLAUDE.md` and this file in sync if editing conventions change; don't let them drift into contradicting each other.
