import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      //children route
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/restaurants/:resId', //resId is dynamic
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
