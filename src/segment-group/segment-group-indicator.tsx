import { segmentGroupAnatomy } from '@ark-ui/anatomy'

import { mergeProps } from '@vitro/zag'
import { useSegmentGroupContext } from './segment-group-context'

export type SegmentGroupIndicatorProps = JSX.IntrinsicElements['div']

export const SegmentGroupIndicator = (props: SegmentGroupIndicatorProps) => {
  const api = useSegmentGroupContext()
  const mergedProps = mergeProps(props, () => api().indicatorProps)

  return (
    <div {...mergedProps} {...segmentGroupAnatomy.build().indicator.attrs} />
  )
}
