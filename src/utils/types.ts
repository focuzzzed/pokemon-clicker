export interface Pokemon {
  id: number,
  name: string,
  weight: number,
  image: string,
}

export interface PokemonResponse {
  name: string,
  weight: number,
  id: number,
  sprites: { front_default: string }
}
