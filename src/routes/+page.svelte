<script lang="ts">
	import { SyncLoader } from 'svelte-loading-spinners';
	import Metadata from '$lib/components/Metadata.svelte';
	import PokemonTile from '$lib/components/PokemonTile.svelte';
	import { listPokemon, type BasicPokemonInfo } from '$lib/pokemon/index.js';
	import { onMount } from 'svelte';

	let pokemons: BasicPokemonInfo[] = [];

	let finished: boolean = false;

	onMount(nextPage);
	async function nextPage() {
		const nextPage = await listPokemon(100, pokemons.length);
		if (nextPage.length === 0) {
			finished = true;
			return;
		}

		pokemons = [...pokemons, ...nextPage];
	}
</script>

<Metadata title="Home" description="Pokémon API" />

<div id="scroll">
	{#each pokemons as pokemon}
		<PokemonTile {pokemon} />
	{/each}
</div>

<div style="display: contents;" class:visible={!finished} id="loading-icon">
	<SyncLoader color={'#000000'} />
</div>

<style>
	#scroll {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 1rem;
	}

	.visible {
		display: none;
	}
</style>
