import { allPokemon, type BasicPokemonInfo } from "./pokemon"
import { z } from "zod";

const LOCAL_STORAGE_KEY = "favourites";
const Schema = z.number().array();

function retriveFavourites(): number[] {
    const json = localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]";
    const data = JSON.parse(json);
    const favorute_ids = Schema.parse(data);
    return favorute_ids;
}

export function addFavourite(id: number) {
    const favorute_ids = retriveFavourites();

    if (favorute_ids.includes(id)) return
    favorute_ids.push(id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorute_ids));
}

export function removeFavourite(id: number) {
    let favorute_ids = retriveFavourites();
    if (!favorute_ids.includes(id)) return
    favorute_ids = favorute_ids.filter((i) => i !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorute_ids));
}

export function isFavourited(id: number) {
    const favorute_ids = retriveFavourites();
    return favorute_ids.includes(id);
}

export async function getFavourites(): Promise<BasicPokemonInfo[]> {
    const pokemon = await allPokemon();
    const favorute_ids = retriveFavourites();

    const pokemon_id_map = Object.fromEntries(pokemon.map(e => [e.id.toString(), e]));
    return favorute_ids.map(id => pokemon_id_map[id.toString()])
}
