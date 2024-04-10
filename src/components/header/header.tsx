import { Card, Flex } from 'antd';
import { Logo } from '../logo/logo';
import { Balance } from '../balance/balance';

export function Header() {
  return (
    <Card>
      <Flex justify="space-between">
        <Logo />
        <Balance />
      </Flex>
    </Card>
  );
}
