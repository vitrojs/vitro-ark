import { mergeProps } from '@vitro/zag'
import { useNumberInputContext } from './number-input-context'

export type NumberInputInputProps = JSX.IntrinsicElements['input']

export const NumberInputInput: JSX.Component<NumberInputInputProps> = (
	props,
) => {
	const api = useNumberInputContext()
	const mergedProps = mergeProps(props, () => api().inputProps)

	return <input {...mergedProps} />
}
