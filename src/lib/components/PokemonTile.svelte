<script lang="ts">
	import { type BasicPokemonInfo } from '$lib/pokemon/index.js';
	export let pokemon: BasicPokemonInfo;

	const { name, id, image } = pokemon;

	const paddedId = String(id).padStart(4, '0')
</script>

<a href="/pokemon/{name}" style="display: contents;">
	<div>
		<h1>{name}</h1>
		<h2>#{paddedId}</h2>
		<img src={image.url} height={image.height} width={image.width} alt={name} />
	</div>
</a>

<style>
	div {
		width: 12rem;
		height: auto;
		border-radius: 1rem;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;

		padding: 1rem;
		background-image: linear-gradient(125deg, var(--primary) 0%, var(--secondary) 100%);
		box-shadow: var(--shadow-elevation-medium);
	}

	h1,
	h2 {
		text-transform: capitalize;
	}

	h1 {
		font-size: 1.4rem;
	}

	h2 {
		font-size: 1rem;
		line-break: anywhere;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
