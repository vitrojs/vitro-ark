import {
  RadioGroup as ArkRadioButtonGroup,
  type RadioGroupProps as ArkRadioButtonGroupProps,
} from '@vitro/ark'

import {
  radioButtonGroup,
  type RadioButtonGroupVariantProps,
} from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)
export type RadioButtonGroupProps = Assign<
  ArkRadioButtonGroupProps,
  RadioButtonGroupVariantProps
>

const RadioButtonGroup: JSX.Component<RadioButtonGroupProps> = withProvider(
  ArkRadioButtonGroup.Root,
  'root',
)
const RadioButtonGroupIndicator = withContext(
  ArkRadioButtonGroup.Indicator,
  'indicator',
)
const RadioButtonGroupItem = withContext(ArkRadioButtonGroup.Item, 'item')
const RadioButtonGroupItemControl = withContext(
  ArkRadioButtonGroup.ItemControl,
  'itemControl',
)
const RadioButtonGroupItemText = withContext(
  ArkRadioButtonGroup.ItemText,
  'itemText',
)
const RadioButtonGroupLabel = withContext(ArkRadioButtonGroup.Label, 'label')

const Root = RadioButtonGroup
const Indicator = RadioButtonGroupIndicator
const Item = RadioButtonGroupItem
const ItemControl = RadioButtonGroupItemControl
const ItemText = RadioButtonGroupItemText
const Label = RadioButtonGroupLabel

export {
  // RadioButtonGroup,
  // RadioButtonGroupIndicator,
  // RadioButtonGroupItem,
  // RadioButtonGroupItemControl,
  // RadioButtonGroupItemText,
  // RadioButtonGroupLabel,

  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  Root,
}
