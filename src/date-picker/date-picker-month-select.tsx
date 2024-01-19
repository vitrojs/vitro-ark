import { For, useMemo } from 'vitro'
import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { deepEqual as equals } from 'fast-equals'

export type DatePickerMonthSelectProps = JSX.IntrinsicElements['select']

export const DatePickerMonthSelect = (props: DatePickerMonthSelectProps) => {
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
