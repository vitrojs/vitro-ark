import type { ItemGroupProps } from '@zag-js/combobox'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { useComboboxContext } from './combobox-context'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'

export type ComboboxItemGroupProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemGroupProps>
>

export const ComboboxItemGroup = ({ id, ...props }: ComboboxItemGroupProps) => {
  const groupProps = () => ({ id: $$(id) })
  const combobox = useComboboxContext()
  const mergedProps = mergeProps(props, () =>
    combobox().getItemGroupProps(groupProps()),
  )

  return <div {...mergedProps} />
}
