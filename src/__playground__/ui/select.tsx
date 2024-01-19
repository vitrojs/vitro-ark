import {
  Select as ArkSelect,
  CollectionItem,
  type SelectProps as ArkSelectProps,
} from '@vitro/ark'

import { select, type SelectVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(select)

export type SelectProps = Assign<
  ArkSelectProps<CollectionItem>,
  SelectVariantProps
>

const Select: JSX.Component<SelectProps> = withProvider(ArkSelect.Root, 'root')
const SelectClearTrigger = withContext(ArkSelect.ClearTrigger, 'clearTrigger')
const SelectContent = withContext(ArkSelect.Content, 'content')
const SelectControl = withContext(ArkSelect.Control, 'control')
const SelectIndicator = withContext(ArkSelect.Indicator, 'indicator')
const SelectItem = withContext(ArkSelect.Item, 'item')
const SelectItemGroup = withContext(ArkSelect.ItemGroup, 'itemGroup')
const SelectItemGroupLabel = withContext(
  ArkSelect.ItemGroupLabel,
  'itemGroupLabel',
)
const SelectItemIndicator = withContext(
  ArkSelect.ItemIndicator,
  'itemIndicator',
)
const SelectItemText = withContext(ArkSelect.ItemText, 'itemText')
const SelectLabel = withContext(ArkSelect.Label, 'label')
const SelectPositioner = withContext(ArkSelect.Positioner, 'positioner')
const SelectTrigger = withContext(ArkSelect.Trigger, 'trigger')
const SelectValueText = withContext(ArkSelect.ValueText, 'valueText')

const Root = Select
const ClearTrigger = SelectClearTrigger
const Content = SelectContent
const Control = SelectControl
const Indicator = SelectIndicator
const Item = SelectItem
const ItemGroup = SelectItemGroup
const ItemGroupLabel = SelectItemGroupLabel
const ItemIndicator = SelectItemIndicator
const ItemText = SelectItemText
const Label = SelectLabel
const Positioner = SelectPositioner
const Trigger = SelectTrigger
const ValueText = SelectValueText

export {
  // Select,
  // SelectClearTrigger,
  // SelectContent,
  // SelectControl,
  // SelectIndicator,
  // SelectItem,
  // SelectItemGroup,
  // SelectItemGroupLabel,
  // SelectItemIndicator,
  // SelectItemText,
  // SelectLabel,
  // SelectPositioner,
  // SelectTrigger,
  // SelectValueText,

  ClearTrigger,
  Content,
  Control,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
  ValueText,
}
