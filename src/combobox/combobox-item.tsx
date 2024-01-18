import type { ItemProps, ItemState } from '@zag-js/combobox'
import type { Accessor, Assign } from '../types'
import { useComboboxContext } from './combobox-context'
import { deepEqual as equals } from 'fast-equals'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { ComboboxItemProvider } from './combobox-item-context'
import { $$, useMemo } from 'vitro'
import type { Observify } from '@vitro/zag'
export type ComboboxItemProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemProps> & {
    children?: JSX.Element | ((state: Accessor<ItemState>) => JSX.Element)
  }
>

export const ComboboxItem = ({
  item,
  children,
  ...props
}: ComboboxItemProps) => {
  const itemProps = () => ({
    item: $$(item),
  })

  const api = useComboboxContext()
  const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))
  const state = useMemo(() => api().getItemState(itemProps()), { equals })
  return (
    <ComboboxItemProvider value={itemProps}>
      <div {...mergedProps}>{applyChildren(children, state)}</div>
    </ComboboxItemProvider>
  )
}
