import { Meta, StoryObj } from '@storybook/react'

import { QueryLoader } from '@/components/ui/loading'

const meta = {
  title: 'Components/Query-Loader',
  component: QueryLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof QueryLoader>

export default meta

type Story = StoryObj<typeof meta>

export const QueryLoaderStory: Story = {}
