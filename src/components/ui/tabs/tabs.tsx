import { FC } from 'react'

import * as TabsSwitcher from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type TabType = {
  value: string
  text: string
  disabled?: boolean
}

type PropsType = {
  tabs: TabType[]
  value: string
  onValueChange: (value: string) => void
}

export const Tabs: FC<PropsType> = ({ value, tabs, onValueChange }) => {
  return (
    <TabsSwitcher.Root value={value} onValueChange={onValueChange}>
      <TabsSwitcher.List>
        {tabs.map(t => (
          <TabsSwitcher.Trigger
            value={t.value}
            className={s.trigger}
            key={t.value}
            disabled={t.disabled}
          >
            {t.text}
          </TabsSwitcher.Trigger>
        ))}
      </TabsSwitcher.List>
    </TabsSwitcher.Root>
  )
}
