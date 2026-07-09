import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { marked } from 'marked';
import { base } from '$app/paths';
import { DOCS } from '$lib/docs';

// docs/*.md lives at the repo root, one level above this SvelteKit project's
// root — read it directly rather than duplicating content under src/.
const DOCS_DIR = join(process.cwd(), 'docs');

/** Rewrite bare `foo.md` links (the convention used across docs/*.md, since
 * they're also browsed directly on GitHub) into base-aware site routes. */
function rewriteDocLinks(markdown: string): string {
	return markdown.replace(/\]\(([a-z0-9-]+)\.md\)/gi, (_match, slug) => {
		const target = slug === 'index' ? `${base}/` : `${base}/docs/${slug}`;
		return `](${target})`;
	});
}

export function renderDoc(slug: string): { html: string; raw: string } {
	const raw = readFileSync(join(DOCS_DIR, `${slug}.md`), 'utf-8');
	const html = marked.parse(rewriteDocLinks(raw), { gfm: true, async: false }) as string;
	return { html, raw };
}

export function listDocSlugs(): string[] {
	return DOCS.map((doc) => doc.slug);
}
