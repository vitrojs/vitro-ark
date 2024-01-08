import { mergeProps } from '../utils'
import { useRatingGroupContext } from './rating-group-context'

export type RatingGroupLabelProps = JSX.IntrinsicElements['label']

export const RatingGroupLabel = (props: RatingGroupLabelProps) => {
  const api = useRatingGroupContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
