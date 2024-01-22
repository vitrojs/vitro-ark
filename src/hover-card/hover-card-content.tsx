import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardContentProps = JSX.IntrinsicElements['div']

export const HoverCardContent: JSX.Component<HoverCardContentProps> = (
	props,
) => {
	const api = useHoverCardContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().contentProps,
		() => presenceApi().presenceProps,
	)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
