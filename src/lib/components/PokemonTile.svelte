<script lang="ts">
	import { createPokemonImage, type BasicPokemonInfo } from "$lib/pokemon";
	export let pokemon: BasicPokemonInfo;

	const { name, id } = pokemon;
	const image = createPokemonImage(id);

	const paddedId = String(id).padStart(4, "0");
</script>

<a href="/pokemon/{name}" style="display: contents;">
	<div class="card">
		<div class="header">
			<h4>{name}</h4>
			<h5>#{paddedId}</h5>
		</div>
		<img src="{image.url}" height="{image.height}" width="{image.width}" alt="{name}" />
	</div>
</a>

<style>
	.card {
		width: 15rem;
		height: 20rem;
		padding: 1.25rem;
		background: linear-gradient(136deg, var(--secondary) 0%, var(--accent) 100%);
		box-shadow: var(--shadow-elevation-medium);
		border-radius: 2rem;

		display: inline-flex;
		gap: 10px;
		align-items: center;
		flex-direction: column;
	}

	.header {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 5px;
	}

	h4,
	h5 {
		width: 100%;
		text-transform: capitalize;
		text-align: center;
		line-break: anywhere;
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
