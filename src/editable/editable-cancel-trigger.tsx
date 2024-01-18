import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableCancelTriggerProps = JSX.IntrinsicElements['button']

export const EditableCancelTrigger = (props: EditableCancelTriggerProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().cancelTriggerProps)

  return <button {...mergedProps} />
}
