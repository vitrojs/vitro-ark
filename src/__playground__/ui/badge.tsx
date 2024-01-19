import { badge, BadgeVariantProps } from 'styled-system/recipes'

export type BadgeProps = BadgeVariantProps & JSX.IntrinsicElements['div']
export const Badge = (props: BadgeProps) => {
  const [variantProps, otherProps] = badge.splitVariantProps(props)

  return <div {...otherProps} class={[badge(variantProps), otherProps.class]} />
}
