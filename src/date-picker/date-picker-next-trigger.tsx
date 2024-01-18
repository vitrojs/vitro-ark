import { mergeProps } from '@vitro/zag'
import { useDatePickerContext } from './date-picker-context'
import { useDatePickerViewContext } from './date-picker-view-context'

export type DatePickerNextTriggerProps = JSX.IntrinsicElements['button']

export const DatePickerNextTrigger = (props: DatePickerNextTriggerProps) => {
  const api = useDatePickerContext()
  const viewProps = useDatePickerViewContext()
  const mergedProps = mergeProps(props, () =>
    api().getNextTriggerProps(viewProps()),
  )

  return <button {...mergedProps} />
}
