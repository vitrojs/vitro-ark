import { For } from 'vitro'
import { mergeProps } from '../utils'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerYearSelectProps = JSX.IntrinsicElements['select']

export const DatePickerYearSelect = (props: DatePickerYearSelectProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(props, () => api().yearSelectProps)

  return (
    <select {...mergedProps}>
      <For values={getYearsRange({ from: 1_000, to: 4_000 })}>
        {(year) => <option value={year}>{year}</option>}
      </For>
    </select>
  )
}

interface YearsRange {
  from: number
  to: number
}

function getYearsRange(range: YearsRange) {
  const years: number[] = []

  for (let year = range.from; year <= range.to; year += 1) {
    years.push(year)
  }

  return years
}
