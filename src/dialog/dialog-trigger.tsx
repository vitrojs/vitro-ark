import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useDialogContext } from './dialog-context'

export type DialogTriggerProps = JSX.IntrinsicElements['button']

export const DialogTrigger = (props: DialogTriggerProps) => {
  const api = useDialogContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(
    props,
    () => api().triggerProps,
    () => ({ 'aria-controls': presenceApi().isUnmounted && null }),
  )

  // @ts-expect-error we want aria-controls to be null to remove them if the popover if lazy mounted
  return <button {...mergedProps} />
}
