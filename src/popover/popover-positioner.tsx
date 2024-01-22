import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { usePopoverContext } from './popover-context'

export type PopoverPositionerProps = JSX.IntrinsicElements['div']

export const PopoverPositioner: JSX.Component<PopoverPositionerProps> = (
	props,
) => {
	const api = usePopoverContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
