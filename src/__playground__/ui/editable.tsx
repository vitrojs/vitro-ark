import {
  Editable as ArkEditable,
  type EditableProps as ArkEditableProps,
} from '@vitro/ark'

import { editable, type EditableVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export type EditableProps = Assign<ArkEditableProps, EditableVariantProps>

const Editable: JSX.Component<EditableProps> = withProvider(
  ArkEditable.Root,
  'root',
)
const EditableArea = withContext(ArkEditable.Area, 'area')
const EditableCancelTrigger = withContext(
  ArkEditable.CancelTrigger,
  'cancelTrigger',
)
const EditableControl = withContext(ArkEditable.Control, 'control')
const EditableEditTrigger = withContext(ArkEditable.EditTrigger, 'editTrigger')
const EditableInput = withContext(ArkEditable.Input, 'input')
const EditableLabel = withContext(ArkEditable.Label, 'label')
const EditablePreview = withContext(ArkEditable.Preview, 'preview')
const EditableSubmitTrigger = withContext(
  ArkEditable.SubmitTrigger,
  'submitTrigger',
)

const Root = Editable
const Area = EditableArea
const CancelTrigger = EditableCancelTrigger
const Control = EditableControl
const EditTrigger = EditableEditTrigger
const Input = EditableInput
const Label = EditableLabel
const Preview = EditablePreview
const SubmitTrigger = EditableSubmitTrigger

export {
  // Editable,
  // EditableArea,
  // EditableCancelTrigger,
  // EditableControl,
  // EditableEditTrigger,
  // EditableInput,
  // EditableLabel,
  // EditablePreview,
  // EditableSubmitTrigger,

  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Label,
  Preview,
  Root,
  SubmitTrigger,
}
