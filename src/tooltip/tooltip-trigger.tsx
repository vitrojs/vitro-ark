import { mergeProps } from '../utils'
import { useTooltipContext } from './tooltip-context'

export type TooltipTriggerProps = JSX.IntrinsicElements['button']

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  const api = useTooltipContext()
  const mergedProps = mergeProps(props, () => api().triggerProps)

  return <button {...mergedProps} />
}
