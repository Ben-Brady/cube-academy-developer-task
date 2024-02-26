import { listPokemon } from "../src/lib/pokemon";

test("Search returns results", async () => {
    const pokemon = await listPokemon(100, 0);
    expect(pokemon).toHaveLength(100);
});
