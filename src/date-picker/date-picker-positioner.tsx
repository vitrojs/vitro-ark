import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useDatePickerContext } from './date-picker-context'
import { mergeProps } from '@vitro/zag'

export type DatePickerPositionerProps = JSX.IntrinsicElements['div']

export const DatePickerPositioner = (props: DatePickerPositionerProps) => {
	const api = useDatePickerContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
