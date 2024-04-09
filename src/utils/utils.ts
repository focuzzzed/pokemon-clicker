import { UserData } from '../services/user-service';
import { Pokemon } from './types';
import { STATE_LOCALSTORAGE_KEY, WEIGHT_TO_PRICE_COEFFICIENT } from '../const';

export const getRandomInteger = (min: number, max: number, numsAfterDigit = 0) => {
  const minValue = Math.floor(min);
  const maxValue = Math.ceil(max);
  return Number(Math.ceil(Math.random() * (maxValue - minValue + 1)).toFixed(numsAfterDigit));
};

const PAYLOAD_INDEX = 1;

export const decodeJWT = (jwt: string): UserData | null => {
  try {
    return JSON.parse(atob(jwt.split('.')[PAYLOAD_INDEX]));
  } catch {
    return null;
  }
};

export const calculateValuePerSecond = (pokemons: Pokemon[]) => pokemons
  .reduce((acc, pokemon) => acc + Math.floor(pokemon.weight * WEIGHT_TO_PRICE_COEFFICIENT), 0);

export const checkPreloadedState = (): Record<string, unknown> | undefined => {
  const state = localStorage.getItem(STATE_LOCALSTORAGE_KEY);

  if (state) {
    return JSON.parse(state);
  }

  return undefined;
};
