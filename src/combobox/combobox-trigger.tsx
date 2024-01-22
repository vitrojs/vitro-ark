import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxTriggerProps = JSX.IntrinsicElements['button']

export const ComboboxTrigger: JSX.Component<ComboboxTriggerProps> = (props) => {
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () => combobox().triggerProps)

	return <button {...mergedProps} />
}
