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

	.info {
		width: 30rem;
		display: flex;
		justify-content: center;

		gap: 1rem;
		.comparison {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			span {
				width: fit-content;
			}

			img {
				height: 2rem;
				width: 2rem;
			}
		}
		.stats {
			border: 0.1rem solid black;
			border-radius: 2rem;

			width: fit-content;
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: row wrap;
			padding: 0rem;
		}
		.types {
			display: flex;
			flex-flow: row wrap;
			gap: 0.5rem;
		}
	}

	h1 {
		text-transform: capitalize;
	}

	img {
		width: 24rem;
		height: auto;
	}
</style>
