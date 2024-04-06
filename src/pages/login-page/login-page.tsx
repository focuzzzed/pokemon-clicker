import classes from './login-page.module.css';
import { Card, Divider } from "antd";
import { useState } from "react";
import { LoginForm } from "../../components/login-form/login-form";
import { RegisterForm } from '../../components/register-form/register-form';

const tabList = [
  {
    key: 'SignUp',
    tab: 'Sign Up',
  },
  {
    key: 'SignIn',
    tab: 'Sign In',
  },
];

const contentList: Record<string, React.ReactNode> = {
  SignIn: <LoginForm />,
  SignUp: <RegisterForm/>,
};

export const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('SignIn');
  const onTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src='pokemon-logo.png' alt='Pokemon logo'/>
        <Divider type="vertical" style={{height: '54px'}}/>
        <img src='clicker-logo.png' alt='Clicker logo'/>
      </div>
      <Card
        style={{
          minWidth: '400px',
          boxShadow: "5px 8px 24px 5px rgba(58, 58, 58, 0.1)"
        }}
        tabList={tabList}
        activeTabKey={activeTab}
        onTabChange={onTabChange}
        tabProps={{ centered: true }}
      >
        {contentList[activeTab]}
      </Card>
    </div>
  );
};