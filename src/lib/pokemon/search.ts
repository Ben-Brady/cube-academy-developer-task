import { z } from 'zod';
import levenshtein from 'js-levenshtein';

export type BasicPokemonInfo = {
	id: number;
	name: string;
	image: Image;
};

type Image = {
	url: string;
	width: number;
	height: number;
};

/**
 * Retrive a paginated list of pokemon, no limit on the number of entries returnable
 * @param limit The number of entries to return, null for no limit
 * @param offset The database offset to start from
 * @returns array of pokemon entries, empty if no pokemon remaining
 */
export async function listPokemon(
	limit: number | null,
	offset: number = 0
): Promise<BasicPokemonInfo[]> {
	if (limit === null) limit = 100_000;

	const PokemonSchema = z.object({
		name: z.string(),
		url: z.string()
	});
	const ResponseSchema = z.object({
		results: z.array(PokemonSchema),
		next: z.string().nullable()
	});

	const r = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
	const json = await r.json();
	const data = ResponseSchema.parse(json);

	const results = data.results.map((entry) => {
		const id = extractIdFromPokemonUrl(entry.url);
		return {
			id,
			name: entry.name,
			image: {
				url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
				width: 475,
				height: 475
			}
		};
	});

	return results;
}

function extractIdFromPokemonUrl(url: string): number {
	const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)/;
	const matches = url.match(regex);
	if (matches?.length !== 2) {
		throw new Error(`Invalid URL: ${url}`);
	}

	return parseInt(matches[1]);
}

let allPokemonCache: BasicPokemonInfo[] | null = null;
export async function allPokemon(): Promise<BasicPokemonInfo[]> {
	if (allPokemonCache === null) {
		allPokemonCache = await listPokemon(null);
	}

	return allPokemonCache;
}

export async function searchPokemon(search: string, limit: number): Promise<BasicPokemonInfo[]> {
	if (search === '') return [];
	const pokemons = await allPokemon();
	if (pokemons === null) return [];
	const DISTANCE_THRESHOLD = 10;

	return pokemons
		.map((pokemon) => ({
			pokemon,
			distance: levenshtein(search, pokemon.name)
		})) // Match up pokemons, and their different from the search string
		.filter((pokemon) => pokemon.distance <= DISTANCE_THRESHOLD) // Filter out pokemons that are too different
		.sort((a, b) => a.distance - b.distance) // Sort by distance
		.map(({ pokemon }) => pokemon) // Remove distances from the array
		.slice(0, limit); // Slice to the limit
}
