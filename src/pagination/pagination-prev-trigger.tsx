import { mergeProps } from '@vitro/zag'
import { usePaginationContext } from './pagination-context'

export type PaginationPrevTriggerProps = JSX.IntrinsicElements['button']

export const PaginationPrevTrigger = (props: PaginationPrevTriggerProps) => {
	const api = usePaginationContext()
	const mergedProps = mergeProps(props, () => api().prevTriggerProps)

	return <button {...mergedProps} />
}
