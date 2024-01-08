import type { OptionItemProps, OptionItemState } from '@zag-js/menu'
import { useMemo } from 'vitro'
import type { Observify } from '@vitro/zag'
import type { Accessor, Assign } from '../types'
import { applyChildren, copyObservableRecord, mergeProps } from '../utils'
import { useMenuContext } from './menu-context'
import { deepEqual as equals } from 'fast-equals'

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

  const optionProps = () =>
    copyObservableRecord({
      id,
      disabled,
      valueText,
      closeOnSelect,
      name,
      type,
      value,
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
