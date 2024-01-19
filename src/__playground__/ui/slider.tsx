import {
  Slider as ArkSlider,
  type SliderProps as ArkSliderProps,
} from '@vitro/ark'

import { SliderVariantProps, slider } from 'styled-system/recipes'
import { Assign, createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(slider)
export type SliderProps = Assign<ArkSliderProps, SliderVariantProps>

const Slider: JSX.Component<SliderProps> = withProvider(ArkSlider.Root, 'root')
const SliderControl = withContext(ArkSlider.Control, 'control')
const SliderLabel = withContext(ArkSlider.Label, 'label')
const SliderMarker = withContext(ArkSlider.Marker, 'marker')
const SliderMarkerGroup = withContext(ArkSlider.MarkerGroup, 'markerGroup')
const SliderRange = withContext(ArkSlider.Range, 'range')
const SliderThumb = withContext(ArkSlider.Thumb, 'thumb')
const SliderTrack = withContext(ArkSlider.Track, 'track')
const SliderValueText = withContext(ArkSlider.ValueText, 'valueText')

const Root = Slider
const Control = SliderControl
const Label = SliderLabel
const Marker = SliderMarker
const MarkerGroup = SliderMarkerGroup
const Range = SliderRange
const Thumb = SliderThumb
const Track = SliderTrack
const ValueText = SliderValueText

export {
  // Slider,
  // SliderControl,
  // SliderLabel,
  // SliderMarker,
  // SliderMarkerGroup,
  // SliderRange,
  // SliderThumb,
  // SliderTrack,
  // SliderValueText,

  Control,
  Label,
  Marker,
  MarkerGroup,
  Range,
  Root,
  Thumb,
  Track,
  ValueText,
}
