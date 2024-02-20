<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte';
	import PokemonTile from '$lib/components/PokemonTile.svelte';
	import { listPokemonPaginated, type BasicPokemonInfo } from '$lib/pokemon/index.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let pokemons: BasicPokemonInfo[] = $page.data.pokemon;

	async function nextPage() {
		const nextPage = await listPokemonPaginated(pokemons.length);
		pokemons = [...pokemons, ...nextPage];
	}
</script>

<Metadata title="Home" description="Pokémon API" />

<section>
	{#each pokemons as pokemon}
		<PokemonTile name={pokemon.name} id={pokemon.id} />
	{/each}
</section>
<button on:click={nextPage}>Next Page</button>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 1rem;
	}

	button {
		width: fit-content;
	}
</style>
