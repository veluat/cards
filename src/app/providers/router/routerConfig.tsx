import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes.tsx'

import { Layout } from '@/components/layout'
import { InitLoader } from '@/components/ui/loading'
import { useGetMeQuery } from '@/features/auth'

const PrivateRoutes = () => {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()
  const isAuthenticated = !!me && !('success' in me)

  if (isMeLoading) return <InitLoader />

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error Boundary</div>,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  const { isLoading: isMeLoading } = useGetMeQuery()

  if (isMeLoading) return <InitLoader />

  return <RouterProvider router={router} />
}
