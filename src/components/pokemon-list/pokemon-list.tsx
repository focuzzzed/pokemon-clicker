import { Flex } from 'antd';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { Pokemon } from '../../utils/types';

interface PokemonListProps {
  pokemons: Pokemon[]
}

export function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <Flex>
      {pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
    </Flex>
  );
}
