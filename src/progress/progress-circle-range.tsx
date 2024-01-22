import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressCircleRangeProps = JSX.IntrinsicElements['circle']

export const ProgressCircleRange: JSX.Component<ProgressCircleRangeProps> = (props) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(() => api().circleRangeProps, props)

	return <circle {...mergedProps} />
}
