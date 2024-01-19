import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'
import { useComboboxItemContext } from './combobox-item-context'

export type ComboboxItemIndicatorProps = JSX.IntrinsicElements['div']

export const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
	const combobox = useComboboxContext()
	const itemProps = useComboboxItemContext()
	const mergedProps = mergeProps(props, () =>
		combobox().getItemIndicatorProps(itemProps()),
	)

	return <div {...mergedProps} />
}
