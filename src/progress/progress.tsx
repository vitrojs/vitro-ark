import { Observify, mergeProps } from '@vitro/zag'
import { type Assign } from '../types'
import { applyChildren } from '../utils'
import { ProgressProvider } from './progress-context'
import {
	useProgress,
	type UseProgressProps,
	type UseProgressReturn,
} from './use-progress'

export type ProgressProps = Assign<
	Assign<
		JSX.IntrinsicElements['div'],
		Observify<UseProgressProps> & {
			children?: JSX.Element | ((api: UseProgressReturn) => JSX.Element)
		}
	>,
	UseProgressProps
>

export const Progress: JSX.Component<ProgressProps> = ({
	dir,
	getRootNode,
	id,
	max,
	min,
	orientation,
	translations,
	value,
	children,
	...props
}) => {
	const api = useProgress({
		dir,
		getRootNode,
		id,
		max,
		min,
		orientation,
		translations,
		value,
	})
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<ProgressProvider value={api}>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
		</ProgressProvider>
	)
}
