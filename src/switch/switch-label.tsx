import { mergeProps } from '@vitro/zag'
import { useSwitchContext } from './switch-context'

export type SwitchLabelProps = JSX.IntrinsicElements['span']

export const SwitchLabel: JSX.Component<SwitchLabelProps> = (props) => {
	const api = useSwitchContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <span {...mergedProps} />
}
