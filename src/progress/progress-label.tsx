import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressLabelProps = JSX.IntrinsicElements['label']

export const ProgressLabel = (props: ProgressLabelProps) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
