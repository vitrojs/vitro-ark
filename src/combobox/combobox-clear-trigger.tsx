import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxClearTriggerProps = JSX.IntrinsicElements['button']

export const ComboboxClearTrigger = (props: ComboboxClearTriggerProps) => {
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () => combobox().clearTriggerProps)

	return <button {...mergedProps} />
}
