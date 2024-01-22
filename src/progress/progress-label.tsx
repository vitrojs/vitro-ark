import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressLabelProps = JSX.IntrinsicElements['label']

export const ProgressLabel: JSX.Component<ProgressLabelProps> = (props) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
