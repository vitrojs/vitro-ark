import { mergeProps } from '../utils'
import { useNumberInputContext } from './number-input-context'

export type NumberInputInputProps = JSX.IntrinsicElements['input']

export const NumberInputInput = (props: NumberInputInputProps) => {
  const api = useNumberInputContext()
  const mergedProps = mergeProps(props, () => api().inputProps)

  return <input {...mergedProps} />
}
