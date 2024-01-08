import { If, useMemo } from 'vitro'
import { usePresence, usePresencePropsContext } from '../presence'
import { mergeProps } from '../utils'
import { useDialogContext } from './dialog-context'

export type DialogBackdropProps = JSX.IntrinsicElements['div']

export const DialogBackdrop = (props: DialogBackdropProps) => {
  const api = useDialogContext()
  const presenceProps = usePresencePropsContext()
  const presenceApi = usePresence(
    Object.assign(presenceProps, { present: useMemo(() => api().isOpen) }),
  )
  const mergedProps = mergeProps(
    props,
    () => api().backdropProps,
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
