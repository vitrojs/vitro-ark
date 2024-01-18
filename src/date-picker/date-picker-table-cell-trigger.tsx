import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableCellContext } from './date-picker-table-cell-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerTableCellTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerTableCellTrigger = (
  props: DatePickerTableCellTriggerProps,
) => {
  const api = useDatePickerContext()
  const cellProps = useDatePickerTableCellContext()
  const viewProps = useDatePickerViewContext()

  const triggerProps = () =>
    ({
      day: api().getDayTableCellTriggerProps,
      month: api().getMonthTableCellTriggerProps,
      year: api().getYearTableCellTriggerProps,
      // @ts-expect-error value is number filter
    })[viewProps().view](cellProps())

  const mergedProps = mergeProps(props, triggerProps)

  return <button {...mergedProps} />
}
