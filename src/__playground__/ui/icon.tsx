import { Assign } from '../lib/create-style-context'
import { icon, type IconVariantProps } from 'styled-system/recipes'

export type IconProps = Assign<
  JSX.IntrinsicElements['svg'],
  IconVariantProps & { children: JSX.Child }
>

export const Icon: JSX.Component<IconProps> = (props: IconProps) => {
  const [iconProps, otherProps] = icon.splitVariantProps(props)
  return (
    <svg asChild {...otherProps} class={[icon(iconProps), otherProps.class]} />
  )
}
