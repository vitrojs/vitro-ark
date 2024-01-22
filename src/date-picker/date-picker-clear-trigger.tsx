import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerClearTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerClearTrigger: JSX.Component<DatePickerClearTriggerProps> = (props) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().clearTriggerProps)

	return <button {...mergedProps} />
}
