import { mergeProps } from '../utils'
import { usePopoverContext } from './popover-context'

export type PopoverDescriptionProps = JSX.IntrinsicElements['p']

export const PopoverDescription = (props: PopoverDescriptionProps) => {
  const api = usePopoverContext()
  const mergedProps = mergeProps(props, () => api().descriptionProps)

  return <p {...mergedProps} />
}
