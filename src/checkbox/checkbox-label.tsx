import { mergeProps } from '@vitro/zag'
import { useCheckboxContext } from './checkbox-context'

export type CheckboxLabelProps = JSX.IntrinsicElements['span']

export const CheckboxLabel = (props: CheckboxLabelProps) => {
  const checkbox = useCheckboxContext()
  const mergedProps = mergeProps(props, () => checkbox().labelProps)

  return <span {...mergedProps} />
}
