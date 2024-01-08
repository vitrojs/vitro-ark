import { mergeProps } from '../utils'
import { useHoverCardContext } from './hover-card-context'

export type HoverCardArrowTipProps = JSX.IntrinsicElements['div']

export const HoverCardArrowTip = (props: HoverCardArrowTipProps) => {
  const hoverCard = useHoverCardContext()
  const mergedProps = mergeProps(props, () => hoverCard().arrowTipProps)

  return <div {...mergedProps} />
}
