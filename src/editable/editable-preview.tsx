import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditablePreviewProps = JSX.IntrinsicElements['span']

export const EditablePreview: JSX.Component<EditablePreviewProps> = (props) => {
	const api = useEditableContext()
	const mergedProps = mergeProps(props, () => api().previewProps)

	return <span {...mergedProps} />
}
