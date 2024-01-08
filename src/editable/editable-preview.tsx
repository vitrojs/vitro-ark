import { mergeProps } from '../utils'
import { useEditableContext } from './editable-context'

export type EditablePreviewProps = JSX.IntrinsicElements['span']

export const EditablePreview = (props: EditablePreviewProps) => {
  const api = useEditableContext()
  const mergedProps = mergeProps(props, () => api().previewProps)

  return <span {...mergedProps} />
}
