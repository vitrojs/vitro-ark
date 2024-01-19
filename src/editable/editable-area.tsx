import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableAreaProps = JSX.IntrinsicElements['div']

export const EditableArea = (props: EditableAreaProps) => {
	const api = useEditableContext()
	const mergedProps = mergeProps(props, () => api().areaProps)

	return <div {...mergedProps} />
}
