import { FC, memo } from 'react'

import { Deck } from '../../model/services'

import { Table } from '@/components/ui/table'
import { TableHeader, TableHeaderProps } from '@/components/ui/table-header'
import { useGetMeQuery } from '@/features/auth'
import { ProfileResponse } from '@/features/auth/model/types.ts'
import { PackRow } from '@/features/packs/ui/pack-row/pack-row.tsx'

const columns = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'created',
    title: 'Created By',
  },
  {
    key: 'controls',
    title: '',
    sortable: false,
  },
]

type Props = {
  items: Deck[]
} & Pick<TableHeaderProps, 'sort' | 'onSort'>

export const PacksTable: FC<Props> = memo(({ items, ...rest }) => {
  const { data } = useGetMeQuery()

  const authUserId = (data as ProfileResponse).id

  if (!items.length) {
    return <Table.Empty>No content with these terms...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} />
      <Table.Body>
        {items.map(pack => (
          <PackRow key={pack.id} pack={pack} authUserId={authUserId} />
        ))}
      </Table.Body>
    </Table.Root>
  )
})
