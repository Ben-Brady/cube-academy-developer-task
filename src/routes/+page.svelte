<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#each $page.data.pokemon as name}
		<li>
			<a href="/pokemon/{name}">{name}</a>
		</li>
	{/each}
</section>

<style>
</style>
