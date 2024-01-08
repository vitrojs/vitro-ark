import { mergeProps } from '../utils'
import { useNumberInputContext } from './number-input-context'

export type NumberInputDecrementTriggerProps = JSX.IntrinsicElements['button']

export const NumberInputDecrementTrigger = (
  props: NumberInputDecrementTriggerProps,
) => {
  const api = useNumberInputContext()
  const mergedProps = mergeProps(props, () => api().decrementTriggerProps)

  return <button {...mergedProps} />
}
