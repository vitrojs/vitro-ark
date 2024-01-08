import type { ItemProps } from '@zag-js/toggle-group'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { useToggleGroupContext } from './toggle-group-context'

export type ToggleGroupItemProps = Assign<
  JSX.IntrinsicElements['button'],
  Observify<ItemProps>
>

export const ToggleGroupItem = ({
  value,
  disabled,

  ...props
}: ToggleGroupItemProps) => {
  const getToggleProps = () => ({
    value: $$(value),
    disabled: $$(disabled),
  })

  const api = useToggleGroupContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemProps(getToggleProps()),
  )

  return <button {...mergedProps} />
}
