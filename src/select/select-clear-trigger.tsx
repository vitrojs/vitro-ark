import { mergeProps } from '../utils'
import { useSelectContext } from './select-context'

export type SelectClearTriggerProps = JSX.IntrinsicElements['button']

export const SelectClearTrigger = (props: SelectClearTriggerProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().clearTriggerProps)

  return <button {...mergedProps} />
}
