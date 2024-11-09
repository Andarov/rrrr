// rr
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layout
import MainLayout from './layouts/MainLayout'

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
