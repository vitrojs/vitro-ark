import type { TableProps } from '@zag-js/date-picker'
import { ObservableReadonly } from 'vitro'
import { createContext } from '../create-context'

export interface DatePickerTableContext extends TableProps {}

export const [DatePickerTableProvider, useDatePickerTableContext] =
	createContext<ObservableReadonly<DatePickerTableContext>>({
		hookName: 'useDatePickerTableContext',
		providerName: '<DatePickerTableProvider />',
	})
