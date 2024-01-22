import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableLabelProps = JSX.IntrinsicElements['label']

export const EditableLabel : JSX.Component<EditableLabelProps>= (props) => {
	const api = useEditableContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
