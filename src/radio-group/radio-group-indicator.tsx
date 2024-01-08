import { mergeProps } from '../utils'
import { useRadioGroupContext } from './radio-group-context'

export type RadioGroupIndicatorProps = JSX.IntrinsicElements['div']

export const RadioGroupIndicator = (props: RadioGroupIndicatorProps) => {
  const api = useRadioGroupContext()
  const mergedProps = mergeProps(props, () => api().indicatorProps)

  return <div {...mergedProps} />
}
