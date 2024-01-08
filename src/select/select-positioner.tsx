import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useSelectContext } from './select-context'

export type SelectPositionerProps = JSX.IntrinsicElements['div']

export const SelectPositioner = (props: SelectPositionerProps) => {
  const api = useSelectContext()
  const presenceApi = usePresenceContext()
  const mergedProps = Object.assign(() => api().positionerProps, props)

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
