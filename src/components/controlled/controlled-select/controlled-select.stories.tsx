import { DevTool } from '@hookform/devtools'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { ControlledSelect } from './'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Controlled/Controlled Select',
  component: ControlledSelect,
} satisfies Meta<typeof ControlledSelect>

export default meta

const formOptions = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

type FormValues = Record<string, string>

export const ExampleWithForm = {
  render: () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues: {
        number: '1',
      },
    })

    const onSubmit = (data: FormValues) => {
      alert(JSON.stringify(data))
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '300px' }}>
        <DevTool control={control} />
        <Typography>Form With Select</Typography>
        <div style={{ margin: '30px 0' }}>
          <ControlledSelect
            name="number"
            control={control}
            options={formOptions}
            label={'Select:'}
          />
        </div>
        <Button fullWidth>Send</Button>
      </form>
    )
  },
}
