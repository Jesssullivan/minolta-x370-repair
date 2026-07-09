import { error } from '@sveltejs/kit';
import { DOCS } from '$lib/docs';
import { listDocSlugs, renderDoc } from '$lib/server/markdown';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => {
	return listDocSlugs().map((slug) => ({ slug }));
};

export const load: PageServerLoad = ({ params }) => {
	const doc = DOCS.find((entry) => entry.slug === params.slug);
	if (!doc) error(404, 'Not found');

	const { html } = renderDoc(params.slug);
	return { html, title: doc.title };
};
