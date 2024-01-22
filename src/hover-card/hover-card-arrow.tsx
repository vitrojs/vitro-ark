import { mergeProps } from '@vitro/zag'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardArrowProps = JSX.IntrinsicElements['div']

export const HoverCardArrow:JSX.Component<HoverCardArrowProps> = (props) => {
	const hoverCard = useHoverCardContext()
	const mergedProps = mergeProps(props, () => hoverCard().arrowProps)

	return <div {...mergedProps} />
}
