import { renderDoc } from '$lib/server/markdown';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const { html } = renderDoc('index');
	return { html };
};
