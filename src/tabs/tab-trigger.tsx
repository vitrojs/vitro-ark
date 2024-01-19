import { type TriggerProps } from '@zag-js/tabs'

import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useTabsContext } from './tabs-context'
import type { Observify } from '@vitro/zag'

export type TabTriggerProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<TriggerProps>
>

export const TabTrigger = ({
	disabled,
	value,
	// ---
	...props
}: TabTriggerProps) => {
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
