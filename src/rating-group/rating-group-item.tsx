import type { ItemProps, ItemState } from '@zag-js/rating-group'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Accessor, Assign } from '../types'
import { applyChildren } from '../utils'
import { useRatingGroupContext } from './rating-group-context'
import { RatingGroupItemProvider } from './rating-group-item-context'
export type RatingGroupItemProps = Assign<
	JSX.IntrinsicElements['span'],
	Observify<ItemProps> & {
		children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
	}
>

export const RatingGroupItem: JSX.Component<RatingGroupItemProps> = ({
	index,

	children,
	...props
}) => {
	const itemProps = () => ({ index: $$(index) })

	const api = useRatingGroupContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

	const itemState = useMemo(() => api().getItemState(itemProps()), { equals })

	return (
		<RatingGroupItemProvider value={itemProps}>
			<span {...mergedProps}>{applyChildren(children, itemState)}</span>
		</RatingGroupItemProvider>
	)
}
