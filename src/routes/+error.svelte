<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Not found — Minolta X-370 Repair Log</title>
</svelte:head>

<div class="prose">
	<h1>{page.status}</h1>
	<p>{page.error?.message ?? 'Not found.'}</p>
	<p><a href="{base}/">Back to the repair log</a></p>
</div>
