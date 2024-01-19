import { segmentGroupAnatomy } from '@ark-ui/anatomy'
import type { ItemState } from '@zag-js/radio-group'

import { deepEqual as equals } from 'fast-equals'
import type { Observify } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { toRecord, mergeProps } from '@vitro/zag'
import { useSegmentGroupContext } from './segment-group-context'
import {
	SegmentGroupItemProvider,
	type SegmentGroupItemContext,
} from './segment-group-item-context'
export type SegmentGroupItemProps = Assign<
	JSX.IntrinsicElements['label'],
	Observify<SegmentGroupItemContext> & {
		children?:
			| ((state: ObservableReadonly<ItemState>) => JSX.Element)
			| JSX.Element
	}
>

export const SegmentGroupItem = ({
	// ----
	value,
	disabled,
	invalid,
	// ----
	children,
	...props
}: SegmentGroupItemProps) => {
	const itemProps = () => toRecord({ value, disabled, invalid })

	const api = useSegmentGroupContext()
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

	const itemState = useMemo(() => api().getItemState(itemProps()), { equals })

	return (
		<SegmentGroupItemProvider value={itemProps}>
			<label {...mergedProps} {...segmentGroupAnatomy.build().item.attrs}>
				{applyChildren(children, itemState)}
			</label>
		</SegmentGroupItemProvider>
	)
}
