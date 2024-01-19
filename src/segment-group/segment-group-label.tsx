import { segmentGroupAnatomy } from '@ark-ui/anatomy'
import { mergeProps } from '@vitro/zag'
import { useSegmentGroupContext } from './segment-group-context'

export type SegmentGroupLabelProps = JSX.IntrinsicElements['label']

export const SegmentGroupLabel = (props: SegmentGroupLabelProps) => {
	const api = useSegmentGroupContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} {...segmentGroupAnatomy.build().label.attrs} />
}
