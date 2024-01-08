import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { RatingGroupProvider } from './rating-group-context'
import { useRatingGroup, type UseRatingGroupProps } from './use-rating-group'
import { mergeProps } from '../utils'

export type RatingGroupProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseRatingGroupProps>
>

export const RatingGroup = ({
  // ----
  allowHalf,
  autoFocus,
  count,
  dir,
  disabled,
  form,
  getRootNode,
  id,
  ids,
  name,
  onHoverChange,
  onValueChange,
  readOnly,
  translations,
  value,
  // ----
  ...props
}: RatingGroupProps) => {
  const api = useRatingGroup({
    allowHalf,
    autoFocus,
    count,
    dir,
    disabled,
    form,
    getRootNode,
    id,
    ids,
    name,
    onHoverChange,
    onValueChange,
    readOnly,
    translations,
    value,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <RatingGroupProvider value={api}>
      <div {...mergedProps} />
    </RatingGroupProvider>
  )
}
