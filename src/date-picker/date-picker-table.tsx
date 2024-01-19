import { mergeProps, type Observify } from '@vitro/zag'
import type { TableProps } from '@zag-js/date-picker'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Assign } from '../types'
import { createSequenceId } from '../utils'
import { useDatePickerContext } from './date-picker-context'
import { DatePickerTableProvider } from './date-picker-table-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerTableProps = Assign<
  JSX.IntrinsicElements['table'],
  Observify<Pick<TableProps, 'columns'>>
>

export const DatePickerTable = ({
  columns,
  ...props
}: DatePickerTableProps) => {
  const api = useDatePickerContext()
  const viewProps = useDatePickerViewContext()
  const tableProps = useMemo(
    () => {
      return {
        id: createSequenceId(),
        columns: $$(columns),
        ...viewProps(),
      }
    },
    { equals },
  )

  const mergedProps = mergeProps(props, () => api().getTableProps(tableProps()))

  return (
    <DatePickerTableProvider value={tableProps}>
      <table {...mergedProps} />
    </DatePickerTableProvider>
  )
}
