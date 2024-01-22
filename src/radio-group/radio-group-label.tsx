import { useRadioGroupContext } from './radio-group-context'

export type RadioGroupLabelProps = JSX.IntrinsicElements['label']

export const RadioGroupLabel: JSX.Component<RadioGroupLabelProps> = (props) => {
	const api = useRadioGroupContext()
	const mergedProps = Object.assign(props, () => api().labelProps)

	return <label {...mergedProps} />
}
