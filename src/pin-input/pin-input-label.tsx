import { mergeProps } from '../utils'
import { usePinInputContext } from './pin-input-context'

export type PinInputLabelProps = JSX.IntrinsicElements['label']

export const PinInputLabel = (props: PinInputLabelProps) => {
  const api = usePinInputContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
