import { useRadioGroupContext } from './radio-group-context'

export type RadioGroupLabelProps = JSX.IntrinsicElements['label']

export const RadioGroupLabel = (props: RadioGroupLabelProps) => {
	const api = useRadioGroupContext()
	const mergedProps = Object.assign(props, () => api().labelProps)

	return <label {...mergedProps} />
}
