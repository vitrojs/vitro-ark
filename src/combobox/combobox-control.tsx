import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxControlProps = JSX.IntrinsicElements['div']

export const ComboboxControl = (props: ComboboxControlProps) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(props, () => combobox().controlProps)

  return <div {...mergedProps} />
}
