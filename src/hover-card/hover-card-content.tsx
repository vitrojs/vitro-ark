import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardContentProps = JSX.IntrinsicElements['div']

export const HoverCardContent = (props: HoverCardContentProps) => {
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
