import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { ItemGroupProps } from '@zag-js/combobox'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useComboboxContext } from './combobox-context'

export type ComboboxItemGroupProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupProps>
>

export const ComboboxItemGroup: JSX.Component<ComboboxItemGroupProps> = ({ id, ...props }) => {
	const groupProps = () => ({ id: $$(id) })
	const combobox = useComboboxContext()
	const mergedProps = mergeProps(props, () =>
		combobox().getItemGroupProps(groupProps()),
	)

	return <div {...mergedProps} />
}
