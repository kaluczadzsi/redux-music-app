import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { FavoritesProvider } from './FavoriteContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
    errorElement: <h1>error</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </FavoritesProvider>
);
