import { mergeProps } from '../utils'
import { useComboboxContext } from './combobox-context'

export type ComboboxClearTriggerProps = JSX.IntrinsicElements['button']

export const ComboboxClearTrigger = (props: ComboboxClearTriggerProps) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(props, () => combobox().clearTriggerProps)

  return <button {...mergedProps} />
}
