<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>PokéAPI / {title}</title>
	<meta name="description" content="{description}" />

	<meta property="og:title" content="{title}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:locale" content="en_GB" />

	<meta property="twitter:title" content="{title}" />
	<meta property="twitter:description" content="{description}" />
</svelte:head>
