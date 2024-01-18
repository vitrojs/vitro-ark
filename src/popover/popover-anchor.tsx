import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverAnchorProps = JSX.IntrinsicElements['div']

export const PopoverAnchor = (props: PopoverAnchorProps) => {
  const api = usePopoverContext()
  const mergedProps = mergeProps(props, () => api().anchorProps)

  return <div {...mergedProps} />
}
