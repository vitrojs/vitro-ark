import { connect } from '@zag-js/splitter'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSplitterContext } from './splitter-context'

type TriggerParams = Parameters<
	ReturnType<typeof connect>['getResizeTriggerProps']
>[0]

export type SplitterResizeTriggerProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<TriggerParams>
>

export const SplitterResizeTrigger: JSX.Component<SplitterResizeTriggerProps> =
	({
		// ----
		disabled,
		id,
		step,

		...props
	}) => {
		const api = useSplitterContext()

		const triggerParams = () => ({
			disabled: $$(disabled),
			id: $$(id),
			step: $$(step),
		})
		const mergedProps = mergeProps(props, () =>
			api().getResizeTriggerProps(triggerParams()),
		)

		return <button {...mergedProps} />
	}
