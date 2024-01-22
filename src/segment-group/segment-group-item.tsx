import { segmentGroupAnatomy } from '@ark-ui/anatomy'
import type { ItemState } from '@zag-js/radio-group'

import type { Observify } from '@vitro/zag'
import { mergeProps, toRecord } from '@vitro/zag'
import { deepEqual as equals } from 'fast-equals'
import { ObservableReadonly, useMemo } from 'vitro'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
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

export const SegmentGroupItem: JSX.Component<SegmentGroupItemProps> = ({
	// ----
	value,
	disabled,
	invalid,
	// ----
	children,
	...props
}) => {
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
