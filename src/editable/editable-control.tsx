import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableControlProps = JSX.IntrinsicElements['div']

export const EditableControl = (props: EditableControlProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  return <div {...mergedProps} />
}
