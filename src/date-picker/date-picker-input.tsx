import { mergeProps } from '../utils'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerInputProps = JSX.IntrinsicElements['input']

export const DatePickerInput = (props: DatePickerInputProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(props, () => api().inputProps)

  return <input {...mergedProps} />
}
