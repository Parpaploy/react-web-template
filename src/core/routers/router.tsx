import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import PrivateLayout from '../../layouts/private-layout';
import Template from '../../pages/template';
import PublicLayout from '../../layouts/public-layout';
import PublicNavbar from '../../layouts/public-navbar';
import PrivateNavbar from '../../layouts/private-navbar';

export const router = createBrowserRouter([
  {
    path: '',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <PublicNavbar />,
        children: [{ path: '', element: <Template /> }],
      },
    ],
  },
  {
    path: '/private',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <PrivateNavbar />,
        children: [{ path: '', element: <Homepage /> }],
      },
    ],
  },
]);
