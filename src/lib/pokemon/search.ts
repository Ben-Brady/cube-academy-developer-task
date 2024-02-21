import { z } from 'zod';


export type BasicPokemonInfo = {
	id: number;
	name: string;
	image: Image;
};

type Image = {
	url: string;
	width: number;
	height: number;
};

export async function listPokemonPaginated(offset = 0): Promise<BasicPokemonInfo[] | null> {
	const PokemonSchema = z.object({
		name: z.string(),
		url: z.string()
	});
	const ResponseSchema = z.object({
		results: z.array(PokemonSchema)
	});

	const LIMIT = 100;
	const r = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`);
	const json = await r.json();
	const data = ResponseSchema.parse(json);

	if (data.results.length === 0) return null;

	return data.results.map((entry) => ({
		id: extractIdFromUrl(entry.url),
		name: entry.name
	}));
}

function extractIdFromUrl(url: string): number {
	const regex = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)/;
	const matches = url.match(regex);
	if (matches?.length !== 2) {
		throw new Error(`Invalid URL: ${url}`);
	}

	return parseInt(matches[1]);
}

function generateImageFromId(id: number): Image {
	return {
		url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
		width: 475,
		height: 475
	};
}
