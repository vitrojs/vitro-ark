import { Assign } from '../lib/create-style-context'
import { iconButton, IconButtonVariantProps } from 'styled-system/recipes'

export type IconButtonProps = Assign<
  JSX.IntrinsicElements['button'],
  IconButtonVariantProps
>
export const IconButton: JSX.Component<IconButtonProps> = (
  props: IconButtonProps,
) => {
  const [iconButtonProps, otherProps] = iconButton.splitVariantProps(props)

  return (
    <button
      {...otherProps}
      class={[iconButton(iconButtonProps), otherProps.class]}
    />
  )
}
