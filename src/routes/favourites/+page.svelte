<script lang="ts">
	import Metadata from "$lib/components/Metadata.svelte";
	import PokemonTile from "$lib/components/PokemonTile.svelte";
	import { getFavourites } from "$lib/favourites";
	import type { BasicPokemonInfo } from "$lib/pokemon";
  import { onMount } from "svelte";

	let favourites: BasicPokemonInfo[] = [];
	onMount(async () => {
		favourites = await getFavourites();
	})
</script>

<Metadata title="Home" description="Pokémon API" />

<div id="scroll">
	{#each favourites as pokemon}
		<PokemonTile {pokemon} />
	{/each}
</div>

<style>
	#scroll {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}
</style>
