import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableEditTriggerProps = JSX.IntrinsicElements['button']

export const EditableEditTrigger = (props: EditableEditTriggerProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().editTriggerProps)

  return <button {...mergedProps} />
}
