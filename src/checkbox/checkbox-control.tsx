import { useCheckboxContext } from './checkbox-context'

import { mergeProps } from '../utils'
export type CheckboxControlProps = JSX.IntrinsicElements['div']

export const CheckboxControl = (props: CheckboxControlProps = {}) => {
  const api = useCheckboxContext()

  const controlProps = mergeProps(props, () => api().controlProps)
  const hiddenInputProps = mergeProps({}, () => api().hiddenInputProps)

  return (
    <>
      <div {...controlProps} />
      <input {...hiddenInputProps} />
    </>
  )
}
