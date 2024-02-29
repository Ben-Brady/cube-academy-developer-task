<script lang="ts">
	import { SyncLoader } from "svelte-loading-spinners";
	import PokemonTile from "./PokemonTile.svelte";
	import { type BasicPokemonInfo } from "$lib/pokemon";
	import { createEventDispatcher, onMount, onDestroy } from "svelte";

	const dispatch = createEventDispatcher();
	export let pokemons: BasicPokemonInfo[] = [];
	export let finished: boolean = true;

	function checkReachedBottom() {
		if (finished) return;

		let { top } = loadingIcon.getBoundingClientRect();
		const hasReachedBottom = top <= window.innerHeight;
		if (hasReachedBottom) {
			dispatch("loadMore");
		}
	}

	let interval: any;
	onMount(() => {
		interval = setInterval(checkReachedBottom, 300);
	});
	onDestroy(() => clearInterval(interval));

	let loadingIcon: HTMLDivElement;
</script>

<div id="main">
	<div id="grid">
		{#each pokemons as pokemon}
			<PokemonTile {pokemon} />
		{/each}
	</div>

	<div id="loading-icon" hidden="{finished}" bind:this="{loadingIcon}">
		<SyncLoader color="var(--text)" />
	</div>
</div>

<style>
	#main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	#grid {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	#loading-icon {
		height: 4rem;
	}
</style>
