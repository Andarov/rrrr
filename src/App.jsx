// rrd
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layout
import MainLayout from './layouts/MainLayout'

// loader
import { getData } from './pages/Home'

// pages
import { Home } from './pages/index'

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: getData
          },
        ],
      },
    ],
    {
      future: {
        v7_startTransition: true, 
      }
    }
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
