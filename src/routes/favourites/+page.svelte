<script lang="ts">
	import { onMount } from "svelte";
	import Metadata from "$lib/components/Metadata.svelte";
	import PokemonScroll from "$lib/components/PokemonScroll/index.svelte";
	import { getFavourites } from "$lib/favourites";
	import type { BasicPokemonInfo } from "$lib/pokemon";

	let favourites: BasicPokemonInfo[] = [];
	onMount(async () => {
		favourites = await getFavourites();
	});
</script>

<Metadata title="Home" description="Pokémon API" />
<PokemonScroll pokemons="{favourites}" />
