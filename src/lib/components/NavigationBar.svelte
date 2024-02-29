<script lang="ts">
	import type { Pokemon } from "$lib/pokemon";
	import PokemonAPIIcon from "$lib/images/pokeapi.png";
	import StarIcon from "$lib/images/star-filled.svg";
	import FileIcon from "$lib/images/file.svg";
	import SearchBar from "./SearchBar.svelte";

	function handleSearch(e: CustomEvent<Pokemon>) {
		// Using browser navigation instead of svelte routing
		// Svelte doesn't handle /pokemon/[name] correctly
		// Currently this causes a full page reload
		// TODO: Investigate why not, this works for now
		window.location.href = `/pokemon/${e.detail.name}`;
	}
</script>

<nav>
	<div class="left">
		<a
			href="/"
			style="width: 109px; height: 41px; padding: 2px; border-radius: 10px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 10px; display: inline-flex"
		>
			<img src="{PokemonAPIIcon}" alt="Home" />
		</a>
	</div>

	<SearchBar on:click="{handleSearch}" />

	<div class="right">
		<a href="/favourites" class="link">
			<img src="{StarIcon}" alt="" />
			<div class="h5">Favourites</div>
		</a>
		<a href="https://pokeapi.co" class="link">
			<img src="{FileIcon}" alt="" />
			<div class="h5">Documentation</div>
		</a>
	</div>
</nav>

<style lang="scss">
	nav {
		width: 100%;
		height: var(--NAVBAR-HEIGHT);
		padding: 0.5rem;
		background: var(--background);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 0 solid var(--text);
	}

	.left,
	.right {
		display: flex;
		align-items: center;
		gap: 1rem;
		height: 100%;
		width: 30rem;
	}

	.left {
		justify-content: flex-start;
	}
	.right {
		justify-content: flex-end;
	}

	.link {
		padding: 2px;
		border-radius: 10px;
		justify-content: flex-start;
		align-items: center;
		gap: 5px;
		display: flex;
		img {
			width: 25px;
			height: 25px;
		}
	}

	img {
		height: 100%;
	}
</style>
