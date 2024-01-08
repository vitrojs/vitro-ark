import { usePopoverContext } from './popover-context'

export type PopoverArrowProps = JSX.IntrinsicElements['div']

export const PopoverArrow = (props: PopoverArrowProps) => {
  const popover = usePopoverContext()
  const mergedProps = Object.assign(props, () => popover().arrowProps)

  return <div {...mergedProps} />
}
