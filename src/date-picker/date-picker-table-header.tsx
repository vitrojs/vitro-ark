import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerTableContext } from './date-picker-table-context'

export type DatePickerTableHeaderProps = JSX.IntrinsicElements['th']

export const DatePickerTableHeader: JSX.Component<DatePickerTableHeaderProps> =
	(props) => {
		const api = useDatePickerContext()
		const tableProps = useDatePickerTableContext()
		const mergedProps = mergeProps(props, () =>
			api().getTableHeaderProps(tableProps()),
		)

		return <th {...mergedProps} />
	}
