import { searchPokemon } from "../src/lib/pokemon";

test("Search pokemon returns exact duplicates first", async () => {
    const results = await searchPokemon("mewtwo");
    const firstPokemon = results[0];
    expect(firstPokemon).toHaveProperty("id", 150);
});

test("Search pokemon returns rough matches", async () => {
    const results = await searchPokemon("mewtwo", 5);
    expect(results).toContainEqual({ id: 150, name: "mewtwo" });
    expect(results).toContainEqual({ id: 151, name: "mew" });
});

test("Search pokemon doesn't return low match guesses", async () => {
    const pokemon = await searchPokemon("THIS DOESN'T SOUND LIKE ANY POKEMON NAME");
    expect(pokemon).toHaveLength(0);
});
