import { mergeProps } from '@vitro/zag'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardTriggerProps = JSX.IntrinsicElements['button']

export const HoverCardTrigger = (props: HoverCardTriggerProps) => {
	const hoverCard = useHoverCardContext()
	const mergedProps = mergeProps(props, () => hoverCard().triggerProps)

	return <button {...mergedProps} />
}
