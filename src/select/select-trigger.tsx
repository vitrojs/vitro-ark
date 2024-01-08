import { mergeProps } from '../utils'
import { useSelectContext } from './select-context'

export type SelectTriggerProps = JSX.IntrinsicElements['button']

export const SelectTrigger = (props: SelectTriggerProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().triggerProps)

  return <button {...mergedProps} />
}
