import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { createStore } from './store/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root is not definded');
}

const container = createRoot(root);

const store = createStore();

container.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);