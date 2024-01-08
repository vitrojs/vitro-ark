import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { usePopoverContext } from './popover-context'

export type PopoverPositionerProps = JSX.IntrinsicElements['div']

export const PopoverPositioner = (props: PopoverPositionerProps) => {
  const api = usePopoverContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(props, () => api().positionerProps)

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
