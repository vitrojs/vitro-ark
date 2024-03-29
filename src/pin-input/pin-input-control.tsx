import { mergeProps } from '@vitro/zag'
import { usePinInputContext } from './pin-input-context'

export type PinInputControlProps = JSX.IntrinsicElements['div']

export const PinInputControl: JSX.Component<PinInputControlProps> = (props) => {
	const api = usePinInputContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
