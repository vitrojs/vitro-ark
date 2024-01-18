import type { Observify } from '@vitro/zag'
import type { OptionItemProps, OptionItemState } from '@zag-js/menu'
import { deepEqual as equals } from 'fast-equals'
import { $$, useMemo } from 'vitro'
import type { Accessor, Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { useMenuContext } from './menu-context'

export type MenuOptionItemProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<OptionItemProps> & {
    children?: JSX.Element | ((state: Accessor<OptionItemState>) => JSX.Element)
  }
>

export const MenuOptionItem = ({
  id,
  disabled,
  valueText,
  closeOnSelect,
  name,
  type,
  value,
  onCheckedChange,

  // ----
  children,
  ...props
}: MenuOptionItemProps) => {
  const menu = useMenuContext()
  const optionProps = () => ({
    id: $$(id),
    disabled: $$(disabled),
    valueText: $$(valueText),
    closeOnSelect: $$(closeOnSelect),
    name: $$(name),
    type: $$(type),
    value: $$(value),
    onCheckedChange,
  })
  const mergedProps = mergeProps(props, () =>
    menu().getOptionItemProps(optionProps()),
  )
  const itemState = useMemo(() => menu().getOptionItemState(optionProps()), {
    equals,
  })

  return <div {...mergedProps}>{applyChildren(children, itemState)}</div>
}
