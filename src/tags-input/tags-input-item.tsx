import type { ItemProps, ItemState } from '@zag-js/tags-input'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Accessor, Assign } from '../types'
import { applyChildren } from '../utils'
import { useTagsInputContext } from './tags-input-context'
import { TagsInputItemProvider } from './tags-input-item-context'
export type TagsInputItemProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemProps> & {
		children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
	}
>

export const TagsInputItem: JSX.Component<TagsInputItemProps> = ({
	disabled,
	index,
	value,
	// ----
	children,
	...props
}) => {
	const itemProps = () => ({
		disabled: $$(disabled),
		index: $$(index),
		value: $$(value),
	})

	const api = useTagsInputContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

	const childrenApi = useMemo(() => api().getItemState(itemProps()), { equals })
	return (
		<TagsInputItemProvider value={itemProps}>
			<div {...mergedProps}>{applyChildren(children, childrenApi)}</div>
		</TagsInputItemProvider>
	)
}
