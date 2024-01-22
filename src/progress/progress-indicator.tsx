import type { IndicatorProps } from '@zag-js/progress'

import { Observify, mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useProgressContext } from './progress-context'

export type ProgressIndicatorProps = Assign<
	JSX.IntrinsicElements['span'],
	Observify<IndicatorProps>
>

export const ProgressIndicator: JSX.Component<ProgressIndicatorProps> = ({
	state,
	...props
}) => {
	const api = useProgressContext()
	const mergedProps = mergeProps(props, () =>
		api().getIndicatorProps({ state: $$(state) }),
	)

	return <span {...mergedProps} />
}
