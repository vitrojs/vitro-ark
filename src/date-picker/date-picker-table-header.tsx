import { mergeProps } from '../utils'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableContext } from './date-picker-table-context'

export type DatePickerTableHeaderProps = JSX.IntrinsicElements['th']

export const DatePickerTableHeader = (props: DatePickerTableHeaderProps) => {
  const api = useDatePickerContext()
  const tableProps = useDatePickerTableContext()
  const mergedProps = mergeProps(props, () =>
    api().getTableHeaderProps(tableProps()),
  )

  return <th {...mergedProps} />
}
