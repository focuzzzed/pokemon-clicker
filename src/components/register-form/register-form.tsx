import { Input, Button, Form} from "antd";
import { UserData, useRegisterMutation } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
import { isError } from "../../utils/typeguards";



export const RegisterForm = () => {
  const [register, {isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmitClick = (userData: UserData) => {
      register(userData).then((res) => {
        if(isError(res)) {
          return null;
        }

        navigate('/auth/login');
      } );
  };

  return (
    <Form
      className="register-form"
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
      <Form.Item
        label="Confirm Password"
        name="Confirm"
        dependencies={['password']}
        rules={[{ required: true,},
          ({ getFieldValue }) => ({
            validator(_, value: string) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords must match!'));
            },
          }),
        ]}
      >
        <Input
          type="password"
          placeholder="Input your password again"
        />
      </Form.Item>

      <Form.Item>
        <Button
          loading={isLoading}
          type="primary"
          block={true}
          htmlType="submit"
          className="login-form-button"
          style={{
            backgroundColor: '#365FAC',
            borderRadius: '1px',
          }}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}