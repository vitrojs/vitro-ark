import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerContentProps = JSX.IntrinsicElements['div']

export const DatePickerContent: JSX.Component<DatePickerContentProps> = (props) => {
	const api = useDatePickerContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().contentProps,
		() => presenceApi().presenceProps,
	)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
