import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerControlProps = JSX.IntrinsicElements['div']

export const DatePickerControl = (props: DatePickerControlProps) => {
	const api = useDatePickerContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
