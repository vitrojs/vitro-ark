import { mergeProps } from '@vitro/zag'
import { usePinInputContext } from './pin-input-context'

export type PinInputLabelProps = JSX.IntrinsicElements['label']

export const PinInputLabel: JSX.Component<PinInputLabelProps> = (props) => {
	const api = usePinInputContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
