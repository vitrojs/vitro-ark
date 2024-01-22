import type { Observify } from '@vitro/zag'
import { useMemo } from 'vitro'
import {
	PresenceProvider,
	usePresence,
	type UsePresenceProps,
} from '../presence'
import { applyChildren } from '../utils'
import { HoverCardProvider } from './hover-card-context'
import {
	useHoverCard,
	type UseHoverCardProps,
	type UseHoverCardReturn,
} from './use-hover-card'

export type HoverCardProps = Observify<UseHoverCardProps & UsePresenceProps> & {
	children?: JSX.Element | ((api: UseHoverCardReturn) => JSX.Element)
}
export const HoverCard: JSX.Component<HoverCardProps> = ({
	// ----
	lazyMount,
	onExitComplete,
	//present,
	unmountOnExit,

	// ----
	closeDelay,
	dir,
	getRootNode,
	id,
	ids,
	onOpenChange,
	open,
	openDelay,
	positioning,
	// ----
	children,
}) => {
	const useHoverCardProps = {
		closeDelay,
		dir,
		getRootNode,
		id,
		ids,
		onOpenChange,
		open,
		openDelay,
		positioning,
	}

	const api = useHoverCard(useHoverCardProps)
	const apiPresence = usePresence({
		lazyMount,
		onExitComplete,
		unmountOnExit,
		present: useMemo(() => api().isOpen),
	})

	return (
		<HoverCardProvider value={api}>
			<PresenceProvider value={apiPresence}>
				{applyChildren(children, api)}
			</PresenceProvider>
		</HoverCardProvider>
	)
}
