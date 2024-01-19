import {
  TagsInput as ArkTagsInput,
  type TagsInputProps as ArkTagsInputProps,
} from '@vitro/ark'

import { tagsInput, type TagsInputVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tagsInput)
export type TagsInputProps = Assign<ArkTagsInputProps, TagsInputVariantProps>
const TagsInput: JSX.Component<TagsInputProps> = withProvider(
  ArkTagsInput.Root,
  'root',
)
const TagsInputClearTrigger = withContext(
  ArkTagsInput.ClearTrigger,
  'clearTrigger',
)

const TagsInputControl = withContext(ArkTagsInput.Control, 'control')
const TagsInputInput = withContext(ArkTagsInput.Input, 'input')
const TagsInputItem = withContext(ArkTagsInput.Item, 'item')
const TagsInputItemDeleteTrigger = withContext(
  ArkTagsInput.ItemDeleteTrigger,
  'itemDeleteTrigger',
)
const TagsInputItemInput = withContext(ArkTagsInput.ItemInput, 'itemInput')
const TagsInputItemText = withContext(ArkTagsInput.ItemText, 'itemText')
const TagsInputLabel = withContext(ArkTagsInput.Label, 'label')

const Root = TagsInput
const ClearTrigger = TagsInputClearTrigger
const Control = TagsInputControl
const Input = TagsInputInput
const Item = TagsInputItem
const ItemDeleteTrigger = TagsInputItemDeleteTrigger
const ItemInput = TagsInputItemInput
const ItemText = TagsInputItemText
const Label = TagsInputLabel

export {
  // TagsInput,
  // TagsInputClearTrigger,
  // TagsInputControl,
  // TagsInputInput,
  // TagsInputItem,
  // TagsInputItemDeleteTrigger,
  // TagsInputItemInput,
  // TagsInputItemText,
  // TagsInputLabel,

  ClearTrigger,
  Control,
  Input,
  Item,
  ItemDeleteTrigger,
  ItemInput,
  ItemText,
  Label,
  Root,
}
