<script lang="ts">
	import { SyncLoader } from 'svelte-loading-spinners';
	import { type Pokemon } from '$lib/pokemon/index.js';
	import PokemonType from '$lib/components/PokemonType.svelte';
	export let pokemon: Pokemon;

	$: types = pokemon.types.map((pokemon_type) => pokemon_type.type.name);
</script>

<div id="layout">
	<div class="pokemon">
		<h1>
			{pokemon.name}
		</h1>
		<img src={pokemon.sprites.front_default} alt="$query" />
		<div class="types">
			{#each types as type}
				<PokemonType {type} />
			{/each}
		</div>
	</div>
	<div class="stats">
		<span>Weight: {pokemon.weight / 10}Kg</span>
		<span>Height: {pokemon.height / 10}m</span>
	</div>
</div>

<style lang="scss">
	#layout {
		display: flex;
	}

	.pokemon,
	.stats {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem;
	}
	.stats {
		justify-content: center;
	}

	h1 {
		text-transform: capitalize;
	}

	img {
		width: 24rem;
		height: auto;

		/* Icons are pixilated */
		image-rendering: pixelated;
	}

	.types {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
	}
</style>
