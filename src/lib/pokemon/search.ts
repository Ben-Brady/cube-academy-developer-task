import { z } from "zod";
import levenshtein from "js-levenshtein";

export type BasicPokemonInfo = {
    id: number;
    name: string;
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
    offset: number = 0,
): Promise<BasicPokemonInfo[]> {
    if (limit === null) limit = 100_000;

    const PokemonSchema = z.object({
        name: z.string(),
        url: z.string(),
    });
    const ResponseSchema = z.object({
        results: z.array(PokemonSchema),
        next: z.string().nullable(),
    });

    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const json = await r.json();
    const data = ResponseSchema.parse(json);

    const results = data.results.map(entry => {
        const id = extractIdFromPokemonUrl(entry.url);
        return { id, name: entry.name };
    });

    return results;
}

export function createPokemonImage(id: number): Image {
    return {
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        width: 475,
        height: 475,
    };
}
function extractIdFromPokemonUrl(url: string): number {
    const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)/;
    const matches = url.match(regex);
    if (matches?.length !== 2) {
        throw new Error(`Invalid URL: ${url}`);
    }

    return parseInt(matches[1]);
}

/**
 * List all pokemon in the database, results are cached
 * @returns Array of every pokemon's basic info
 */
export async function allPokemon(): Promise<BasicPokemonInfo[]> {
    if (allPokemonCache === null) {
        allPokemonCache = await listPokemon(null);
    }

    return allPokemonCache;
}
// A basic cache is used to prevent repeated requests on name searches
// Prehaps use a stored cache in localStorage if requests are too numerous
let allPokemonCache: BasicPokemonInfo[] | null = null;

/**
 * Text search for pokemon names, matches using levenshtein distance
 * @param name The name to search for
 * @param limit The number of results to return
 * @returns Array of basic pokemon info, empty if no matches
 */
export async function searchPokemon(name: string, limit: number = 5): Promise<BasicPokemonInfo[]> {
    if (name === "") return [];
    const pokemons = await allPokemon();
    if (pokemons === null) return [];
    const DISTANCE_THRESHOLD = 3;

    function distance(comparison: string): number {
        let score = 0;
        if (comparison.startsWith(name)) score -= 100;
        else if (comparison.includes(name)) score -= 10;
        score += levenshtein(name, comparison);
        return score;
    }
    return pokemons
        .map(pokemon => ({
            pokemon,
            distance: distance(pokemon.name), // Distance between the search string and the pokemon name
        })) // Match up pokemons, and their different from the search string
        .filter(pokemon => pokemon.distance <= DISTANCE_THRESHOLD) // Filter out pokemons that are too different
        .sort((a, b) => a.distance - b.distance) // Sort by distance
        .map(match => match.pokemon) // Remove distances from the array
        .slice(0, limit); // Slice to the limit
}
