import { mergeProps } from '../utils'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerFormatTriggerProps = JSX.IntrinsicElements['button']

export const ColorPickerFormatTrigger = (
  props: ColorPickerFormatTriggerProps,
) => {
  const api = useColorPickerContext()
  const mergedProps = mergeProps(props, () => api().formatTriggerProps)

  return <button {...mergedProps} />
}
