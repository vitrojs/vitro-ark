import type { ItemProps, ItemState } from '@zag-js/select'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Observify } from '@vitro/zag'
import type { Accessor, Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { useSelectContext } from './select-context'
import { SelectItemProvider } from './select-item-context'

export type SelectItemProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemProps> & {
		children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
	}
>

export const SelectItem = ({
	item,

	children,
	...props
}: SelectItemProps) => {
	const itemProps = () => ({ item: $$(item) })

	const api = useSelectContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))
	const childrenApi = useMemo(() => api().getItemState(itemProps()), { equals })
	return (
		<SelectItemProvider value={itemProps}>
			<div {...mergedProps}>{applyChildren(children, childrenApi)}</div>
		</SelectItemProvider>
	)
}
