import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { PaginationProvider } from './pagination-context'
import {
	usePagination,
	type UsePaginationProps,
	type UsePaginationReturn,
} from './use-pagination'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'

export type PaginationProps = Assign<
	JSX.IntrinsicElements['nav'],
	Observify<UsePaginationProps> & {
		children?: JSX.Element | ((api: UsePaginationReturn) => JSX.Element)
	}
>

export const Pagination = ({
	count,
	dir,
	getRootNode,
	id,
	ids,
	onPageChange,
	page,
	pageSize,
	siblingCount,
	translations,
	type,
	// ----
	children,
	...props
}: PaginationProps) => {
	const api = usePagination({
		count,
		dir,
		getRootNode,
		id,
		ids,
		onPageChange,
		page,
		pageSize,
		siblingCount,
		translations,
		type,
	})
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<PaginationProvider value={api}>
			<nav {...mergedProps}>{applyChildren(children, api)}</nav>
		</PaginationProvider>
	)
}
