import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Tabs } from '@/components/ui/tabs/tabs.tsx'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta

const tabs = [
  { value: 'myCards', text: 'My cards' },
  { value: 'allCards', text: 'All cards' },
  { value: 'other', text: 'Other' },
  { value: 'disabled', text: 'Disabled', disabled: true },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('myCards')

    return (
      <div>
        <Tabs value={value} tabs={tabs} onValueChange={value => setValue(value)} />
        {value}
      </div>
    )
  },
}
