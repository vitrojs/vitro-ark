import type { Observify } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import {
  DatePickerTableCellProvider,
  type DatePickerTableCellContext,
} from './date-picker-table-cell-context'
import { useDatePickerViewContext } from './date-picker-view-context'
import { mergeProps } from '../utils'
import { $$, useMemo } from 'vitro'
import { deepEqual as equals } from 'fast-equals'
import { Assign } from '../types'

export type DatePickerTableCellProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<DatePickerTableCellContext>
>

export const DatePickerTableCell = ({
  disabled,
  value,
  visibleRange,
  columns,

  // ----
  ...props
}: DatePickerTableCellProps) => {
  const api = useDatePickerContext()
  const viewProps = useDatePickerViewContext()

  const cellProps = useMemo<DatePickerTableCellContext>(
    () => ({
      disabled: $$(disabled),
      value: $$(value),
      visibleRange: $$(visibleRange),
      columns: $$(columns),
    }),
    { equals },
  )

  const tableCellProps = useMemo(() => {
    return {
      day: api().getDayTableCellProps,
      month: api().getMonthTableCellProps,
      year: api().getYearTableCellProps,
      // @ts-expect-error use filter guard
    }[viewProps().view](cellProps())
  })

  const mergedProps = mergeProps(props, tableCellProps)

  return (
    <DatePickerTableCellProvider value={cellProps}>
      <td {...mergedProps} />
    </DatePickerTableCellProvider>
  )
}
