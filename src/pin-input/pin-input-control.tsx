import { mergeProps } from '../utils'
import { usePinInputContext } from './pin-input-context'

export type PinInputControlProps = JSX.IntrinsicElements['div']

export const PinInputControl = (props: PinInputControlProps) => {
  const api = usePinInputContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  return <div {...mergedProps} />
}
