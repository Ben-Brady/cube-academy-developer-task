<!-- The button used for favouriting a pokemon -->
<script lang="ts">
	import { addFavourite, removeFavourite, isFavourited } from "$lib/favourites";
	import StarEmpty from "$lib/images/star-empty.svg";
	import StarFilled from "$lib/images/star-filled.svg";
	export let pokemonId: number;

	let favourited = isFavourited(pokemonId);

	function click() {
		let keyframe;
		if (favourited) {
			removeFavourite(pokemonId);
			keyframe = { transform: "scale(0.8)" };
		} else {
			addFavourite(pokemonId);
			keyframe = { transform: "scale(1.2)" };
		}

		img.animate([{ transform: "scale(1)" }, keyframe, { transform: "scale(1)" }], {
			duration: 200,
			easing: "ease-out",
		});
		favourited = !favourited;
	}

	let img: HTMLImageElement;
</script>

<button on:click="{click}">
	<img
		src="{favourited ? StarFilled : StarEmpty}"
		alt="{favourited ? '★' : '☆'}"
		bind:this="{img}"
	/>
</button>

<style lang="scss">
	button {
		border: none;
		background: none;
		cursor: pointer;

		img {
			height: 2rem;
			width: auto;
		}
	}
</style>
