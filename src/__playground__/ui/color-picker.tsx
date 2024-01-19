import {
  ColorPicker as ArkColorPicker,
  type ColorPickerProps as ArkColorPickerProps,
} from '@vitro/ark'

import { colorPicker, ColorPickerVariantProps } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(colorPicker)

export type ColorPickerProps = Assign<
  ArkColorPickerProps,
  ColorPickerVariantProps
>

const ColorPicker: JSX.Component<ColorPickerProps> = withProvider(
  ArkColorPicker.Root,
  'root',
)
const ColorPickerArea = withContext(ArkColorPicker.Area, 'area')
const ColorPickerAreaBackground = withContext(
  ArkColorPicker.AreaBackground,
  'areaBackground',
)
const ColorPickerAreaThumb = withContext(ArkColorPicker.AreaThumb, 'areaThumb')
const ColorPickerChannelInput = withContext(
  ArkColorPicker.ChannelInput,
  'channelInput',
)
const ColorPickerChannelSlider = withContext(
  ArkColorPicker.ChannelSlider,
  'channelSlider',
)
const ColorPickerChannelSliderThumb = withContext(
  ArkColorPicker.ChannelSliderThumb,
  'channelSliderThumb',
)
const ColorPickerChannelSliderTrack = withContext(
  ArkColorPicker.ChannelSliderTrack,
  'channelSliderTrack',
)
const ColorPickerContent = withContext(ArkColorPicker.Content, 'content')
const ColorPickerControl = withContext(ArkColorPicker.Control, 'control')
const ColorPickerEyeDropperTrigger = withContext(
  ArkColorPicker.EyeDropperTrigger,
  'eyeDropperTrigger',
)
const ColorPickerFormatSelect = withContext(
  ArkColorPicker.FormatSelect,
  'formatSelect',
)
const ColorPickerFormatTrigger = withContext(
  ArkColorPicker.FormatTrigger,
  'formatTrigger',
)
const ColorPickerLabel = withContext(ArkColorPicker.Label, 'label')
const ColorPickerPositioner = withContext(
  ArkColorPicker.Positioner,
  'positioner',
)
const ColorPickerSwatch = withContext(ArkColorPicker.Swatch, 'swatch')
const ColorPickerSwatchGroup = withContext(
  ArkColorPicker.SwatchGroup,
  'swatchGroup',
)
const ColorPickerSwatchIndicator = withContext(
  ArkColorPicker.SwatchIndicator,
  'swatchIndicator',
)
const ColorPickerSwatchTrigger = withContext(
  ArkColorPicker.SwatchTrigger,
  'swatchTrigger',
)
const ColorPickerTransparencyGrid = withContext(
  ArkColorPicker.TransparencyGrid,
  'transparencyGrid',
)
const ColorPickerTrigger = withContext(ArkColorPicker.Trigger, 'trigger')
const ColorPickerValueText = withContext(ArkColorPicker.ValueText, 'valueText')
const ColorPickerView = withContext(ArkColorPicker.View, 'view')

const Root = ColorPicker
const Area = ColorPickerArea
const AreaBackground = ColorPickerAreaBackground
const AreaThumb = ColorPickerAreaThumb
const ChannelInput = ColorPickerChannelInput
const ChannelSlider = ColorPickerChannelSlider
const ChannelSliderThumb = ColorPickerChannelSliderThumb
const ChannelSliderTrack = ColorPickerChannelSliderTrack
const Content = ColorPickerContent
const Control = ColorPickerControl
const EyeDropperTrigger = ColorPickerEyeDropperTrigger
const FormatSelect = ColorPickerFormatSelect
const FormatTrigger = ColorPickerFormatTrigger
const Label = ColorPickerLabel
const Positioner = ColorPickerPositioner
const Swatch = ColorPickerSwatch
const SwatchGroup = ColorPickerSwatchGroup
const SwatchIndicator = ColorPickerSwatchIndicator
const SwatchTrigger = ColorPickerSwatchTrigger
const TransparencyGrid = ColorPickerTransparencyGrid
const Trigger = ColorPickerTrigger
const ValueText = ColorPickerValueText
const View = ColorPickerView

export {
  // ColorPicker,
  // ColorPickerArea,
  // ColorPickerAreaBackground,
  // ColorPickerAreaThumb,
  // ColorPickerChannelInput,
  // ColorPickerChannelSlider,
  // ColorPickerChannelSliderThumb,
  // ColorPickerChannelSliderTrack,
  // ColorPickerContent,
  // ColorPickerControl,
  // ColorPickerEyeDropperTrigger,
  // ColorPickerFormatSelect,
  // ColorPickerFormatTrigger,
  // ColorPickerLabel,
  // ColorPickerPositioner,
  // ColorPickerSwatch,
  // ColorPickerSwatchGroup,
  // ColorPickerSwatchIndicator,
  // ColorPickerSwatchTrigger,
  // ColorPickerTransparencyGrid,
  // ColorPickerTrigger,
  // ColorPickerValueText,
  // ColorPickerView,

  Area,
  AreaBackground,
  AreaThumb,
  ChannelInput,
  ChannelSlider,
  ChannelSliderThumb,
  ChannelSliderTrack,
  Content,
  Control,
  EyeDropperTrigger,
  FormatSelect,
  FormatTrigger,
  Label,
  Positioner,
  Root,
  Swatch,
  SwatchGroup,
  SwatchIndicator,
  SwatchTrigger,
  TransparencyGrid,
  Trigger,
  ValueText,
  View,
}
