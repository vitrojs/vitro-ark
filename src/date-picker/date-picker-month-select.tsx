import { mergeProps } from '@vitro/zag'
import { deepEqual as equals } from 'fast-equals'
import { For, useMemo } from 'vitro'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerMonthSelectProps = JSX.IntrinsicElements['select']

export const DatePickerMonthSelect: JSX.Component<DatePickerMonthSelectProps> = (props) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().monthSelectProps)

	const months = useMemo(() => api().getMonths(), { equals })

	return (
		<select {...mergedProps}>
			<For values={months}>
				{(month) => <option value={month.value}>{month.label}</option>}
			</For>
		</select>
	)
}
