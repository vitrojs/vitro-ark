import type { AreaProps } from '@zag-js/color-picker'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface ColorPickerAreaContext extends AreaProps {}

export const [ColorPickerAreaProvider, useColorPickerAreaContext] =
  createContext<Accessor<ColorPickerAreaContext>>({
    hookName: 'useColorPickerAreaContext',
    providerName: '<ColorPickerAreaProvider />',
  })
