import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressRangeProps = JSX.IntrinsicElements['div']

export const ProgressRange: JSX.Component<ProgressRangeProps> = (props) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () => api().rangeProps)

	return <div {...mergedProps} />
}
