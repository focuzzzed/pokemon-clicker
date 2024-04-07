import { createBrowserRouter } from "react-router-dom";
import { AuthPage } from "../pages/auth-page/auth-page";
import { ErrorPage } from "../pages/error-page/error-page";

export const router = createBrowserRouter([
  { path: '/', element: <AuthPage /> },
  { path: '*', element: <ErrorPage /> }
]);