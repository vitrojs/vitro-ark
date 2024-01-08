import type { ItemProps } from '@zag-js/pagination'

import type { Assign } from '../types'
import { usePaginationContext } from './pagination-context'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import { mergeProps } from '../utils'

export type PaginationItemProps = Assign<
  JSX.IntrinsicElements['button'],
  Observify<ItemProps>
>

export const PaginationItem = ({
  value,
  type,
  ...props
}: PaginationItemProps) => {
  const itemProps = () => ({
    value: $$(value),
    type: $$(type),
  })
  const api = usePaginationContext()
  const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

  return <button {...mergedProps} />
}
