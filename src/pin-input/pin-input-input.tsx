import { mergeProps } from '@vitro/zag'
import type { Assign } from '../types'
import { usePinInputContext } from './pin-input-context'

export type PinInputInputProps = Assign<
	JSX.IntrinsicElements['input'],
	{ index: number }
>

export const PinInputInput: JSX.Component<PinInputInputProps> = ({
	index,
	...props
}) => {
	const api = usePinInputContext()
	const mergedProps = mergeProps(props, () => api().getInputProps({ index }))
	console.log(api().getInputProps({ index }))
	return <input {...mergedProps} />
}
