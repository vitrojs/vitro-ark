import {
  RatingGroup as ArkRatingGroup,
  type RatingGroupProps as ArkRatingGroupProps,
} from '@vitro/ark'

import { RatingGroupVariantProps, ratingGroup } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)
export type RatingGroupProps = Assign<
  ArkRatingGroupProps,
  RatingGroupVariantProps
>

const RatingGroup: JSX.Component<RatingGroupProps> = withProvider(
  ArkRatingGroup.Root,
  'root',
)
const RatingGroupControl = withContext(ArkRatingGroup.Control, 'control')
const RatingGroupItem = withContext(ArkRatingGroup.Item, 'item')
const RatingGroupLabel = withContext(ArkRatingGroup.Label, 'label')

const Root = RatingGroup
const Control = RatingGroupControl
const Item = RatingGroupItem
const Label = RatingGroupLabel

export {
  // RatingGroup,
  // RatingGroupControl,
  // RatingGroupItem,
  // RatingGroupLabel,

  Control,
  Item,
  Label,
  Root,
}
