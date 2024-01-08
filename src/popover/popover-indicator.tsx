import { mergeProps } from '../utils'
import { usePopoverContext } from './popover-context'

export type PopoverIndicatorProps = JSX.IntrinsicElements['div']

export const PopoverIndicator = (props: PopoverIndicatorProps) => {
  const popover = usePopoverContext()
  const mergedProps = mergeProps(props, () => popover().indicatorProps)

  return <div {...mergedProps} />
}
