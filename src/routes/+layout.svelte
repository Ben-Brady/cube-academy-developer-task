<script>
	import "./styles.css";
	import "./reset.css";
	import NavigationBar from "$lib/components/NavigationBar.svelte";
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

	const queryClient = new QueryClient();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<QueryClientProvider client="{queryClient}">
	<div id="app">
		<NavigationBar/>
		<main>
			<slot />
		</main>
	</div>
</QueryClientProvider>

<style lang="scss">
	#app {
		--NAVBAR-HEIGHT: 3.5rem;

		display: flex;
		flex-direction: column;
		max-height: 100vh;

		main {
			display: flex;
			align-items: center;
			flex-flow: column;
			padding: 1rem 10vw;
			max-height: calc(100vh - var(--NAVBAR-HEIGHT));
		}
	}
</style>
