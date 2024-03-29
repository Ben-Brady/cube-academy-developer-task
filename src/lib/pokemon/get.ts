import { PokemonSchema, type Pokemon } from "./types";

export async function getPokemon(IdOrName: string | number): Promise<Pokemon | null> {
    const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdOrName}/`);
    if (!r.ok) return null;

    const json = await r.json();
    const data = PokemonSchema.parse(json);
    return data;
}
