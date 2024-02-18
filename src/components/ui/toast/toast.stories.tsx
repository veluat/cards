import type { Meta, StoryObj } from '@storybook/react'

import { Toast } from './'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Success',
    description: 'Your message has been sent.',
    variant: 'default',
  },
}

export const Error: Story = {
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    variant: 'destructive',
  },
}
