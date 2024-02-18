import { useNavigate, Link } from 'react-router-dom'

import s from './forgot-password.module.scss'

import { ForgotPasswordForm, ForgotPasswordFormType } from '@/components/forms/'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export const ForgotPassword = () => {
  const navigate = useNavigate()
  const onSubmit = (data: ForgotPasswordFormType) => {
    navigate(`/check-email/${data.email}`)
  }

  return (
    <div className={s.container}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Forgot your password?
          </Typography>
          <ForgotPasswordForm onSubmit={onSubmit} />
          <Typography variant="body2" className={s.notification}>
            Did you remember your password?
          </Typography>
          <Button as={Link} to={'/sign-in'} variant="link" className={s.loggingIn}>
            Try logging in
          </Button>
        </div>
      </Card>
    </div>
  )
}
