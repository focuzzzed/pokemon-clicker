import { Flex } from 'antd';
import { useEffect } from 'react';
import classes from './balance.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getBalance, getPokemons } from '../../store/game-process/game-process.selectors';
import { calculateValuePerSecond } from '../../utils/utils';
import { increaseBalance } from '../../store/game-process/game-process';

export function Balance() {
  const balance = useAppSelector(getBalance);
  const pokemons = useAppSelector(getPokemons);
  const dispatch = useAppDispatch();
  const valuePerSecond = calculateValuePerSecond(pokemons);

  useEffect(() => {
    let increaseBalanceInterval: number;

    if (valuePerSecond) {
      increaseBalanceInterval = setInterval(() => {
        dispatch(increaseBalance(valuePerSecond));
      }, 1000);
    }

    return () => clearInterval(increaseBalanceInterval);
  }, [valuePerSecond, dispatch]);

  return (
    <Flex gap="5px" align="center">
      <img src="/coin.svg" width="32px" alt="Pokecoin" />
      <span className={classes.value}>{balance}</span>
    </Flex>
  );
}
