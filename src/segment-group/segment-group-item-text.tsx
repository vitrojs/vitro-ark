import { segmentGroupAnatomy } from '@ark-ui/anatomy'

import { mergeProps } from '@vitro/zag'
import { useSegmentGroupContext } from './segment-group-context'
import { useSegmentGroupItemContext } from './segment-group-item-context'

export type SegmentGroupItemTextProps = JSX.IntrinsicElements['span']

export const SegmentGroupItemText: JSX.Component<SegmentGroupItemTextProps> = (
	props,
) => {
	const api = useSegmentGroupContext()
	const itemProps = useSegmentGroupItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemTextProps(itemProps()),
	)

	return (
		<span {...mergedProps} {...segmentGroupAnatomy.build().itemText.attrs} />
	)
}
