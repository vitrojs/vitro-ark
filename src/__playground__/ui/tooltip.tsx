import {
  Tooltip as ArkTooltip,
  type TooltipProps as ArkTooltipProps,
} from '@vitro/ark'

import { tooltip, type TooltipVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)
export type TooltipProps = Assign<ArkTooltipProps, TooltipVariantProps>

const Tooltip: JSX.Component<TooltipProps> = withProvider(ArkTooltip.Root)
const TooltipArrow = withContext(ArkTooltip.Arrow, 'arrow')
const TooltipArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip')
const TooltipContent = withContext(ArkTooltip.Content, 'content')
const TooltipPositioner = withContext(ArkTooltip.Positioner, 'positioner')
const TooltipTrigger = withContext(ArkTooltip.Trigger, 'trigger')

const Root = Tooltip
const Arrow = TooltipArrow
const ArrowTip = TooltipArrowTip
const Content = TooltipContent
const Positioner = TooltipPositioner
const Trigger = TooltipTrigger

export {
  // Tooltip,
  // TooltipArrow,
  // TooltipArrowTip,
  // TooltipContent,
  // TooltipPositioner,
  // TooltipTrigger,
  Arrow,
  ArrowTip,
  Content,
  Positioner,
  Root,
  Trigger,
}
