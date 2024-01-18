import { segmentGroupAnatomy } from '@ark-ui/anatomy'

import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { SegmentGroupProvider } from './segment-group-context'
import { useSegmentGroup, type UseSegmentGroupProps } from './use-segment-group'

export type SegmentGroupProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseSegmentGroupProps>
>

export const SegmentGroup = ({
  // ----
  dir,
  disabled,
  form,
  getRootNode,
  id,
  ids,
  name,
  onValueChange,
  orientation,
  value,
  // ---

  ...props
}: SegmentGroupProps) => {
  const api = useSegmentGroup({
    dir,
    disabled,
    form,
    getRootNode,
    id,
    ids,
    name,
    onValueChange,
    orientation,
    value,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <SegmentGroupProvider value={api}>
      <div {...mergedProps} {...segmentGroupAnatomy.build().root.attrs} />
    </SegmentGroupProvider>
  )
}
