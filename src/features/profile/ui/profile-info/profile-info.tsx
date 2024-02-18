import { FC, memo, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './profile-info.module.scss'

import { EditProfileForm, EditProfileFormProps } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { useLogoutMutation, useUpdateProfileMutation } from '@/features/auth'
import { AvatarUploader } from '@/features/profile/ui'

export type DataType = {
  avatar: string
  email: string
  name: string
}

type PropsType = {
  data: DataType
  update: (data: EditProfileFormProps) => void
}

export const ProfileInfo: FC<PropsType> = memo(({ data, update }) => {
  const [isEditMode, setEditMode] = useState(false)

  const [updateProfile] = useUpdateProfileMutation()

  const [logout] = useLogoutMutation()

  const navigate = useNavigate()

  const onSubmit = (data: EditProfileFormProps) => {
    update(data)
    toggleEditMode()
  }
  const toggleEditMode = () => {
    setEditMode(prevIsEditMode => !prevIsEditMode)
  }

  const onLogout = () => {
    logout()
    navigate('/sign-in')
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Personal Information
          </Typography>
          <AvatarUploader
            name={data.name}
            avatar={data.avatar}
            updateAvatar={updateProfile}
            editable={!isEditMode}
          />
          {isEditMode ? (
            <EditProfileForm
              onSubmit={onSubmit}
              className={s.form}
              initialValues={{ name: data.name }}
            />
          ) : (
            <>
              <div className={s.nickName}>
                <Typography as="h1" variant="large">
                  {data.name}
                </Typography>
                <button className={s.editNickname} onClick={toggleEditMode}>
                  <Icon height={16} width={16} className={s.icon} name={'edit'} />
                </button>
              </div>
              <Typography as="h2" variant="body2" className={s.email}>
                {data.email}
              </Typography>
              <Button onClick={onLogout} variant="secondary" className={s.logout}>
                <Icon className={s.icon} name={'logout'} height={16} width={16} />
                <Typography variant={'subtitle2'}>Logout</Typography>
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  )
})
