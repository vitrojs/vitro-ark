import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipArrowTipProps = JSX.IntrinsicElements['div']

export const TooltipArrowTip = (props: TooltipArrowTipProps) => {
	const api = useTooltipContext()
	const mergedProps = mergeProps(props, () => api().arrowTipProps)

	return <div {...mergedProps} />
}
