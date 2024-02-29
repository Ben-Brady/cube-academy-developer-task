import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getPokemon } from "$lib/pokemon";

export const ssr = false;
export const load: PageLoad = async ({ params }) => {
    const { name } = params;
    const pokemon = await getPokemon(name);
    if (pokemon === null) error(404, "Pokemon Not Found");

    return { pokemon };
};
