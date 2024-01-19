import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps,
} from '@vitro/ark'

import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)
export type RadioGroupProps = Assign<ArkRadioGroupProps, RadioGroupVariantProps>

const RadioGroup = withProvider(ArkRadioGroup.Root, 'root')
const RadioGroupIndicator = withContext(ArkRadioGroup.Indicator, 'indicator')
const RadioGroupItem = withContext(ArkRadioGroup.Item, 'item')
const RadioGroupItemControl = withContext(
  ArkRadioGroup.ItemControl,
  'itemControl',
)
const RadioGroupItemText = withContext(ArkRadioGroup.ItemText, 'itemText')
const RadioGroupLabel = withContext(ArkRadioGroup.Label, 'label')

const Root = RadioGroup
const Indicator = RadioGroupIndicator
const Item = RadioGroupItem
const ItemControl = RadioGroupItemControl
const ItemText = RadioGroupItemText
const Label = RadioGroupLabel

export {
  // RadioGroup,
  // RadioGroupIndicator,
  // RadioGroupItem,
  // RadioGroupItemControl,
  // RadioGroupItemText,
  // RadioGroupLabel,

  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  Root,
}
