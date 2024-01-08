import { mergeProps } from '../utils'
import { useEditableContext } from './editable-context'

export type EditableSubmitTriggerProps = JSX.IntrinsicElements['button']

export const EditableSubmitTrigger = (props: EditableSubmitTriggerProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().submitTriggerProps)

  return <button {...mergedProps} />
}
