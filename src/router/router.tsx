import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page/auth-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { RegisterForm } from '../components/register-form/register-form';
import { LoginForm } from '../components/login-form/login-form';

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthPage />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);
