# CLAUDE.md

Project-specific guidance for Claude Code in this repo. See `AGENTS.md` first for tool-agnostic context — this file only adds Claude-specific notes.

## Nature of this repo

Markdown-only repair documentation. No build/test/lint commands exist or are needed. Do not scaffold a build system, CI, or package manifest here — that would be scope creep on a personal repair log.

## Working conventions

- Use short, direct commit messages describing the physical repair step taken, not just the doc edit (e.g. "Swap donor coupler lever, confirm full wind stroke restored" rather than "update README").
- When adding a new sourced claim (part number, price, spec value), add the source to `docs/bibliography.md` in the same commit.
- Keep `docs/parts-sourcing.md` prices labeled with the date they were checked — never overwrite a price without updating the date.
- No AI attribution in commit messages or docs.
