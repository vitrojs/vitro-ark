import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerViewControlProps = JSX.IntrinsicElements['div']

export const DatePickerViewControl: JSX.Component<DatePickerViewControlProps> = (props) => {
	const api = useDatePickerContext()
	const viewProps = useDatePickerViewContext()
	const mergedProps = mergeProps(props, () =>
		api().getViewControlProps(viewProps()),
	)

	return <div {...mergedProps} />
}
