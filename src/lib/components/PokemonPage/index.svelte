<script lang="ts">
	import { type Pokemon } from "$lib/pokemon";
	import PokemonType from "$lib/components/PokemonType.svelte";
	import PokemonStat from "$lib/components/PokemonPage/PokemonStat.svelte";
	import FavouriteButton from "$lib/components/PokemonPage/FavouriteButton.svelte";
	export let pokemon: Pokemon;

	$: types = pokemon.types.map(pokemon_type => pokemon_type.type.name);
	const getStat = (name: string) =>
		pokemon.stats.find(stat => stat.stat.name === name)?.base_stat ?? 0;
</script>

<div id="layout">
	<div class="pokemon">
		<h1>
			{pokemon.name}
			<FavouriteButton pokemonId="{pokemon.id}" />
		</h1>
		<img src="{pokemon.sprites.front_default}" alt="$query" />
		<div class="types">
			{#each types as type}
				<PokemonType {type} />
			{/each}
		</div>
	</div>
	<div class="stats">
		<PokemonStat stat="Weight" value="{`${pokemon.weight / 10}kg`}" />
		<PokemonStat stat="Height" value="{`${pokemon.height / 10}m`}" />
		<PokemonStat stat="Health" value="{`${getStat('hp')}hp`}" />
		<PokemonStat stat="Defense" value="{getStat('defense').toString()}" />
		<PokemonStat stat="Attack" value="{getStat('attack').toString()}" />
		<PokemonStat stat="Speed" value="{getStat('speed').toString()}" />
		<PokemonStat stat="Special Attack" value="{getStat('special-attack').toString()}" />
		<PokemonStat stat="Special Defence" value="{getStat('special-defense').toString()}" />
	</div>
</div>

<style lang="scss">
	#layout {
		display: flex;
	}

	.pokemon,
	.stats {
		display: flex;
		align-items: center;
		flex-flow: column;
		padding: 1rem;
	}

	.stats {
		width: 30rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: row wrap;
		padding: 1rem;
	}

	h1 {
		text-transform: capitalize;
	}

	img {
		width: 24rem;
		height: auto;

		/* Icons are pixilated */
		image-rendering: pixelated;
	}

	.types {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5rem;
	}
</style>
