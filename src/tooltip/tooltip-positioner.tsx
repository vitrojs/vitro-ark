import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useTooltipContext } from './tooltip-context'

export type TooltipPositionerProps = JSX.IntrinsicElements['div']

export const TooltipPositioner: JSX.Component<TooltipPositionerProps> = (
	props,
) => {
	const api = useTooltipContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
