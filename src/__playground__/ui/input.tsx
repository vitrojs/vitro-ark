import { Assign } from '../lib/create-style-context'
import { InputVariantProps, input } from 'styled-system/recipes'

export type InputProps = Assign<
  JSX.IntrinsicElements['input'],
  InputVariantProps
>

export const Input: JSX.Component<InputProps> = (props) => {
  const [inputProps, otherProps] = input.splitVariantProps(props)
  return <input {...otherProps} class={[input(inputProps), otherProps.class]} />
}
