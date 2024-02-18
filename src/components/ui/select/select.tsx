import { FC, ReactNode } from 'react'

import * as Label from '@radix-ui/react-label'
import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './select.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

export type OptionType = {
  value: string
  label: string
}
export type SelectPropsType = {
  label?: string
  placeholder?: ReactNode
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: any
  options: OptionType[]
  disabled?: boolean
  required?: boolean
  className?: string
  small?: boolean
}

export const Select: FC<SelectPropsType> = ({
  label,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options,
  disabled,
  required,
  className,
  small,
}) => {
  const classes = {
    root: clsx(s.label, disabled && s.labelDisabled, className),
    trigger: clsx(s.trigger, disabled && s.triggerDisabled, small && s.small),
    icon: clsx(s.icon, disabled && s.iconDisabled),
    item: clsx(s.item, small && s.small),
  }

  return (
    <Label.Root>
      <Typography variant={'body2'} as={'label'} className={classes.root}>
        {label}
      </Typography>
      <RadixSelect.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
      >
        <RadixSelect.Trigger className={classes.trigger} asChild aria-label={'select'} tabIndex={1}>
          <div>
            <RadixSelect.Value placeholder={placeholder} />
            <Icon name={'arrowDown'} className={classes.icon} />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content position={'popper'} className={s.content}>
            <RadixSelect.Viewport>
              {options.map(el => (
                <RadixSelect.Item key={el.value} value={el.value} className={classes.item}>
                  <RadixSelect.ItemText>{el.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </Label.Root>
  )
}
