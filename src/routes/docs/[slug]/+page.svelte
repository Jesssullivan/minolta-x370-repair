<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.title} — Minolta X-370 Repair Log</title>
</svelte:head>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html data.html}
