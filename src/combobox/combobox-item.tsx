import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { ItemProps, ItemState } from '@zag-js/combobox'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Accessor, Assign } from '../types'
import { applyChildren } from '../utils'
import { useComboboxContext } from './combobox-context'
import { ComboboxItemProvider } from './combobox-item-context'
export type ComboboxItemProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemProps> & {
		children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
	}
>

export const ComboboxItem: JSX.Component<ComboboxItemProps> = ({
	item,
	children,
	...props
}) => {
	const itemProps = () => ({
		item: $$(item),
	})

	const api = useComboboxContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))
	const state = useMemo(() => api().getItemState(itemProps()), { equals })
	return (
		<ComboboxItemProvider value={itemProps}>
			<div {...mergedProps}>{applyChildren(children, state)}</div>
		</ComboboxItemProvider>
	)
}
