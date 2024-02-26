<script lang="ts">
	import { SyncLoader } from 'svelte-loading-spinners';
	import { type Pokemon } from '$lib/pokemon/index.js';
	import PokemonType from '$lib/components/PokemonType.svelte';
	export let pokemon: Pokemon;

	$: types = pokemon.types.map((pokemon_type) => pokemon_type.type.name);
</script>

<h1>
	{pokemon.name}
</h1>
<img src={pokemon.sprites.front_default} alt="$query" />
<span>Weight: {pokemon.weight / 10}Kg</span>
<span>Height: {pokemon.height / 10}m</span>
<span>Types:</span>
<div class="types">
	{#each types as type}
		<PokemonType {type} />
	{/each}
</div>

<style>
	h1 {
		text-transform: capitalize;
	}

	.types {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
	}
</style>
