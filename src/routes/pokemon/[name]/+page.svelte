<script lang="ts">
	import { page } from "$app/stores";
	import PokemonInfo from "$lib/components/PokemonPage/index.svelte";
	import Metadata from "$lib/components/Metadata.svelte";

	let { pokemon } = $page.data;
	const capatalise = (text: string) => text
		.split(" ")
		.map(word => word[0].toUpperCase() + word.substring(1))
		.join(" ");
</script>

<Metadata title="{capatalise(pokemon.name)}" description="Pokémon API" />
<PokemonInfo {pokemon} />
