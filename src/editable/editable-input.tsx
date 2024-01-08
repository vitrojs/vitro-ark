import { mergeProps } from '../utils'
import { useEditableContext } from './editable-context'

export type EditableInputProps = JSX.IntrinsicElements['input']

export const EditableInput = (props: EditableInputProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().inputProps)

  return <input {...mergedProps} />
}
