import { For } from 'vitro'
import { mergeProps } from '../utils'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerFormatSelectProps = JSX.IntrinsicElements['select']

export const ColorPickerFormatSelect = (
  props: ColorPickerFormatSelectProps,
) => {
  const api = useColorPickerContext()
  const mergedProps = mergeProps(props, () => api().formatSelectProps)

  return (
    <select {...mergedProps}>
      <For values={['rgba', 'hsla', 'hsba']}>
        {(format) => <option value={format}>{format}</option>}
      </For>
    </select>
  )
}
