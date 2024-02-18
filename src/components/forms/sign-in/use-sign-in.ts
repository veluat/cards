import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean(),
})

export type SignInFormProps = z.infer<typeof signInSchema>

export const useSignIn = () => {
  const { control, handleSubmit } = useForm<SignInFormProps>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  return { control, handleSubmit }
}
