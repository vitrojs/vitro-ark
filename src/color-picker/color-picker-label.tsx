import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerLabelProps = JSX.IntrinsicElements['label']

export const ColorPickerLabel = (props: ColorPickerLabelProps) => {
  const api = useColorPickerContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
