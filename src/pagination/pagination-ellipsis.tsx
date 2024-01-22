import type { EllipsisProps } from '@zag-js/pagination'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { usePaginationContext } from './pagination-context'

export type PaginationEllipsisProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<EllipsisProps>
>

export const PaginationEllipsis: JSX.Component<PaginationEllipsisProps> = ({
	index,
	...props
}) => {
	const api = usePaginationContext()
	const mergedProps = mergeProps(props, () =>
		api().getEllipsisProps({ index: $$(index) }),
	)

	return <div {...mergedProps} />
}
