import { button, ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = Omit<
  JSX.IntrinsicElements['button'],
  keyof ButtonVariantProps
> &
  ButtonVariantProps

export const Button = (props: ButtonProps) => {
  const [ButtonProps, otherProps] = button.splitVariantProps(props)

  return (
    <button {...otherProps} class={[button(ButtonProps), otherProps.class]} />
  )
}
