<!-- The button used for favouriting a pokemon -->
<script lang="ts">
	import { addFavourite, removeFavourite, isFavourited } from "$lib/favourites";
	export let pokemonId: number;

	let favourited = isFavourited(pokemonId);

	function click() {
		if (favourited) {
			removeFavourite(pokemonId);
		} else {
			addFavourite(pokemonId);
		}

		favourited = !favourited;
	}

	$: text = favourited ? "Remove Favourite 🤍" : "Add Favourite 🤍";
</script>

<button on:click="{click}"> {text} </button>

<style lang="scss">
	button {}
</style>
