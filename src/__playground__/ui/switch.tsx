import {
  Switch as ArkSwitch,
  type SwitchProps as ArkSwitchProps,
} from '@vitro/ark'

import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)
export type SwitchProps = Assign<ArkSwitchProps, SwitchRecipeVariantProps>

const Switch = withProvider(ArkSwitch.Root, 'root')
const SwitchControl = withContext(ArkSwitch.Control, 'control')
const SwitchLabel = withContext(ArkSwitch.Label, 'label')
const SwitchThumb = withContext(ArkSwitch.Thumb, 'thumb')

const Root = Switch
const Control = SwitchControl
const Label = SwitchLabel
const Thumb = SwitchThumb

export {
  // Switch,
  // SwitchControl,
  // SwitchLabel,
  // SwitchThumb,

  Control,
  Label,
  Root,
  Thumb,
}
