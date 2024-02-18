import { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import s from '@/components/ui/file-uploader/file-uploader.module.scss'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'

const meta = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
} satisfies Meta<typeof FileUploader>

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const DefaultModeButton: Story = {
  render: () => {
    return <FileUploader update={() => {}} validate={() => true} />
  },
}

// @ts-ignore
export const FullWidthButton: Story = {
  render: () => {
    return (
      <FileUploader update={() => {}} validate={() => true} as={Button} fullWidth>
        Choose File
      </FileUploader>
    )
  },
}

// @ts-ignore
export const IconButtonUploader: Story = {
  render: () => {
    return (
      <FileUploader
        update={() => {}}
        validate={() => true}
        as={IconButton}
        icon={<Icon name="more" />}
      />
    )
  },
}

export const ModeDrag: Story = {
  render: () => {
    return (
      <FileUploader update={() => {}} validate={() => true} mode={'drag'}>
        <span>Upload</span>
        <Icon height={16} width={16} className={s.icon} name={'more'} />
      </FileUploader>
    )
  },
}
