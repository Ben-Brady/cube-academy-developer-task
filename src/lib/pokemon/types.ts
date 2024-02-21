import { z } from "zod";

export const spritesSchema = z.object({
  front_default: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  back_default: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
})

export const formSchema = z.object({
	name: z.string(),
	url: z.string(),
});

export const abilitySchema = z.object({
  is_hidden: z.boolean(),
  slot: z.number(),
  ability: formSchema,
});

export const gameVersionSchema = z.object({
  game_index: z.number(),
  version: formSchema,
});

export const versionSpecificDetailsSchema = z.object({
	rarity: z.number(),
	version: formSchema
});

export const heldItemSchema = z.object({
	item: formSchema,
	version_details: z.array(versionSpecificDetailsSchema).nullable()
});

export const moveSchema = z.object({
	move: formSchema
	// version_group_details?: VersionGroupDetailsEntity[] | null
});

export const pokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  base_experience: z.number(),
  height: z.number(),
  is_default: z.boolean(),
  order: z.number(),
  weight: z.number(),
  location_area_encounters: z.string(),
  abilities: z.array(abilitySchema),
  held_items: z.array(heldItemSchema),
  sprites: spritesSchema,
  // forms: PokemonForm[],
  // game_indices: VersionGameIndex[],
  // moves: PokemonMove[],
  // species: PokemonForm,
  // cries: PokemonCries,
  // stats: PokemonStat[],
  // types: PokemonTypes[],
  // past_types: PokemonTypePast[],
});





// export type VersionGroupDetailsEntity = {
//   level_learned_at: number
//   version_group: PokemonForm
//   move_learn_method: PokemonForm
// }

// export type PokemonCries = {
//   latest: string;
//   legacy: string;
// }
// export type PokemonStat = {
//   base_stat: number;
//   effort: number;
//   stat: PokemonForm;
// }
// export type PokemonTypes = {
//   slot: number;
//   type: PokemonForm;
// }
// export type PokemonTypePast  = {
//   generation: PokemonForm;
//   types?: (PokemonTypes)[] | null;
// }

export type PokemonSpritesSchema = z.infer<typeof spritesSchema>;
export type PokemonForm = z.infer<typeof formSchema>;
export type PokemonAbility = z.infer<typeof abilitySchema>;
export type PokemonGameVersion = z.infer<typeof gameVersionSchema>;
export type PokemonVersionSpecificDetails = z.infer<typeof versionSpecificDetailsSchema>;
export type PokemonHeldItem = z.infer<typeof heldItemSchema>;
export type PokemonMove = z.infer<typeof moveSchema>;
export type PokemonPokemon = z.infer<typeof pokemonSchema>;
export type PokemonSprites = z.infer<typeof spritesSchema>;
export type Pokemon = z.infer<typeof pokemonSchema>;
