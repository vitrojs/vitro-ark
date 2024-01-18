import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableContext } from './date-picker-table-context'

export type DatePickerTableBodyProps = JSX.IntrinsicElements['tbody']

export const DatePickerTableBody = (props: DatePickerTableBodyProps) => {
  const api = useDatePickerContext()
  const tableProps = useDatePickerTableContext()
  const mergedProps = mergeProps(props, () =>
    api().getTableBodyProps(tableProps()),
  )

  return <tbody {...mergedProps} />
}
