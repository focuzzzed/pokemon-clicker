import { Card } from 'antd';
import {
  Navigate, Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import classes from './auth-page.module.css';
import { Logo } from '../../components/logo/logo';

const tabList = [
  {
    key: '/auth/register',
    tab: 'Sign Up',
  },
  {
    key: '/auth/login',
    tab: 'Sign In',
  },
];

export function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();

  if (['/auth/', '/auth'].includes(location.pathname)) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <Card
        style={{
          minWidth: '400px',
          boxShadow: '5px 8px 24px 5px rgba(58, 58, 58, 0.1)',
        }}
        tabList={tabList}
        activeTabKey={location.pathname}
        onTabChange={(key) => navigate(key)}
        tabProps={{ centered: true }}
      >
        <Outlet />
      </Card>
    </div>
  );
}
