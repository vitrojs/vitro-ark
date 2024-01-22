import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerPositionerProps = JSX.IntrinsicElements['div']

export const DatePickerPositioner: JSX.Component<DatePickerPositionerProps> = (
	props,
) => {
	const api = useDatePickerContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
