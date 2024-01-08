import { mergeProps } from '../utils'
import { usePopoverContext } from './popover-context'

export type PopoverTitleProps = JSX.IntrinsicElements['div']

export const PopoverTitle = (props: PopoverTitleProps) => {
  const api = usePopoverContext()
  const mergedProps = mergeProps(props, () => api().titleProps)

  return <div {...mergedProps} />
}
