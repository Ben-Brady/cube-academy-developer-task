<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import PokemonPage from "$lib/components/PokemonPage/index.svelte";
	import Metadata from "$lib/components/Metadata.svelte";
	import { SyncLoader } from "svelte-loading-spinners";
	import { getPokemon } from "$lib/pokemon";
	import { formatPokemonName } from "$lib/format";
	import { createQuery } from "@tanstack/svelte-query";

	let { name } = $page.params;

	const query = createQuery({
		queryKey: ["pokemon", name],
		queryFn: async () => {
			const pokemon = await getPokemon(name);
			if (!pokemon) throw new Error("Not found");
			return pokemon;
		},
		retry: false,
	});
</script>

{#if $query.isSuccess}
	<Metadata title="{formatPokemonName($query.data.name)}" description="Pokémon API" />
	<PokemonPage pokemon="{$query.data}" />
{:else if $query.isFetching}
	<div class="center">
		<SyncLoader color="var(--text)" />
	</div>
{:else}
	{goto("/", { replaceState: true })}
{/if}

<style>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
