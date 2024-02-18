import { Meta, StoryObj } from '@storybook/react'

import { ProfileInfo } from '../header/profile-info'

import { Avatar } from '@/components/ui/avatar'
import { DropDown, DropDownItem, DropDownItemWithIcon } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon/icon.tsx'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDown,
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: () => {
    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown>
          <DropDownItemWithIcon icon={<Icon name="play" />} text="Learn" />
          <DropDownItemWithIcon icon={<Icon name="edit" />} text="Edit" />
          <DropDownItemWithIcon icon={<Icon name="delete" />} text="Delete" />
        </DropDown>
      </div>
    )
  },
}

// @ts-ignore
export const WithProfile: Story = {
  render: () => {
    const userData = {
      name: 'Alex',
      email: 'alexandr.1996@list.ru',
      avatar: '',
    }

    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown
          trigger={
            <button style={{ all: 'unset', cursor: 'pointer' }}>
              <Avatar userName={'Alex'} />
            </button>
          }
        >
          <DropDownItem>
            <ProfileInfo {...userData} />
          </DropDownItem>
          <DropDownItemWithIcon icon={<Icon name="user" />} text="My profile" />
          <DropDownItemWithIcon icon={<Icon name="logout" />} text="Sign out" />
        </DropDown>
      </div>
    )
  },
}
