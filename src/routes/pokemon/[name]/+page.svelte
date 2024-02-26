<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { createQuery } from '@tanstack/svelte-query';
	import { getPokemon, type Pokemon } from '$lib/pokemon/index.js';
	import PokemonType from '$lib/components/PokemonType.svelte';

	let { name } = $page.params;

	const query = createQuery({
		queryKey: [`pokemon-${name}`],
		queryFn: async () => {
			return await getPokemon(name);
		}
	});
	let pokemon: Pokemon;
	$: pokemon = $query.data;
	$: types = (() => {
		if (!pokemon) return [];
		return pokemon.types.map((pokemon_type) => pokemon_type.type.name);
	})();
</script>

{#if $query.isLoading}
	<SyncLoader />
{:else}
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
{/if}

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
