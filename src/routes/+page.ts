import type { PageLoad } from './$types.js';
import { listPokemonPaginated } from '$lib/pokemon/index.js';

export const load: PageLoad = async () => {
	const pokemon = await listPokemonPaginated();
	return { pokemon };
};
