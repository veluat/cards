import { Link } from 'react-router-dom'

import s from './profile.module.scss'

import { EditProfileFormProps } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, useUpdateProfileMutation } from '@/features/auth'
import { ProfileInfo } from '@/features/profile/ui'
import { DataType } from '@/features/profile/ui/profile-info/profile-info.tsx'

export const Profile = () => {
  const { data } = useGetMeQuery()

  const [updateProfile] = useUpdateProfileMutation()

  const user = data as DataType

  const onUpdate = (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileFormProps])
    })
    updateProfile(form)
  }

  return (
    <>
      <Button as={Link} to="/packs" variant="link" className={s.button}>
        <Icon name={'arrow-back'} width={22} height={22} />
        <Typography variant="body2" className={s.text}>
          Back to Packs List
        </Typography>
      </Button>
      <ProfileInfo data={user} update={onUpdate} />
    </>
  )
}
