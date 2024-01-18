import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipPositionerProps = JSX.IntrinsicElements['div']

export const TooltipPositioner = (props: TooltipPositionerProps) => {
  const api = useTooltipContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(props, () => api().positionerProps)

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
