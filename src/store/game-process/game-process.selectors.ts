import { RootState } from '../store';
import { Namespace } from '../../const';
import { Pokemon } from '../../utils/types';

type GameProcessState = Pick<RootState, Namespace.Game>;

export const getBalance = (state: GameProcessState): number => state[Namespace.Game].balance;

export const getPokemons = (state: GameProcessState): Pokemon[] => state[Namespace.Game].pokemons;
