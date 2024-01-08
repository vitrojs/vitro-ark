import { mergeProps } from '../utils'
import { useSwitchContext } from './switch-context'

export type SwitchLabelProps = JSX.IntrinsicElements['span']

export const SwitchLabel = (props: SwitchLabelProps) => {
  const api = useSwitchContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <span {...mergedProps} />
}
