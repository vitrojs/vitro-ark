import { mergeProps } from '@vitro/zag'
import { useSwitchContext } from './switch-context'

export type SwitchThumbProps = JSX.IntrinsicElements['span']

export const SwitchThumb: JSX.Component<SwitchThumbProps> = (props) => {
	const api = useSwitchContext()
	const mergedProps = mergeProps(props, () => api().thumbProps)

	return <span {...mergedProps} />
}
