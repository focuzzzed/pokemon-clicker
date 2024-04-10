import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Namespace } from '../../const';
import { Pokemon } from '../../utils/types';

interface GameProcessState {
  balance: number,
  pokemons: Pokemon[],
}

const initialState: GameProcessState = {
  pokemons: [],
  balance: 0,
};

export const gameProcess = createSlice({
  initialState,
  name: Namespace.Game,
  reducers: {
    savePokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemons.push(action.payload);
    },
    increaseBalance: (state, action: PayloadAction<number>) => {
      state.balance += Math.floor(action.payload);
    },
  },
});

export const { savePokemon, increaseBalance } = gameProcess.actions;
