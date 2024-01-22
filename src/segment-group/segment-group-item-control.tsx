import { segmentGroupAnatomy } from '@ark-ui/anatomy'

import { mergeProps } from '@vitro/zag'
import { useSegmentGroupContext } from './segment-group-context'
import { useSegmentGroupItemContext } from './segment-group-item-context'

export type SegmentGroupItemControlProps = JSX.IntrinsicElements['div']

export const SegmentGroupItemControl: JSX.Component<
	SegmentGroupItemControlProps
> = (props) => {
	const api = useSegmentGroupContext()
	const getItemProps = useSegmentGroupItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemControlProps(getItemProps()),
	)

	return (
		<>
			<div
				{...mergedProps}
				{...segmentGroupAnatomy.build().itemControl.attrs}
			/>
			<input {...api().getItemHiddenInputProps(getItemProps())} />
		</>
	)
}
