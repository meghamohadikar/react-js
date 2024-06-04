import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
//import Grocery from './components/Grocery';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamix imoprt

const Grocery = lazy(() => import('./components/Grocery'));

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
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h3>Grocery is loading..</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
