import React from 'react'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  Login,
  Register,
  Orders,
  Products,
  SingleProduct,
  HomeLayout,
  Error,
  Cart,
  Checkout,
  Landing,
} from './pages'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: 'about', element: <About /> },
      { path: 'orders', element: <Orders /> },
      { path: 'products', element: <Products /> },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
  { path: 'login', element: <Login />, errorElement: <Error /> },
  { path: 'register', element: <Register />, errorElement: <Error /> },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
