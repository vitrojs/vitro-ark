import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useTooltipContext } from './tooltip-context'

export type TooltipContentProps = JSX.IntrinsicElements['div']

export const TooltipContent: JSX.Component<TooltipContentProps> = (props) => {
	const api = useTooltipContext()
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
