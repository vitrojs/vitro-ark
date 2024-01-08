import { mergeProps } from '../utils'
import { useSelectContext } from './select-context'

export type SelectLabelProps = JSX.IntrinsicElements['label']

export const SelectLabel = (props: SelectLabelProps) => {
  const api = useSelectContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
