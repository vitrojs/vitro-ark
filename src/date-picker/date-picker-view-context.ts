import type { ViewProps } from '@zag-js/date-picker'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface DatePickerViewContext extends Required<ViewProps> {}

export const [DatePickerViewProvider, useDatePickerViewContext] = createContext<
  Accessor<DatePickerViewContext>
>({
  hookName: 'useDatePickerViewContext',
  providerName: '<DatePickerViewProvider />',
})
