import type { ItemProps, ItemState } from '@zag-js/tags-input'

import type { Accessor, Assign } from '../types'
import { useTagsInputContext } from './tags-input-context'
import { TagsInputItemProvider } from './tags-input-item-context'
import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { $$, useMemo } from 'vitro'
import { deepEqual as equals } from 'fast-equals'
export type TagsInputItemProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemProps> & {
    children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
  }
>

export const TagsInputItem = ({
  disabled,
  index,
  value,
  // ----
  children,
  ...props
}: TagsInputItemProps) => {
  const itemProps = () => ({
    disabled: $$(disabled),
    index: $$(index),
    value: $$(value),
  })

  const api = useTagsInputContext()
  const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))

  const childrenApi = useMemo(() => api().getItemState(itemProps()), { equals })
  return (
    <TagsInputItemProvider value={itemProps}>
      <div {...mergedProps}>{applyChildren(children, childrenApi)}</div>
    </TagsInputItemProvider>
  )
}
