import { useRadioGroupContext } from './radio-group-context'
import { useRadioGroupItemContext } from './radio-group-item-context'

export type RadioGroupItemControlProps = JSX.IntrinsicElements['div']

export const RadioGroupItemControl = (props: RadioGroupItemControlProps) => {
  const api = useRadioGroupContext()
  const itemProps = useRadioGroupItemContext()
  const mergedProps = Object.assign(
    () => api().getItemControlProps(itemProps()),
    props,
  )
  const inputProps = mergedProps(
    // @ts-ignore
    {},
    () => api().getItemHiddenInputProps(itemProps()),
  )

  return (
    <>
      <div {...mergedProps} />
      {/* @ts-ignore */}
      <input {...inputProps} />
    </>
  )
}
