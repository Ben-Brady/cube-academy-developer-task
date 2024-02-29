<script lang="ts">
	import SearchIcon from "$lib/images/search.svg";
	import { searchPokemon, createPokemonImage, type BasicPokemonInfo } from "$lib/pokemon";
	import { formatPokemonName, formatPokemonNumber } from "$lib/format";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	let search = "";

	let autocomplete: BasicPokemonInfo[] = [];
	$: (async () => {
		autocomplete = await searchPokemon(search);
	})();

	let isSearchFocused = true;
	$: showAutocompleted = isSearchFocused && autocomplete.length > 0;

	let searchBoxWidth = 0;
</script>

<div class="search" bind:clientWidth="{searchBoxWidth}">
	<input
		class="search-input"
		bind:value="{search}"
		on:focus="{() => {
			isSearchFocused = true;
		}}"
		on:focusout="{() => {
			setTimeout(() => {
				isSearchFocused = false;
			}, 300);
		}}"
	/>
	<div class="search-button">
		<img
			width="{25}"
			height="{25}"
			style="width: 25px; height: 25px;"
			src="{SearchIcon}"
			alt=""
		/>
	</div>

	<div class="results-container" class:hidden="{!showAutocompleted}">
		<div class="results" style="width: {searchBoxWidth}px;">
			{#each autocomplete as pokemon}
				<div
					class="row"
					on:click="{() => {
						search = '';
						dispatch('click', pokemon);
					}}"
				>
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
						alt="{pokemon.name}"
					/>
					<span>
						{formatPokemonName(pokemon.name)}
						{formatPokemonNumber(pokemon.id)}
					</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.hidden {
		display: none;
	}

	.search {
		display: grid;
		grid-template-columns: 1fr 3rem;

		height: 2.5rem;
		width: 25rem;
		background: #d9d9d9;
		border-radius: 1rem;

		&:has(input:focus) {
			outline: var(--text) solid 0.1rem;
		}

		.search-input {
			border: none !important;
			background: none;
			height: 100%;
			width: 100%;
			padding: 0 1rem;

			&:focus {
				outline: none;
			}
		}

		.search-button {
			width: 100%;
			align-self: stretch;
			background: rgba(var(--text), 0.5);
			border-left: 1px var(--text) solid;

			display: flex;
			justify-content: center;
			align-items: center;
		}

		.results-container {
			position: absolute;
			margin-top: 3rem;

			.results {
				width: fit-content;
				min-width: 10rem;
				height: 100%;
				border-radius: 0.5rem;
				background: var(--accent);

				.row {
					cursor: pointer;

					display: flex;
					gap: 1rem;
					height: 2rem;
					padding: 0 0.5rem;

					transition: background 0.2s;
					&:hover {
						background: var(--secondary);
					}

					/* First and last should have curved edges to match container */
					&:first-child {
						border-top-left-radius: 0.5rem;
						border-top-right-radius: 0.5rem;
					}

					&:last-child {
						border-bottom-left-radius: 0.5rem;
						border-bottom-right-radius: 0.5rem;
					}

					img {
						width: 2rem;
						height: 2rem;
					}
				}
			}
		}
	}
</style>
