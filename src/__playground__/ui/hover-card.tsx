import {
  HoverCard as ArkHoverCard,
  type HoverCardProps as ArkHoverCardProps,
} from '@vitro/ark'

import { hoverCard, type HoverCardVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)
export type HoverCardProps = Assign<ArkHoverCardProps, HoverCardVariantProps>
const HoverCard = withProvider(ArkHoverCard.Root)
const HoverCardArrow = withContext(ArkHoverCard.Arrow, 'arrow')
const HoverCardArrowTip = withContext(ArkHoverCard.ArrowTip, 'arrowTip')
const HoverCardContent = withContext(ArkHoverCard.Content, 'content')
const HoverCardPositioner = withContext(ArkHoverCard.Positioner, 'positioner')
const HoverCardTrigger = withContext(ArkHoverCard.Trigger, 'trigger')

const Root = HoverCard
const Arrow = HoverCardArrow
const ArrowTip = HoverCardArrowTip
const Content = HoverCardContent
const Positioner = HoverCardPositioner
const Trigger = HoverCardTrigger

export {
  // HoverCard,
  // HoverCardArrow,
  // HoverCardArrowTip,
  // HoverCardContent,
  // HoverCardPositioner,
  // HoverCardTrigger,

  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Trigger,
}
