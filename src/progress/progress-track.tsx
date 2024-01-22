import { mergeProps } from '@vitro/zag'
import { useProgressContext } from './progress-context'

export type ProgressTrackProps = JSX.IntrinsicElements['div']

export const ProgressTrack: JSX.Component<ProgressTrackProps> = (props) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () => api().trackProps)

	return <div {...mergedProps} />
}
