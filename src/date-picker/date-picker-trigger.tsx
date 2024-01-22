import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerTrigger: JSX.Component<DatePickerTriggerProps> = (
	props,
) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().triggerProps)

	return <button {...mergedProps} />
}
