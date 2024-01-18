import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableContext } from './date-picker-table-context'

export type DatePickerTableHeadProps = JSX.IntrinsicElements['thead']

export const DatePickerTableHead = (props: DatePickerTableHeadProps) => {
  const api = useDatePickerContext()
  const tableProps = useDatePickerTableContext()
  const mergedProps = mergeProps(props, () =>
    api().getTableHeadProps(tableProps()),
  )

  return <thead {...mergedProps} />
}
