import { type TriggerProps } from '@zag-js/tabs'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useTabsContext } from './tabs-context'

export type TabTriggerProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<TriggerProps>
>

export const TabTrigger: JSX.Component<TabTriggerProps> = ({
	disabled,
	value,
	// ---
	...props
}) => {
	const getTabParams = () => ({
		value: $$(value),
		disabled: $$(disabled),
	})
	const api = useTabsContext()

	const mergedProps = mergeProps(props, () =>
		api().getTriggerProps(getTabParams()),
	)

	return <button {...mergedProps} />
}
