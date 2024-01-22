import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectLabelProps = JSX.IntrinsicElements['label']

export const SelectLabel: JSX.Component<SelectLabelProps> = (props) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
