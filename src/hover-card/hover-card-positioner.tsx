import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useHoverCardContext } from './hover-card-context'
import { mergeProps } from '@vitro/zag'

export type HoverCardPositionerProps = JSX.IntrinsicElements['div']

export const HoverCardPositioner = (props: HoverCardPositionerProps) => {
	const api = useHoverCardContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={!presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
