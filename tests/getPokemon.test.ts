import { getPokemon } from '../src/lib/pokemon/index.js';

test('Get Pokemon accepts ids', async () => {
	const pokemon = await getPokemon(1);
	expect(pokemon).not.toBe(null);
});

test('Get Pokemon accepts names', async () => {
	const pokemon = await getPokemon('bulbasaur');
	expect(pokemon).not.toBe(null);
});

test('Get Pokemon returns null if pokemon is non-existant', async () => {
	const pokemon = await getPokemon('fake');
	expect(pokemon).toBe(null);
});
