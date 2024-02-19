<script lang="ts">
	import Metadata from '$lib/components/Metadata.svelte';
	import PokemonTile from '$lib/components/PokemonTile.svelte';
	import { page } from '$app/stores';

	const pokemons = $page.data.pokemon;
</script>

<Metadata title="Home" description="Pokémon API" />

<section>
	{#each pokemons as pokemon}
		<PokemonTile name={pokemon.name} id={pokemon.id} />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 1rem;
	}
</style>
