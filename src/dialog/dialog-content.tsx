import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useDialogContext } from './dialog-context'

export type DialogContentProps = JSX.IntrinsicElements['div']

export const DialogContent = (props: DialogContentProps) => {
  const api = useDialogContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(
    props,
    () => api().contentProps,
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
