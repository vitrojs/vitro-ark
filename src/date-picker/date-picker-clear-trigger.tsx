import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerClearTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerClearTrigger = (props: DatePickerClearTriggerProps) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().clearTriggerProps)

	return <button {...mergedProps} />
}
