import type { EllipsisProps } from '@zag-js/pagination'

import type { Assign } from '../types'
import { usePaginationContext } from './pagination-context'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import { mergeProps } from '../utils'

export type PaginationEllipsisProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<EllipsisProps>
>

export const PaginationEllipsis = ({
  index,
  ...props
}: PaginationEllipsisProps) => {
  const api = usePaginationContext()
  const mergedProps = mergeProps(props, () =>
    api().getEllipsisProps({ index: $$(index) }),
  )

  return <div {...mergedProps} />
}
