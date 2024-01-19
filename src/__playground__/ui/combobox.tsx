import {
  Combobox as ArkCombobox,
  CollectionItem,
  type ComboboxProps as ArkComboboxProps,
} from '@vitro/ark'

import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(combobox)

export type ComboboxProps = Assign<
  ArkComboboxProps<CollectionItem>,
  ComboboxVariantProps
>
const Combobox = withProvider(ArkCombobox.Root, 'root')
const ComboboxClearTrigger = withContext(
  ArkCombobox.ClearTrigger,
  'clearTrigger',
)
const ComboboxContent = withContext(ArkCombobox.Content, 'content')
const ComboboxControl = withContext(ArkCombobox.Control, 'control')
const ComboboxInput = withContext(ArkCombobox.Input, 'input')
const ComboboxItem = withContext(ArkCombobox.Item, 'item')
const ComboboxItemGroup = withContext(ArkCombobox.ItemGroup, 'itemGroup')
const ComboboxItemGroupLabel = withContext(
  ArkCombobox.ItemGroupLabel,
  'itemGroupLabel',
)
const ComboboxItemIndicator = withContext(
  ArkCombobox.ItemIndicator,
  'itemIndicator',
)
const ComboboxItemText = withContext(ArkCombobox.ItemText, 'itemText')
const ComboboxLabel = withContext(ArkCombobox.Label, 'label')
const ComboboxPositioner = withContext(ArkCombobox.Positioner, 'positioner')
const ComboboxTrigger = withContext(ArkCombobox.Trigger, 'trigger')

const Root = Combobox
const ClearTrigger = ComboboxClearTrigger
const Content = ComboboxContent
const Control = ComboboxControl
const Input = ComboboxInput
const Item = ComboboxItem
const ItemGroup = ComboboxItemGroup
const ItemGroupLabel = ComboboxItemGroupLabel
const ItemIndicator = ComboboxItemIndicator
const ItemText = ComboboxItemText
const Label = ComboboxLabel
const Positioner = ComboboxPositioner
const Trigger = ComboboxTrigger

export {
  // Combobox,
  // ComboboxClearTrigger,
  // ComboboxContent,
  // ComboboxControl,
  // ComboboxInput,
  // ComboboxItem,
  // ComboboxItemGroup,
  // ComboboxItemGroupLabel,
  // ComboboxItemIndicator,
  // ComboboxItemText,
  // ComboboxLabel,
  // ComboboxPositioner,
  // ComboboxTrigger,
  Content,
  Control,
  ClearTrigger,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Label,
  Positioner,
  Root,
  Trigger,
}
