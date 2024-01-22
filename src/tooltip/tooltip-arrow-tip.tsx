import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipArrowTipProps = JSX.IntrinsicElements['div']

export const TooltipArrowTip: JSX.Component<TooltipArrowTipProps> = (props) => {
	const api = useTooltipContext()
	const mergedProps = mergeProps(props, () => api().arrowTipProps)

	return <div {...mergedProps} />
}
