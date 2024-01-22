import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'
import { useComboboxItemContext } from './combobox-item-context'

export type ComboboxItemTextProps = JSX.IntrinsicElements['span']

export const ComboboxItemText: JSX.Component<ComboboxItemTextProps> = (props) => {
	const api = useComboboxContext()
	const itemProps = useComboboxItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemTextProps(itemProps()),
	)

	return <span {...mergedProps} />
}
