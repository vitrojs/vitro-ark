import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectTriggerProps = JSX.IntrinsicElements['button']

export const SelectTrigger: JSX.Component<SelectTriggerProps> = (props) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () => api().triggerProps)

	return <button {...mergedProps} />
}
