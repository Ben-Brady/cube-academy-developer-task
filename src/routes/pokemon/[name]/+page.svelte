<script lang="ts">
	import { page } from '$app/stores';
	import { SyncLoader } from 'svelte-loading-spinners';
	import { createQuery } from '@tanstack/svelte-query';
	import { getPokemon } from '$lib/pokemon/index.js';
	import PokemonInfo from '$lib/components/PokemonInfo.svelte';

	let { name } = $page.params;
	const query = createQuery({
		queryKey: [`pokemon-${name}`],
		queryFn: async () => {
			return await getPokemon(name);
		}
	});
</script>

{#if $query.isLoading}
	<SyncLoader />
{:else}
	<PokemonInfo pokemon={$query.data}/>
{/if}
