<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { DOCS } from '$lib/docs';

	let { children } = $props();
</script>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-5 py-10 md:flex-row md:gap-12">
	<nav class="shrink-0 md:sticky md:top-10 md:h-fit md:w-56">
		<a href="{base}/" class="block text-sm font-semibold tracking-tight">
			Minolta X-370<br />Repair Log
		</a>
		<ul class="mt-5 flex flex-col gap-1 text-sm">
			{#each DOCS as doc (doc.slug)}
				{@const href = `${base}/docs/${doc.slug}`}
				{@const active = page.url.pathname === href || page.url.pathname === href + '/'}
				<li>
					<a
						{href}
						class="block rounded px-2 py-1 -mx-2 transition-colors"
						class:font-medium={active}
						style:background={active ? 'var(--surface-2)' : 'transparent'}
						style:color={active ? 'var(--text)' : 'var(--text-dim)'}
					>
						{doc.title}
					</a>
				</li>
			{/each}
		</ul>
		<a
			href="https://github.com/Jesssullivan/minolta-x370-repair"
			class="mt-6 block text-xs"
			style:color="var(--text-dim)"
		>
			View source →
		</a>
	</nav>
	<main class="prose min-w-0 flex-1">
		{@render children()}
	</main>
</div>
