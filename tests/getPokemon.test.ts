import { getPokemon, allPokemon } from "../src/lib/pokemon";

test("Get Pokemon accepts ids", async () => {
    const pokemon = await getPokemon(1);
    expect(pokemon).not.toBe(null);
});

test("Get Pokemon accepts names", async () => {
    const pokemon = await getPokemon("bulbasaur");
    expect(pokemon).not.toBe(null);
});

test("Get Pokemon returns null if pokemon is non-existant", async () => {
    const pokemon = await getPokemon("fake");
    expect(pokemon).toBe(null);
});

// Don't run this test usually, it takes 5 minutes
// test("All pokemon match schema", async () => {
//     const pokemons = await allPokemon();
//     for (const pokemonInfo of pokemons) {
//         const pokemon = await getPokemon(pokemonInfo.id);
//         expect(pokemon).not.toBe(null);
//     }
// }, 10_000_000);
