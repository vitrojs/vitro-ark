import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableInputProps = JSX.IntrinsicElements['input']

export const EditableInput: JSX.Component<EditableInputProps> = (props) => {
	const api = useEditableContext()
	const mergedProps = mergeProps(props, () => api().inputProps)

	return <input {...mergedProps} />
}
