<script>
	import './styles.css';
	import './reset.css';
	import PokemonAPIIcon from '$lib/images/pokeapi.png';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<div id="app">
		<nav>
			<a href="/" style="display: contents;">
				<img src={PokemonAPIIcon} alt="PokeAPI" />
			</a>
			<div>
				<a href="https://pokeapi.co">Documentation</a>
			</div>
		</nav>
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

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			width: 100%;
			height: var(--NAVBAR-HEIGHT);
			padding: 0.25rem;
			border: 0 solid black;
			border-bottom-width: 1px;
			background: var(--accent);

			img {
				height: 100%;
			}

			div {
				padding: 0 1rem;
			}
		}

		main {
			display: flex;
			align-items: center;
			flex-flow: column;
			padding: 1rem 10vw;
			max-height: calc(100vh - var(--NAVBAR-HEIGHT));
		}
	}
</style>
