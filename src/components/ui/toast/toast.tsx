import * as ToastPrimitives from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import s from './toast.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type ToastProps = {
  variant?: 'default' | 'destructive'
  title?: string
  description: string
  className?: string
  swipeDirection?: ToastPrimitives.ToastProviderProps['swipeDirection']
  duration?: number
}

export const Toast = (props: ToastProps) => {
  const {
    variant = 'default',
    description,
    duration = 3000,
    swipeDirection = 'right',
    title,
    className,
  } = props

  const classes = {
    root: clsx(s.root, variant === 'destructive' && s.destructive, className),
  }

  return (
    <ToastPrimitives.Provider swipeDirection={swipeDirection} duration={duration}>
      <ToastPrimitives.Root className={classes.root}>
        <ToastPrimitives.Title className={s.title} asChild>
          <Typography variant={'h2'}>{title}</Typography>
        </ToastPrimitives.Title>
        <ToastPrimitives.Description className={s.description} asChild>
          <Typography variant={'body2'}>{description}</Typography>
        </ToastPrimitives.Description>
        <ToastPrimitives.Close className={s.close} aria-label="Close">
          <Icon name={'close'} />
        </ToastPrimitives.Close>
      </ToastPrimitives.Root>
      <ToastPrimitives.Viewport className={s.viewport} />
    </ToastPrimitives.Provider>
  )
}
