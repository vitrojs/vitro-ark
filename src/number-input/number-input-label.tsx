import { mergeProps } from '@vitro/zag'
import { useNumberInputContext } from './number-input-context'

export type NumberInputLabelProps = JSX.IntrinsicElements['label']

export const NumberInputLabel: JSX.Component<NumberInputLabelProps> = (
	props,
) => {
	const api = useNumberInputContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
