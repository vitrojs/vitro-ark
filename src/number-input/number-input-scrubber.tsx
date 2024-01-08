import { mergeProps } from '../utils'
import { useNumberInputContext } from './number-input-context'

export type NumberInputScrubberProps = JSX.IntrinsicElements['div']

export const NumberInputScrubber = (props: NumberInputScrubberProps) => {
  const api = useNumberInputContext()
  const mergedProps = mergeProps(props, () => api().scrubberProps)

  return <div {...mergedProps} />
}
