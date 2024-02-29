export { allPokemon, searchPokemon, listPokemon, createPokemonImage } from "./search";
export { getPokemon } from "./get";
export { getEvolutionChain, type EvolutionChain } from "./evolution";
export {
    dreamWorldImageLink,
    homeImageLink,
    officialArtworkImageLink,
    showdownImageLink,
} from "./images";
export type { BasicPokemonInfo } from "./search";
export type * from "./types";

// * Allow the user to view a list of pokemon (extra points for using pagination).
// * Allow the user to search that list of pokemon by the pokemon's name.
// * Allow the user to view a pokemon's details and statistics.
// * Compare two pokemon's statistics together, side-by-side.
// * Allow the user to maintain a list of their favourite Pokemon (extra points for data persistence (e.g. local storage)).
// * Should run on modern web browsers (Chrome, Firefox, Safari, Opera etc).
