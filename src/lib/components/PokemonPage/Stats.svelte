<script lang="ts">
	import { getPokemon, officialArtworkImageLink } from "$lib/pokemon";
	import type { Pokemon } from "$lib/pokemon";
	import PokemonType from "$lib/components/PokemonType.svelte";
	import SearchBar from "$lib/components/SearchBar.svelte";
	import NumericPokemonStat from "$lib/components/PokemonPage/NumericPokemonStat.svelte";
	import { formatPokemonName } from "$lib/format";
	import { browser } from "$app/environment";

	export let pokemon: Pokemon;

	$: types = pokemon.types.map(pokemon_type => pokemon_type.type.name);

	function getStat(pokemon: Pokemon, name: string): number {
		return pokemon.stats.find(stat => stat.stat.name === name)?.base_stat ?? 0;
	}
	function getComparedStat(pokemon: Pokemon | null, name: string): number | null {
		if (pokemon === null) return null;
		return getStat(pokemon, name);
	}

	function optionalTransform(
		value: number | undefined,
		callback: (_: number) => number,
	): number | null {
		if (value === undefined) return null;
		return callback(value);
	}

	let comparedToId: number | null = null;
	let comparedTo: Pokemon | null = null;

	$: (async () => {
		if (!browser) return;
		if (comparedToId === null) return;
		const pokemon = await getPokemon(comparedToId);
		comparedTo = pokemon;
	})();
</script>

<div class="info">
	<div class="comparison">
		{#if comparedTo === null}
			<span>Compare to ...</span>
		{:else}
			<span>
				Compared to {formatPokemonName(comparedTo.name)}
			</span>
			<img src="{officialArtworkImageLink(comparedTo.id)}" alt="" />
		{/if}
	</div>

	<SearchBar
		on:click="{ev => {
			comparedToId = ev.detail.id;
		}}"
	/>
	<div class="stats">
		<NumericPokemonStat
			stat="Weight"
			unit="kg"
			value="{pokemon.weight / 10}"
			comparedTo="{optionalTransform(comparedTo?.weight, v => v / 10)}"
		/>
		<NumericPokemonStat
			stat="Height"
			unit="m"
			value="{pokemon.height / 10}"
			comparedTo="{optionalTransform(comparedTo?.height, v => v / 10)}"
		/>
		<NumericPokemonStat
			stat="Health"
			unit="hp"
			value="{getStat(pokemon, 'hp')}"
			comparedTo="{getComparedStat(comparedTo, 'hp')}"
		/>
		<NumericPokemonStat
			stat="Defense"
			value="{getStat(pokemon, 'defense')}"
			comparedTo="{getComparedStat(comparedTo, 'defense')}"
		/>
		<NumericPokemonStat
			stat="Attack"
			value="{getStat(pokemon, 'attack')}"
			comparedTo="{getComparedStat(comparedTo, 'attack')}"
		/>
		<NumericPokemonStat
			stat="speed"
			value="{getStat(pokemon, 'speed')}"
			comparedTo="{getComparedStat(comparedTo, 'speed')}"
		/>
		<NumericPokemonStat
			stat="Special Attack"
			value="{getStat(pokemon, 'special-attack')}"
			comparedTo="{getComparedStat(comparedTo, 'special-attack')}"
		/>
		<NumericPokemonStat
			stat="Special Defence"
			value="{getStat(pokemon, 'special-defense')}"
			comparedTo="{getComparedStat(comparedTo, 'special-defense')}"
		/>
	</div>
	<div class="types">
		{#each types as type}
			<PokemonType {type} />
		{/each}
	</div>
</div>

<style lang="scss">
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

	.info {
		width: 30rem;
		padding: 1rem;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
		gap: 1rem;
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
</style>
