import { mergeProps } from '../utils'
import { useComboboxContext } from './combobox-context'

export type ComboboxLabelProps = JSX.IntrinsicElements['label']

export const ComboboxLabel = (props: ComboboxLabelProps) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(props, () => combobox().labelProps)

  return <label {...mergedProps} />
}
