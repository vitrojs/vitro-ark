import {
  Checkbox as ArkCheckbox,
  type CheckboxProps as ArkCheckboxProps,
} from '@vitro/ark'

import { checkbox, type AccordionVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(checkbox)

export type CheckboxProps = Assign<ArkCheckboxProps, AccordionVariantProps>

const Checkbox: JSX.Component<CheckboxProps> = withProvider(
  ArkCheckbox.Root,
  'root',
)
const CheckboxControl = withContext(ArkCheckbox.Control, 'control')
const CheckboxIndicator = withContext(ArkCheckbox.Indicator, 'indicator')
const CheckboxLabel = withContext(ArkCheckbox.Label, 'label')

const Root = Checkbox
const Control = CheckboxControl
const Indicator = CheckboxIndicator
const Label = CheckboxLabel

export {
  // Checkbox,
  // CheckboxControl,
  // CheckboxIndicator,
  // CheckboxLabel,
  Control,
  Indicator,
  Label,
  Root,
}
