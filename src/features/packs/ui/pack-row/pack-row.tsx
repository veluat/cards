import { FC, memo, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { Deck, useDeleteDeckMutation } from '../../model/services'

import s from './pack-row.module.scss'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog/dialog.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { EditPackModal } from '@/features/packs/ui'

type Props = {
  pack: Deck
  authUserId: string
}

export const PackRow: FC<Props> = memo(({ pack, authUserId }) => {
  const isMyPack = authUserId === pack.author.id

  const navigate = useNavigate()

  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  const [editIsOpen, setEditIsOpen] = useState(false)

  const [deletePack] = useDeleteDeckMutation()

  const onConfirm = () => {
    deletePack({ id: pack.id })
    setDeleteIsOpen(false)
  }

  const onLearn = () => {
    navigate(`${pack.id}/learn`)
  }

  return (
    <>
      <Dialog
        title="Delete Pack"
        description={`Do you really want to remove ${pack.name}? All cards will be deleted.`}
        buttonText="Delete Pack"
        open={deleteIsOpen}
        setOpen={setDeleteIsOpen}
        onConfirm={onConfirm}
        splitLines
      />
      <EditPackModal
        open={editIsOpen}
        setOpen={setEditIsOpen}
        id={pack.id}
        name={pack.name}
        isPrivate={pack.isPrivate}
        cover={pack.cover}
      />

      <Table.Row key={pack.id}>
        <Table.Cell>
          <Button as={Link} to={pack.id} variant="link" className={s.link}>
            {pack.cover && <img src={pack.cover} alt="Pack cover" className={s.cover} />}
            <Typography as="h3" variant="body2">
              {pack.name}
            </Typography>
          </Button>
        </Table.Cell>
        <Table.Cell className={s.count}>{pack.cardsCount}</Table.Cell>
        <Table.Cell className={s.date}>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
        <Table.Cell className={s.name}>{pack.author.name}</Table.Cell>
        <Table.Cell className={s.controls}>
          {isMyPack ? (
            <div className={s.buttons}>
              <IconButton
                icon={<Icon name={'edit'} width={16} height={16} />}
                onClick={() => setEditIsOpen(true)}
                small
              />
              <IconButton
                icon={<Icon name={'play'} width={16} height={16} />}
                disabled={!pack.cardsCount}
                onClick={onLearn}
                small
              />
              <IconButton
                icon={<Icon name={'trash-bin'} width={16} height={16} />}
                onClick={() => setDeleteIsOpen(true)}
                small
              />
            </div>
          ) : (
            <IconButton
              icon={<Icon name={'play'} width={16} height={16} />}
              disabled={!pack.cardsCount}
              onClick={onLearn}
              small
            />
          )}
        </Table.Cell>
      </Table.Row>
    </>
  )
})
