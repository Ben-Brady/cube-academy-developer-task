import { pokemonSchema, type Pokemon } from './types.js';

export async function getPokemon(IdOrName: string | number): Promise<Pokemon | null> {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdOrName}/`);
    if (!r.ok) return null;

    const json = await r.json();
    const data = pokemonSchema.parse(json);
    return data;
}
