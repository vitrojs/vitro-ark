import { mergeProps } from '@vitro/zag'
import { usePaginationContext } from './pagination-context'

export type PaginationNextTriggerProps = JSX.IntrinsicElements['button']

export const PaginationNextTrigger = (props: PaginationNextTriggerProps) => {
  const api = usePaginationContext()
  const mergedProps = mergeProps(props, () => api().nextTriggerProps)

  return <button {...mergedProps} />
}
