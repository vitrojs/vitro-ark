import { Assign } from '../lib/create-style-context'
import { textarea, TextareaVariantProps } from 'styled-system/recipes'

export type TextareaProps = Assign<
  JSX.IntrinsicElements['textarea'],
  TextareaVariantProps
>
export const Textarea: JSX.Component<TextareaProps> = (props) => {
  const [variantProps, otherProps] = textarea.splitVariantProps(props)

  return (
    <textarea
      {...otherProps}
      class={[textarea(variantProps), otherProps.class]}
    />
  )
}
