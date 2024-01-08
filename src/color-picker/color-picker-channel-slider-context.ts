import type { ChannelProps } from '@zag-js/color-picker'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface ColorPickerChannelSliderContext extends ChannelProps {}

export const [
  ColorPickerChannelSliderProvider,
  useColorPickerChannelSliderContext,
] = createContext<Accessor<ColorPickerChannelSliderContext>>({
  hookName: 'useColorPickerChannelSliderContext',
  providerName: '<ColorPickerChannelSliderProvider />',
})
