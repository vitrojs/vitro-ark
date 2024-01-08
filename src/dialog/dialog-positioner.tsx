import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useDialogContext } from './dialog-context'

export type DialogPositionerProps = JSX.IntrinsicElements['div']

export const DialogPositioner = (props: DialogPositionerProps) => {
  const api = useDialogContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(props, () => api().positionerProps)

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
