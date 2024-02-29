export const capatalise = (text: string) =>
    text
        .split(" ")
        .map(word => word[0].toUpperCase() + word.substring(1))
        .join(" ");

export const formatPokemonName = (name: string) => capatalise(name.replace("-", " "));
export const formatPokemonNumber = (number: number | string) => `#${number.toString().padStart(4, "0")}`;
