import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'

export type DatePickerRangeTextProps = JSX.IntrinsicElements['div']

export const DatePickerRangeText = (props: DatePickerRangeTextProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(props, () => api().rangeTextProps)

  return <div {...mergedProps}>{api().visibleRangeText.start}</div>
}
