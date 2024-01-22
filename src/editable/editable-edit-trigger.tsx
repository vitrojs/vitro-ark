import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableEditTriggerProps = JSX.IntrinsicElements['button']

export const EditableEditTrigger: JSX.Component<EditableEditTriggerProps> = (
	props,
) => {
	const api = useEditableContext()
	const mergedProps = mergeProps(props, () => api().editTriggerProps)

	return <button {...mergedProps} />
}
