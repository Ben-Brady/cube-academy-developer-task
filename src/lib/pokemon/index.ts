import { z } from 'zod';

export type BasicPokemonInfo = {
	id: number;
	name: string;
};

export async function listPokemon(page = 0): Promise<BasicPokemonInfo[]> {
	const PokemonSchema = z.object({
		name: z.string(),
		url: z.string()
	});
	const ResponseSchema = z.object({
		results: z.array(PokemonSchema)
	});

	const LIMIT = 100;
	const offset = page * LIMIT;
	const r = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`);
	const json = await r.json();
	const data = ResponseSchema.parse(json);
	return data.results.map((entry) => ({
		id: extractIdFromUrl(entry.url),
		name: entry.name,
	}));
}

function extractIdFromUrl(url: string): number {
	const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)/
	const matches = url.match(regex);
	if (matches?.length !== 2) {
		throw new Error(`Invalid URL: ${url}`);
	}

	return parseInt(matches[1]);
}

export function generateImageUrl(id: number): string {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// * Allow the user to view a list of pokemon (extra points for using pagination).
// * Allow the user to search that list of pokemon by the pokemon's name.
// * Allow the user to view a pokemon's details and statistics.
// * Compare two pokemon's statistics together, side-by-side.
// * Allow the user to maintain a list of their favourite Pokemon (extra points for data persistence (e.g. local storage)).
// * Should run on modern web browsers (Chrome, Firefox, Safari, Opera etc).
