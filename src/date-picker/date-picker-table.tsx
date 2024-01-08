import type { TableProps } from '@zag-js/date-picker'
import type { Assign } from '../types'
import { useDatePickerContext } from './date-picker-context'
import { DatePickerTableProvider } from './date-picker-table-context'
import { useDatePickerViewContext } from './date-picker-view-context'
import type { Observify } from '@vitro/zag'
import { $$, useMemo } from 'vitro'
import { createUniqueId, mergeProps } from '../utils'
import { deepEqual as equals } from 'fast-equals'

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
        id: createUniqueId(),
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
