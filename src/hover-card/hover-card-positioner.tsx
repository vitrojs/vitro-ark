import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardPositionerProps = JSX.IntrinsicElements['div']

export const HoverCardPositioner: JSX.Component<HoverCardPositionerProps> = (
	props,
) => {
	const api = useHoverCardContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={!presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
