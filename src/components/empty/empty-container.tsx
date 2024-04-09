import { Button, Empty } from 'antd';
import { useAppSelector } from '../../hooks/redux';
import { useLazyGetRandomPokemonQuery } from '../../services/pokemon-service';
import { getPokemons } from '../../store/game-process/game-process.selectors';

export function EmptyContainer() {
  const pokemons = useAppSelector(getPokemons);
  const [getRandomPokemon] = useLazyGetRandomPokemonQuery();

  const handleCatchClick = () => getRandomPokemon();

  return (
    <Empty
      image="/pokeball.svg"
      imageStyle={{ height: 60 }}
      description={(<span>Oh you have not pokemons :c</span>)}
    >
      { !pokemons.length && (<Button type="primary" onClick={handleCatchClick}>Catch first now!</Button>)}
    </Empty>
  );
}
