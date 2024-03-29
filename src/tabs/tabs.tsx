import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { PresencePropsProvider, type UsePresenceProps } from '../presence'
import type { Assign } from '../types'
import { TabsProvider } from './tabs-context'
import { useTabs, type UseTabsProps } from './use-tabs'

export type TabsProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseTabsProps & UsePresenceProps>
>

export const Tabs: JSX.Component<TabsProps> = ({
	// ----
	lazyMount,
	onExitComplete,
	present,
	unmountOnExit,
	// ----
	activationMode,
	dir,
	getRootNode,
	id,
	ids,
	loop,
	onFocusChange,
	onValueChange,
	orientation,
	translations,
	value,
	// ----

	...props
}) => {
	const api = useTabs({
		activationMode,
		dir,
		getRootNode,
		id,
		ids,
		loop,
		onFocusChange,
		onValueChange,
		orientation,
		translations,
		value,
	})

	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<TabsProvider value={api}>
			<PresencePropsProvider
				value={{ lazyMount, onExitComplete, present, unmountOnExit }}
			>
				<div {...mergedProps} />
			</PresencePropsProvider>
		</TabsProvider>
	)
}
