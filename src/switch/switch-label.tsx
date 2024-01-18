import { mergeProps } from '@vitro/zag'
import { useSwitchContext } from './switch-context'

export type SwitchLabelProps = JSX.IntrinsicElements['span']

export const SwitchLabel = (props: SwitchLabelProps) => {
  const api = useSwitchContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <span {...mergedProps} />
}
