import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPassword, ForgotPassword, Learn, Pack, Packs, SignIn, SignUp } from '@/pages'
import { CheckEmail } from '@/pages/check-email/check-email.tsx'
import { Profile } from '@/pages/profile/profile.tsx'

export const publicRoutes: RouteObject[] = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/recover-password',
    element: <ForgotPassword />,
  },
  {
    path: '/create-new-password',
    element: <CreateNewPassword />,
  },
  {
    path: '/check-email/:email',
    element: <CheckEmail />,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/packs" />,
  },
  {
    path: '/packs',
    element: <Packs />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/packs/:id',
    element: <Pack />,
  },
  {
    path: '/packs/:id/learn',
    element: <Learn />,
  },
]
