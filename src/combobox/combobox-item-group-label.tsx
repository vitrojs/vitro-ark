import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useComboboxContext } from './combobox-context'
import { $$ } from 'vitro'

interface ItemGroupLabelProps {
  for: string
}

export type ComboboxItemGroupLabelProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemGroupLabelProps>
>

export const ComboboxItemGroupLabel = ({
  for: _for,
  ...props
}: ComboboxItemGroupLabelProps) => {
  const labelProps = () => ({ for: $$(_for) })

  const api = useComboboxContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemGroupLabelProps({ htmlFor: labelProps().for }),
  )

  return <div {...mergedProps} />
}
