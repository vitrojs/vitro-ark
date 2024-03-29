import { mergeProps } from '@vitro/zag'
import { useNumberInputContext } from './number-input-context'

export type NumberInputControlProps = JSX.IntrinsicElements['div']

export const NumberInputControl: JSX.Component<NumberInputControlProps> = (
	props,
) => {
	const api = useNumberInputContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
