import {
  Card, Flex, Typography,
} from 'antd';
import { Pokemon } from '../../utils/types';
import { WEIGHT_TO_PRICE_COEFFICIENT } from '../../const';

interface PokemonCardProps {
  pokemon: Pokemon,
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name, image, weight } = pokemon;
  const price = Math.floor(weight * WEIGHT_TO_PRICE_COEFFICIENT);

  return (
    <Card styles={{ body: { padding: '10px', width: '165px', fontWeight: '700' } }}>
      <Flex vertical>
        <Flex justify="space-between">
          <Typography>{name}</Typography>
          <button
            type="button"
            style={{
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <img src="/setting.svg" alt="Open settings" />
          </button>
        </Flex>
        <img src={image} alt={`${name} view`} />
        <Flex justify="space-between">
          <Typography>Вес</Typography>
          <Typography style={{ fontWeight: '400' }}>{weight}</Typography>
        </Flex>
        <Flex justify="space-between">
          <Typography>Денег/сек</Typography>
          <Typography style={{ fontWeight: '400' }}>{price}</Typography>
        </Flex>
      </Flex>
    </Card>
  );
}
