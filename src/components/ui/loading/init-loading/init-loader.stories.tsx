import { Meta, StoryObj } from '@storybook/react'

import { InitLoader } from '@/components/ui/loading/init-loading/init-loader.tsx'

const meta = {
  title: 'Components/Init-Loader',
  component: InitLoader,
  tags: ['autodocs'],
} satisfies Meta<typeof InitLoader>

export default meta

type Story = StoryObj<typeof meta>

export const InitLoaderStory: Story = {}
