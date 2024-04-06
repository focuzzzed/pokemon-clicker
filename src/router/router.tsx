import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login-page/login-page";
import { ErrorPage } from "../pages/error-page/error-page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
]);