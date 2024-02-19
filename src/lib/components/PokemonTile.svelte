<script lang="ts">
	import { generateImageUrl } from '$lib/pokemon/index.js';
	export let name: string;
	export let id: number;
</script>

<a href="/pokemon/{name}" style="display: contents;">
	<div>
		<h1>{name}</h1>
		<h2>#{String(id).padStart(4, '0')}</h2>
		<img src={generateImageUrl(id)} alt={name} />
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

		background: grey;
		padding: 1rem;
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
	}

	img {
		width: 100%;
		height: auto;
	}
</style>
