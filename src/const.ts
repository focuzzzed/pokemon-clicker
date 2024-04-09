export const BACKEND_USER_URL = 'http://localhost:9999';
export const BACKEND_POKEMON_URL = 'https://pokeapi.co/api/v2/';
export const WEIGHT_TO_PRICE_COEFFICIENT = 0.15;
export const STATE_LOCALSTORAGE_KEY = 'pokemon-clicker-state';

export const enum HttpMethod {
  Post = 'POST',
  Put = 'PUT',
}

export const enum PokemonID {
  Min = 1,
  Max = 1000,
}

export const enum Namespace {
  User = 'USER',
  Game = 'GAME',
}

export const enum AuthStatus {
  Authorized = 'AUTH',
  NonAuthorized = 'NO_AUTH',
}
