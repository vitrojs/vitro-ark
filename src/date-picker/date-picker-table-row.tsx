import { mergeProps } from '../utils'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableContext } from './date-picker-table-context'

export type DatePickerTableRowProps = JSX.IntrinsicElements['tr']

export const DatePickerTableRow = (props: DatePickerTableRowProps) => {
  const api = useDatePickerContext()
  const tableProps = useDatePickerTableContext()
  const mergedProps = mergeProps(props, () =>
    api().getTableRowProps(tableProps()),
  )

  return <tr {...mergedProps} />
}
