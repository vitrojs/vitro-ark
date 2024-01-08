import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { applyChildren, mergeProps } from '../utils'
import { SwitchProvider } from './switch-context'
import {
  useSwitch,
  type UseSwitchProps,
  type UseSwitchReturn,
} from './use-switch'

export type SwitchProps = Assign<
  JSX.IntrinsicElements['label'],
  Observify<UseSwitchProps> & {
    children?: JSX.Child | ((api: UseSwitchReturn) => JSX.Child)
  }
>

export const Switch = ({
  checked,
  dir,
  disabled,
  form,
  getRootNode,
  id,
  ids,
  invalid,
  label,
  name,
  onCheckedChange,
  required,
  value,

  // ----
  children,
  ...props
}: SwitchProps) => {
  const switchProps = {
    checked,
    dir,
    disabled,
    form,
    getRootNode,
    id,
    ids,
    invalid,
    label,
    name,
    onCheckedChange,
    required,
    value,
  }
  const api = useSwitch(switchProps)
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <SwitchProvider value={api}>
      <label {...mergedProps}>{applyChildren(children, api)}</label>
    </SwitchProvider>
  )
}
