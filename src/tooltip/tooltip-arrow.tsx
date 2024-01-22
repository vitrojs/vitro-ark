import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipArrowProps = JSX.IntrinsicElements['div']

export const TooltipArrow: JSX.Component<TooltipArrowProps> = (props) => {
	const tooltip = useTooltipContext()
	const mergedProps = mergeProps(props, () => tooltip().arrowProps)

	return <div {...mergedProps} />
}
