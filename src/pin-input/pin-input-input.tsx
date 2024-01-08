import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { usePinInputContext } from './pin-input-context'

export type PinInputInputProps = Assign<
  JSX.IntrinsicElements['input'],
  { index: number }
>

export const PinInputInput = ({ index, ...props }: PinInputInputProps) => {
  const api = usePinInputContext()
  const mergedProps = mergeProps(props, () => api().getInputProps({ index }))
  console.log(api().getInputProps({ index }))
  return <input {...mergedProps} />
}
