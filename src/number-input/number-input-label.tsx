import { mergeProps } from '../utils'
import { useNumberInputContext } from './number-input-context'

export type NumberInputLabelProps = JSX.IntrinsicElements['label']

export const NumberInputLabel = (props: NumberInputLabelProps) => {
  const api = useNumberInputContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
