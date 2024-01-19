import { mergeProps } from '@vitro/zag'
import { useSwitchContext } from './switch-context'

export type SwitchControlProps = JSX.IntrinsicElements['span']

export const SwitchControl = (props: SwitchControlProps) => {
	const api = useSwitchContext()
	const mergedProps = mergeProps(props, () => api().controlProps)
	const inputProps = mergeProps({}, () => api().hiddenInputProps)

	return (
		<>
			<span {...mergedProps} />
			<input {...inputProps} />
		</>
	)
}
