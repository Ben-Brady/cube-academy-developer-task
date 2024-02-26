import { z } from 'zod';

// Types taken from https://pokeapi.co/docs/v2#pokemon

export const NamedResourceSchema = z.object({
	name: z.string(),
	url: z.string()
});

export const PokemonSchema = z.object({
	id: z.number(),
	name: z.string(),
	base_experience: z.number(),
	height: z.number(),
	is_default: z.boolean(),
	order: z.number(),
	weight: z.number(),
	location_area_encounters: z.string(),
	abilities: z.lazy(() => PokemonAbilitySchema.array()),
	held_items: z.lazy(() => PokemonHeldItemSchema.array()),
	species: z.lazy(() => NamedResourceSchema),
	forms: z.lazy(() => NamedResourceSchema.array()),
	game_indices: z.lazy(() => VersionGameIndexSchema.array()),
	moves: z.lazy(() => PokemonMoveSchema.array()),
	stats: z.lazy(() => PokemonStatSchema.array()),
	types: z.lazy(() => PokemonTypeSchema.array()),
	past_types: z.lazy(() => PokemonTypePast.array()),
	cries: z.object({
		latest: z.string(),
		legacy: z.string()
	}),
	sprites: z.object({
		front_default: z.string().nullable(),
		front_female: z.string().nullable(),
		front_shiny: z.string().nullable(),
		front_shiny_female: z.string().nullable(),
		back_default: z.string().nullable(),
		back_female: z.string().nullable(),
		back_shiny: z.string().nullable(),
		back_shiny_female: z.string().nullable()
	})
});

export const PokemonAbilitySchema = z.object({
	is_hidden: z.boolean(),
	slot: z.number(),
	ability: NamedResourceSchema
});

export const ItemVersionDetailsSchema = z.object({
	rarity: z.number(),
	version: NamedResourceSchema
});
export const PokemonHeldItemSchema = z.object({
	item: NamedResourceSchema,
	version_details: ItemVersionDetailsSchema.array().nullable()
});

export const VersionGroupDetailsSchema = z.object({
	level_learned_at: z.number(),
	version_group: NamedResourceSchema,
	move_learn_method: NamedResourceSchema
});

export const PokemonMoveSchema = z.object({
	move: NamedResourceSchema,
	version_group_details: VersionGroupDetailsSchema.array().nullable()
});

export const PokemonTypeSchema = z.object({
	slot: z.number(),
	type: NamedResourceSchema
});

export const PokemonStatSchema = z.object({
	base_stat: z.number(),
	effort: z.number(),
	stat: NamedResourceSchema
});

export const VersionGameIndexSchema = z.object({
	game_index: z.number(),
	version: NamedResourceSchema
});

export const PokemonTypePast = z.object({
	generation: NamedResourceSchema,
	types: PokemonTypeSchema.array().nullable()
});


export type PokemonForm = z.infer<typeof NamedResourceSchema>;
export type PokemonAbility = z.infer<typeof PokemonAbilitySchema>;
export type PokemonHeldItem = z.infer<typeof PokemonHeldItemSchema>;
export type PokemonMove = z.infer<typeof PokemonMoveSchema>;
export type PokemonPokemon = z.infer<typeof PokemonSchema>;
export type Pokemon = z.infer<typeof PokemonSchema>;
