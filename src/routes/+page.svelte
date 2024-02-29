<script lang="ts">
	import Metadata from "$lib/components/Metadata.svelte";
	import PokemonScroll from "$lib/components/PokemonScroll/index.svelte";
	import { listPokemon, type BasicPokemonInfo } from "$lib/pokemon";
	import { onMount } from "svelte";

	let pokemons: BasicPokemonInfo[] = [];
	let finished: boolean = false;

	async function nextPage() {
		const nextPage = await listPokemon(100, pokemons.length);
		if (nextPage.length === 0) {
			finished = true;
			return;
		}

		pokemons = [...pokemons, ...nextPage];
	}
	onMount(nextPage);
</script>

<Metadata title="Home" description="Pokémon API" />
<PokemonScroll {pokemons} {finished} on:loadMore="{nextPage}" />
