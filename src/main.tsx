import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { createStore } from './store/store';
import { router } from './router/router';
import './main.css';
import { STATE_LOCALSTORAGE_KEY } from './const';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root is not defined');
}

const container = createRoot(root);

const store = createStore();

window.addEventListener('unload', () => {
  localStorage.setItem(STATE_LOCALSTORAGE_KEY, JSON.stringify(store.getState()));
});

container.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
