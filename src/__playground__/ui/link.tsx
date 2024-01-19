import { Assign } from '../lib/create-style-context'
import { link, LinkVariantProps } from 'styled-system/recipes'

export type LinkProps = Assign<JSX.IntrinsicElements['a'], LinkVariantProps>

export const Link: JSX.Component<LinkProps> = (props) => {
  const [linkProps, variantProps] = link.splitVariantProps(props)
  return <a {...variantProps} class={[link(linkProps), variantProps.class]} />
}
