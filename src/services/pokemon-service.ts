import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_POKEMON_URL, PokemonID } from '../const';
import { PokemonResponse } from '../utils/types';
import { getRandomInteger } from '../utils/utils';
import { Token } from '../utils/token';
import { savePokemon } from '../store/game-process/game-process';

export const pokemonAPI = createApi({
  reducerPath: 'pokemonAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_POKEMON_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${Token.get()}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getRandomPokemon: build.query<PokemonResponse, void>({
      query: () => `pokemon/${getRandomInteger(PokemonID.Min, PokemonID.Max)}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const {
          data: {
            name, weight, id, sprites: { front_default: image },
          },
        } = await queryFulfilled;
        dispatch(savePokemon({
          name, weight, id, image,
        }));
      },
    }),
  }),
});

export const { useGetRandomPokemonQuery, useLazyGetRandomPokemonQuery } = pokemonAPI;
