import { FC, memo } from 'react'

import s from './filter-controls.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Slider } from '@/components/ui/slider'
import { TabType, Tabs } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/features/auth'
import { ProfileResponse } from '@/features/auth/model/types.ts'

type Props = {
  searchName: string
  setSearchName: (newString: string) => void
  sliderValue: number[]
  sliderMaxValue?: number
  setSliderValue: (newValue: number[]) => void
  tabValue: string
  setTabValue: (newTab: string) => void
}
export const FilterControls: FC<Props> = memo(
  ({
    searchName,
    setSearchName,
    sliderValue,
    sliderMaxValue = 10,
    setSliderValue,
    tabValue,
    setTabValue,
  }) => {
    const { data } = useGetMeQuery()

    const userId = (data as ProfileResponse).id

    const tabs: TabType[] = [
      { value: userId, text: 'My cards' },
      { value: '', text: 'All cards' },
    ]

    const clearFilterHandler = () => {
      setSliderValue([0, sliderMaxValue])
      setSearchName('')
      setTabValue('')
    }

    const onClearTextField = () => {
      setSearchName('')
    }

    return (
      <div className={s.filter}>
        <TextField
          type="search"
          className={s.textField}
          value={searchName}
          onChange={e => setSearchName(e.currentTarget.value)}
          clearField={onClearTextField}
        />
        <div className={s.box}>
          <Typography variant="body2">Show packs cards</Typography>
          <Tabs tabs={tabs} value={tabValue} onValueChange={setTabValue} />
        </div>
        <div className={s.box}>
          <Typography variant="body2">Number of cards</Typography>
          <Slider value={sliderValue} onChange={setSliderValue} min={0} max={sliderMaxValue} />
        </div>
        <Button variant="secondary" onClick={clearFilterHandler} className={s.button}>
          <Icon name={'trash-bin'} className={s.icon} />
          Clear Filter
        </Button>
      </div>
    )
  }
)
