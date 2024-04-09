import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from '../pages/auth-page/auth-page';
import { ErrorPage } from '../pages/error-page/error-page';
import { RegisterForm } from '../components/register-form/register-form';
import { LoginForm } from '../components/login-form/login-form';
import { MainPage } from '../pages/main-page/main-page';

export const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthPage />,
    children: [
      { path: 'login', element: <LoginForm /> },
      { path: 'register', element: <RegisterForm /> },
    ],
  },
  { path: 'main', element: <MainPage /> },
  { path: '*', element: <ErrorPage /> },
]);
