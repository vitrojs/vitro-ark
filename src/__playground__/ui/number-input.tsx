import {
  NumberInput as ArkNumberInput,
  type NumberInputProps as ArkNumberInputProps,
} from '@vitro/ark'

import {
  numberInput,
  type NumberInputVariantProps,
} from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(numberInput)
export type NumberInputProps = Assign<
  ArkNumberInputProps,
  NumberInputVariantProps
>

const NumberInput: JSX.Component<NumberInputProps> = withProvider(
  ArkNumberInput.Root,
  'root',
)
const NumberInputControl = withContext(ArkNumberInput.Control, 'control')
const NumberInputDecrementTrigger = withContext(
  ArkNumberInput.DecrementTrigger,
  'decrementTrigger',
)
const NumberInputIncrementTrigger = withContext(
  ArkNumberInput.IncrementTrigger,
  'incrementTrigger',
)
const NumberInputInput = withContext(ArkNumberInput.Input, 'input')
const NumberInputLabel = withContext(ArkNumberInput.Label, 'label')
const NumberInputScrubber = withContext(ArkNumberInput.Scrubber, 'scrubber')

const Root = NumberInput
const Control = NumberInputControl
const DecrementTrigger = NumberInputDecrementTrigger
const IncrementTrigger = NumberInputIncrementTrigger
const Input = NumberInputInput
const Label = NumberInputLabel
const Scrubber = NumberInputScrubber

export {
  // NumberInput,
  // NumberInputControl,
  // NumberInputDecrementTrigger,
  // NumberInputIncrementTrigger,
  // NumberInputInput,
  // NumberInputLabel,
  // NumberInputScrubber,

  Control,
  DecrementTrigger,
  IncrementTrigger,
  Input,
  Label,
  Root,
  Scrubber,
}
