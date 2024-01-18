import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxTriggerProps = JSX.IntrinsicElements['button']

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(props, () => combobox().triggerProps)

  return <button {...mergedProps} />
}
