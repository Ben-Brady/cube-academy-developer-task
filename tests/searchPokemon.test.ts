import { searchPokemon } from "../src/lib/pokemon/index.js"

test("Search pokemon returns exact duplicates first", async () => {
	const results = await searchPokemon("mewtwo");
    const firstPokemon = results[0];
	expect(firstPokemon).toHaveProperty('id', 150);
});

test("Search pokemon doesn't return low match guesses", async () => {
	const pokemon = await searchPokemon("THIS DOESN'T SOUND LIKE ANY POKEMON NAME");
	expect(pokemon).toHaveLength(0)
});
