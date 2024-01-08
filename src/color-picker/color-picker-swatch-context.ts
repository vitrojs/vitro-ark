import type { SwatchProps } from '@zag-js/color-picker'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface ColorPickerSwatchContext extends SwatchProps {}

export const [ColorPickerSwatchProvider, useColorPickerSwatchContext] =
  createContext<Accessor<ColorPickerSwatchContext>>({
    hookName: 'useColorPickerSwatchContext',
    providerName: '<ColorPickerSwatchProvider />',
  })
