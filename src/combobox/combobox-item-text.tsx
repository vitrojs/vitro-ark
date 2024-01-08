import { mergeProps } from '../utils'
import { useComboboxContext } from './combobox-context'
import { useComboboxItemContext } from './combobox-item-context'

export type ComboboxItemTextProps = JSX.IntrinsicElements['span']

export const ComboboxItemText = (props: ComboboxItemTextProps) => {
  const api = useComboboxContext()
  const itemProps = useComboboxItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemTextProps(itemProps()),
  )

  return <span {...mergedProps} />
}
