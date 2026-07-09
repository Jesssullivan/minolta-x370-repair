export type DocEntry = { slug: string; title: string };

// Source of truth is docs/*.md at the repo root (also browsable directly on
// GitHub). Keep this list in sync with the files there.
export const DOCS: DocEntry[] = [
	{ slug: 'diagnosis', title: 'Diagnosis' },
	{ slug: 'parts-sourcing', title: 'Parts Sourcing' },
	{ slug: 'capacitor-and-tools', title: 'Capacitor & Tools' },
	{ slug: 'bench-testing', title: 'Bench Testing' },
	{ slug: 'focusing-screen-replacement', title: 'Focusing Screen' },
	{ slug: 'bibliography', title: 'Bibliography' }
];
