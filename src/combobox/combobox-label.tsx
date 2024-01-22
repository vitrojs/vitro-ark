import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'

export type ComboboxLabelProps = JSX.IntrinsicElements['label']

export const ComboboxLabel: JSX.Component<ComboboxLabelProps> = (props) => {
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () => combobox().labelProps)

	return <label {...mergedProps} />
}
