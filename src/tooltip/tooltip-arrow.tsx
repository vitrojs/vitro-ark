import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipArrowProps = JSX.IntrinsicElements['div']

export const TooltipArrow = (props: TooltipArrowProps) => {
	const tooltip = useTooltipContext()
	const mergedProps = mergeProps(props, () => tooltip().arrowProps)

	return <div {...mergedProps} />
}
