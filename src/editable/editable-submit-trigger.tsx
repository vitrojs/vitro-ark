import { mergeProps } from '@vitro/zag'
import { useEditableContext } from './editable-context'

export type EditableSubmitTriggerProps = JSX.IntrinsicElements['button']

export const EditableSubmitTrigger: JSX.Component<EditableSubmitTriggerProps> =
	(props) => {
		const api = useEditableContext()
		const mergedProps = mergeProps(props, () => api().submitTriggerProps)

		return <button {...mergedProps} />
	}
