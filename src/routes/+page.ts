import type { PageLoad } from './$types.js';
import { listPokemon } from '$lib/pokemon/index.js';

export const load: PageLoad = async () => {
	const pokemon = await listPokemon();
	return { pokemon };
};
