import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { SplitterProvider } from './splitter-context'
import {
	useSplitter,
	type UseSplitterProps,
	type UseSplitterReturn,
} from './use-splitter'

export type SplitterProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseSplitterProps> & {
		children?: JSX.Element | ((api: UseSplitterReturn) => JSX.Element)
	}
>

export const Splitter = ({
	// ----
	dir,
	getRootNode,
	id,
	ids,
	onSizeChange,
	onSizeChangeEnd,
	onSizeChangeStart,
	orientation,
	size,
	children,
	...props
}: SplitterProps) => {
	const api = useSplitter({
		dir,
		getRootNode,
		id,
		ids,
		onSizeChange,
		onSizeChangeEnd,
		onSizeChangeStart,
		orientation,
		size,
	})

	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<SplitterProvider value={api}>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
		</SplitterProvider>
	)
}
