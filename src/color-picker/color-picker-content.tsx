import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerContentProps = JSX.IntrinsicElements['div']

export const ColorPickerContent = (props: ColorPickerContentProps) => {
  const api = useColorPickerContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(
    props,
    () => api().contentProps,
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
