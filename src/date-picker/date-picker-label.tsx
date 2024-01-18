import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerLabelProps = JSX.IntrinsicElements['label']

export const DatePickerLabel = (props: DatePickerLabelProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
