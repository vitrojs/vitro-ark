import { mergeProps } from '@vitro/zag'
import { useSwitchContext } from './switch-context'

export type SwitchThumbProps = JSX.IntrinsicElements['span']

export const SwitchThumb = (props: SwitchThumbProps) => {
  const api = useSwitchContext()
  const mergedProps = mergeProps(props, () => api().thumbProps)

  return <span {...mergedProps} />
}
