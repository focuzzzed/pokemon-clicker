import { Divider, Flex } from 'antd';

export function Logo() {
  return (
    <Flex align="center">
      <img src="/pokemon-title.svg" alt="Pokemon logo" />
      <Divider type="vertical" style={{ height: '50%' }} />
      <img src="/clicker-title.svg" alt="Clicker logo" />
    </Flex>
  );
}
