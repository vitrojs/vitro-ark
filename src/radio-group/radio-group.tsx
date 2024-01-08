import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { RadioGroupProvider } from './radio-group-context'
import { useRadioGroup, type UseRadioGroupProps } from './use-radio-group'

export type RadioGroupProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseRadioGroupProps>
>

export const RadioGroup = ({
  dir,
  disabled,
  form,
  getRootNode,
  id,
  ids,
  name,
  onValueChange,
  orientation,
  value,

  ...props
}: RadioGroupProps) => {
  const api = useRadioGroup({
    dir,
    disabled,
    form,
    getRootNode,
    id,
    ids,
    name,
    onValueChange,
    orientation,
    value,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <RadioGroupProvider value={api}>
      <div {...mergedProps} />
    </RadioGroupProvider>
  )
}
