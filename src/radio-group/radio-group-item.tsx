import type { Observify } from '@vitro/zag'
import { mergeProps, toRecord } from '@vitro/zag'
import type { ItemProps, ItemState } from '@zag-js/radio-group'
import { deepEqual as equals } from 'fast-equals'
import { ObservableReadonly, useMemo } from 'vitro'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { useRadioGroupContext } from './radio-group-context'
import { RadioGroupItemProvider } from './radio-group-item-context'

export type RadioGroupItemProps = Assign<
  JSX.IntrinsicElements['label'],
  Observify<ItemProps> & {
    children?:
      | ((state: ObservableReadonly<ItemState>) => JSX.Element)
      | JSX.Element
  }
>

export const RadioGroupItem = ({
  value,
  disabled,
  invalid,
  children,
  ...props
}: RadioGroupItemProps) => {
  const getItemProps = () => toRecord({})
  const api = useRadioGroupContext()

  const mergedProps = mergeProps(props, () =>
    api().getItemProps(getItemProps()),
  )

  const itemState = useMemo(() => api().getItemState(getItemProps()), {
    equals,
  })

  return (
    <RadioGroupItemProvider value={getItemProps}>
      <label {...mergedProps}>{applyChildren(children, itemState)}</label>
    </RadioGroupItemProvider>
  )
}
