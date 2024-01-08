import { mergeProps } from '../utils'
import { useColorPickerChannelSliderContext } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelSliderTrackProps = JSX.IntrinsicElements['div']

export const ColorPickerChannelSliderTrack = (
  props: ColorPickerChannelSliderTrackProps,
) => {
  const sliderContext = useColorPickerChannelSliderContext()
  const api = useColorPickerContext()
  const mergedProps = mergeProps(props, () =>
    api().getChannelSliderTrackProps(sliderContext()),
  )

  return <div {...mergedProps} />
}
