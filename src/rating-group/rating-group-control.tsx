import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { useRatingGroupContext } from './rating-group-context'
import type { UseRatingGroupReturn } from './use-rating-group'

export type RatingGroupControlProps = Assign<
	JSX.IntrinsicElements['div'],
	{ children?: JSX.Element | ((api: UseRatingGroupReturn) => JSX.Element) }
>

export const RatingGroupControl = ({
	children,
	...props
}: RatingGroupControlProps) => {
	const api = useRatingGroupContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	const hiddenInputProps = mergeProps({}, () => api().hiddenInputProps)
	return (
		<>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
			<input {...hiddenInputProps} />
		</>
	)
}
