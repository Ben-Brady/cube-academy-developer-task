<script>
	import './styles.css';
	import './reset.css';
	import PokemonImg from '$lib/images/pokeapi.png';
</script>

<div>
	<nav>
		<a href="/" style="display: contents;">
			<img src={PokemonImg} alt="PokeAPI" />
		</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		nav {
			display: flex;

			width: 100%;
			height: 3rem;
			border: 0 solid black;
			border-bottom-width: 1px;
			background: var(--accent);

			img {
				height: 100%;
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
