import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerPrevTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerPrevTrigger: JSX.Component<DatePickerPrevTriggerProps> =
	(props) => {
		const api = useDatePickerContext()
		const viewProps = useDatePickerViewContext()
		const mergedProps = mergeProps(props, () =>
			api().getPrevTriggerProps(viewProps()),
		)

		return <button {...mergedProps} />
	}
