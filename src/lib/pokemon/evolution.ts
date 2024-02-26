import { NamedResourceSchema } from './types';
import { z } from 'zod';

export async function getEvolutionChain(id: number) {
	const r = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
	const json = await r.json();
	const data = EvolutionChainSchema.parse(json);
	return data;
}

// We have to use a base, in order to do a recursive schema.
// As well as defining the recusion on the type manually
const baseEvolutionChainSchema = z.object({
	is_baby: z.boolean(),
	species: NamedResourceSchema,
	evolution_details: z.lazy(() => EvolutionDetailSchema)
});

const EvolutionChainSchema: z.ZodType<EvolutionChain> = baseEvolutionChainSchema.extend({
	evolves_to: z.lazy(() => EvolutionChainSchema.array())
});

export type EvolutionChain = z.infer<typeof baseEvolutionChainSchema> & {
	evolves_to: EvolutionChain[];
};

const EvolutionDetailSchema = z.object({
	item: NamedResourceSchema.describe(
		'The item required to cause evolution this into Pokémon species.'
	), //
	trigger: NamedResourceSchema.describe(
		'The type of event that triggers evolution into this Pokémon species.'
	),
	gender: NamedResourceSchema.describe(
		'id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species'
	),
	held_item: NamedResourceSchema, // NamedAPIResource (Item): The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.
	known_move: NamedResourceSchema, // NamedAPIResource (Move): The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.
	known_move_type: NamedResourceSchema, // NamedAPIResource (Type): The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.
	location: NamedResourceSchema, // NamedAPIResource (Location): The location the evolution must be triggered at.
	min_level: z.number(), // The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.
	min_happiness: z.number(), // The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.
	min_beauty: z.number(), // The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.
	min_affection: z.number(), // The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.
	needs_overworld_rain: z.boolean(), // Whether or not it must be raining in the overworld to cause evolution this Pokémon species.
	party_species: NamedResourceSchema, // The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.
	party_type: NamedResourceSchema, // The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.
	relative_physical_stats: z.number(), // The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.
	time_of_day: z.string(), // The required time of day. Day or night.
	trade_species: NamedResourceSchema, // Pokémon species for which this one must be traded.
	turn_upside_down: z.boolean() // Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
});
