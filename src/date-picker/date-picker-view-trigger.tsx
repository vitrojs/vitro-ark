import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerViewTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerViewTrigger: JSX.Component<DatePickerViewTriggerProps> =
	(props) => {
		const api = useDatePickerContext()
		const viewProps = useDatePickerViewContext()
		const mergedProps = mergeProps(props, () =>
			api().getViewTriggerProps(viewProps()),
		)

		return <button {...mergedProps} />
	}
