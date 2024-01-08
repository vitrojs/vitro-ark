import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerPositionerProps = JSX.IntrinsicElements['div']

export const ColorPickerPositioner = (props: ColorPickerPositionerProps) => {
  const api = useColorPickerContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(props, () => api().positionerProps)

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
