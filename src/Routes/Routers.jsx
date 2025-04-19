import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import Favorite from '../Pages/Favorite/Favorite';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Error from '../Pages/Error/Error';
import PhoneDetails from '../Components/PhoneDetails/PhoneDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('/phones.json'),
        Component: Home,
      },

      {
        path: '/about',
        Component: About,
      },
      {
        path: '/favorite',
        Component: Favorite,
      },
      {
        path: '/phoneDetails/:id',
        loader: () => fetch('/phones.json'),
        Component: PhoneDetails,
      },
    ],
  },
]);
