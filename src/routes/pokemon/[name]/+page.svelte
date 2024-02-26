<script lang="ts">
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { SyncLoader } from "svelte-loading-spinners";
	import { createQuery } from "@tanstack/svelte-query";
	import { getPokemon } from "$lib/pokemon/index.js";
	import PokemonInfo from "$lib/components/PokemonInfo.svelte";

	let { name } = $page.params;
	const query = createQuery({
		queryKey: [`pokemon-${name}`],
		queryFn: async () => {
			const pokemon = await getPokemon(name);
			if (!pokemon) throw new Error("Pokemon not found");
			return pokemon;
		},
	});
</script>

{#if $query.isLoading}
	<SyncLoader />
{:else if $query.isSuccess}
	<PokemonInfo pokemon="{$query.data}" />
{:else}
	{goto("/", { replaceState: true })}
{/if}
