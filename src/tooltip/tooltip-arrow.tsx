import { mergeProps } from '../utils'
import { useTooltipContext } from './tooltip-context'

export type TooltipArrowProps = JSX.IntrinsicElements['div']

export const TooltipArrow = (props: TooltipArrowProps) => {
  const tooltip = useTooltipContext()
  const mergedProps = mergeProps(props, () => tooltip().arrowProps)

  return <div {...mergedProps} />
}
