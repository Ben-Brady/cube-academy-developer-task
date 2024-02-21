import { listPokemonPaginated } from "../src/lib/pokemon/index.js"

test("Search returns results", async () => {
    const pokemon = await listPokemonPaginated();
    expect(pokemon).toHaveLength(100);
})

test("Search returns null when no results", async () => {
    const pokemon = await listPokemonPaginated(1_000_000);
    expect(pokemon).toBe(null);
})
