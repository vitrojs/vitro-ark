import type { ItemProps } from '@zag-js/pagination'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { usePaginationContext } from './pagination-context'

export type PaginationItemProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<ItemProps>
>

export const PaginationItem: JSX.Component<PaginationItemProps> = ({
	value,
	type,
	...props
}) => {
	const itemProps = () => ({
		value: $$(value),
		type: $$(type),
	})
	const api = usePaginationContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

	return <button {...mergedProps} />
}
