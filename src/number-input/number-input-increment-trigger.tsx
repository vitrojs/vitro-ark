import { mergeProps } from '@vitro/zag'
import { useNumberInputContext } from './number-input-context'

export type NumberInputIncrementTriggerProps = JSX.IntrinsicElements['button']

export const NumberInputIncrementTrigger: JSX.Component<
	NumberInputIncrementTriggerProps
> = (props) => {
	const api = useNumberInputContext()
	const mergedProps = mergeProps(props, () => api().incrementTriggerProps)

	return <button {...mergedProps} />
}
