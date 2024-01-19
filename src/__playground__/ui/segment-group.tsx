import {
  SegmentGroup as ArkSegmentGroup,
  type SegmentGroupProps as ArkSegmentGroupProps,
} from '@vitro/ark'

import { SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)
export type SegmentGroupProps = Assign<
  ArkSegmentGroupProps,
  SegmentGroupVariantProps
>
const SegmentGroup: JSX.Component<SegmentGroupProps> = withProvider(
  ArkSegmentGroup.Root,
  'root',
)
const SegmentGroupIndicator = withContext(
  ArkSegmentGroup.Indicator,
  'indicator',
)
const SegmentGroupItem = withContext(ArkSegmentGroup.Item, 'item')
const SegmentGroupItemControl = withContext(
  ArkSegmentGroup.ItemControl,
  'itemControl',
)
const SegmentGroupItemText = withContext(ArkSegmentGroup.ItemText, 'itemText')
const SegmentGroupLabel = withContext(ArkSegmentGroup.Label, 'label')

const Root = SegmentGroup
const Indicator = SegmentGroupIndicator
const Item = SegmentGroupItem
const ItemControl = SegmentGroupItemControl
const ItemText = SegmentGroupItemText
const Label = SegmentGroupLabel

export {
  // SegmentGroup,
  // SegmentGroupIndicator,
  // SegmentGroupItem,
  // SegmentGroupItemControl,
  // SegmentGroupItemText,
  // SegmentGroupLabel,

  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  Root,
}
