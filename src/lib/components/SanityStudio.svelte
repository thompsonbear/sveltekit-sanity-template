<script lang="ts">
	import { renderStudio, defineConfig, type Config } from 'sanity';
	import { onMount } from 'svelte';
	export let config: Config;
	let studioEl: HTMLElement;
	onMount(() => {
		if (studioEl) {
			const sanityConfig = defineConfig(config);
			renderStudio(studioEl, sanityConfig);
		}
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
	<meta name="robots" content="noindex" />
	<meta name="referrer" content="same-origin" />
</svelte:head>

<div id="studio">
	<div bind:this={studioEl} />
</div>

<style>
	#studio {
		/* 16px correction for 8px margin on body */
		height: calc(100vh - 16px);
	}
	#studio > div {
		height: 100%;
	}
</style>
