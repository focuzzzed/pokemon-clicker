import { Input, Button, Form } from 'antd';
import { useEffect } from 'react';
import { UserData, useLoginMutation } from '../../services/user-service';
import { Token } from '../../utils/token';

export function LoginForm() {
  const [login, { data, isLoading }] = useLoginMutation();

  const handleSubmitClick = (userData: UserData) => {
    login(userData);
  };

  useEffect(() => {
    if (data) {
      const { accessToken } = data;
      Token.save(accessToken);
    }
  }, [data]);

  return (
    <Form
      className="login-form"
      onFinish={handleSubmitClick}
      layout="vertical"
    >
      <Form.Item
        name="login"
        label="Login"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          type="email"
          placeholder="Input login"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          type="password"
          placeholder="Input password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          block
          htmlType="submit"
          className="login-form-button"
          style={{
            backgroundColor: '#365FAC',
            borderRadius: '1px',
          }}
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}
