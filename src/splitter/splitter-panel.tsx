import { type connect } from '@zag-js/splitter'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSplitterContext } from './splitter-context'

type PanelParams = Parameters<ReturnType<typeof connect>['getPanelProps']>[0]

export type SplitterPanelProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<PanelParams>
>

export const SplitterPanel: JSX.Component<SplitterPanelProps> = ({
	id,
	snapSize,

	...props
}) => {
	const panelParams = () => ({
		id: $$(id),
		snapSize: $$(snapSize),
	})
	const api = useSplitterContext()
	const mergedProps = mergeProps(props, () =>
		api().getPanelProps(panelParams()),
	)

	return <div {...mergedProps} />
}
