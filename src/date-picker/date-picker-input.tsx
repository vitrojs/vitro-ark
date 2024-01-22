import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerInputProps = JSX.IntrinsicElements['input']

export const DatePickerInput: JSX.Component<DatePickerInputProps> = (props) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().inputProps)

	return <input {...mergedProps} />
}
