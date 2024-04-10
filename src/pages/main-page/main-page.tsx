import { Collapse } from 'antd';
import { Header } from '../../components/header/header';
import { PokemonList } from '../../components/pokemon-list/pokemon-list';
import { useAppSelector } from '../../hooks/redux';
import { EmptyContainer } from '../../components/empty/empty-container';
import { getPokemons } from '../../store/game-process/game-process.selectors';
import classes from './main-page.module.css';

export function MainPage() {
  const pokemons = useAppSelector(getPokemons);

  return (
    <div>
      <Header />
      <Collapse
        style={{ maxWidth: '730px', margin: '20px auto' }}
        expandIconPosition="end"
        bordered={false}
        items={[{
          key: '1',
          label: <span className={classes.label}>My Pokemons</span>,
          children: pokemons.length ? <PokemonList pokemons={pokemons} /> : <EmptyContainer />,
        }]}
      />
    </div>
  );
}
