<script>
	import './styles.css';
	import './reset.css';
	import PokemonImg from '$lib/images/pokeapi.png';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<div id="app">
		<nav>
			<a href="/" style="display: contents;">
				<img src={PokemonImg} alt="PokeAPI" />
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
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;

			width: 100%;
			height: 3.5rem;
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
		}
	}
</style>
