import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'
import { useColorPickerSwatchContext } from './color-picker-swatch-context'

export type ColorPickerSwatchIndicatorProps = JSX.IntrinsicElements['div']

export const ColorPickerSwatchIndicator = (
  props: ColorPickerSwatchIndicatorProps,
) => {
  const api = useColorPickerContext()
  const swatchProps = useColorPickerSwatchContext()
  const mergedProps = mergeProps(props, () =>
    api().getSwatchIndicatorProps(swatchProps()),
  )

  return <div {...mergedProps} />
}
