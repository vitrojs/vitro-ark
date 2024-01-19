import {
  PinInput as ArkPinInput,
  type PinInputProps as ArkPinInputProps,
} from '@vitro/ark'

import { PinInputVariantProps, pinInput } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(pinInput)
export type PinInputProps = Assign<ArkPinInputProps, PinInputVariantProps>

const PinInput: JSX.Component<PinInputProps> = withProvider(
  ArkPinInput.Root,
  'root',
)
const PinInputControl = withContext(ArkPinInput.Control, 'control')
const PinInputInput = withContext(ArkPinInput.Input, 'input')
const PinInputLabel = withContext(ArkPinInput.Label, 'label')

const Root = PinInput
const Control = PinInputControl
const Input = PinInputInput
const Label = PinInputLabel

export {
  // PinInput,
  // PinInputControl,
  // PinInputInput,
  // PinInputLabel,

  Control,
  Input,
  Label,
  Root,
}
