import { FC, memo, useEffect, useState } from 'react'

import s from './avatar-uploader.module.scss'

import { validateFile } from '@/common/utils'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'

type PropsType = {
  avatar?: string
  name: string
  updateAvatar: (formData: FormData) => void
  editable?: boolean
  size?: number
}

export const AvatarUploader: FC<PropsType> = memo(props => {
  const { avatar, name, updateAvatar, editable = true, size = 96 } = props
  const [image, setImage] = useState(avatar)

  useEffect(() => {
    setImage(avatar)
  }, [avatar])

  return (
    <div className={s.avatarContainer}>
      <Avatar size={size} className={s.avatar} userName={name} image={image} />
      {editable && (
        <FileUploader
          validate={validateImage}
          update={updateAvatar}
          className={s.editImage}
          accept="image/*"
          as={Button}
          asProps={{
            variant: 'secondary',
          }}
        />
      )}
    </div>
  )
})

const validateImage = (file: File) => {
  const maxSizeInBytes = 5 * 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  return validateFile(file, maxSizeInBytes, allowedTypes)
}
