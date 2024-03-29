import { type ContentProps } from '@zag-js/tabs'

import type { Observify } from '@vitro/zag'
import { $$, If, useMemo } from 'vitro'
import {
	PresenceProvider,
	usePresence,
	usePresencePropsContext,
} from '../presence'
import type { Assign } from '../types'

import { mergeProps } from '@vitro/zag'
import { useTabsContext } from './tabs-context'

export type TabContentProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ContentProps>
>

export const TabContent: JSX.Component<TabContentProps> = ({ value, ...props }) => {
	const api = useTabsContext()
	const presenceProps = usePresencePropsContext()

	const presenceApi = usePresence(
		Object.assign(presenceProps, {
			present: useMemo(() => api().value === $$(value)),
		}),
	)
	const mergedProps = mergeProps(
		props,
		() => api().getContentProps({ value: $$(value) }),
		() => presenceApi().presenceProps,
	)

	return (
		<PresenceProvider value={presenceApi}>
			<If when={() => !presenceApi().isUnmounted}>
				<div {...mergedProps} />
			</If>
		</PresenceProvider>
	)
}
