<script lang="ts">
	import { officialArtworkImageLink, type Pokemon } from "$lib/pokemon";
	import { formatPokemonName, formatPokemonNumber } from "$lib/format";
	import Stats from "./Stats.svelte";
	import FavouriteButton from "./FavouriteButton.svelte";

	export let pokemon: Pokemon;
</script>

<div id="layout">
	<div class="pokemon">
		<h1>
			{formatPokemonName(pokemon.name)}
			{formatPokemonNumber(pokemon.id)}
			<FavouriteButton pokemonId="{pokemon.id}" />
		</h1>
		<img src="{officialArtworkImageLink(pokemon.id)}" alt="{pokemon.name}" />
	</div>
	<Stats {pokemon} />
</div>

<style lang="scss">
	#layout {
		display: flex;
	}

	.pokemon {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem;
	}

	h1 {
		text-transform: capitalize;
	}

	img {
		width: 24rem;
		height: auto;
	}
</style>
