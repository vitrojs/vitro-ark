import { h } from 'vitro'
import { Assign } from '../lib/create-style-context'
import { heading, HeadingVariantProps } from 'styled-system/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = Assign<
  JSX.IntrinsicElements['h2'],
  HeadingVariantProps & { as?: As }
>

export const Heading = (props: HeadingProps) => {
  const { as = 'h2', ...rest } = props
  const [headingProps, otherProps] = heading.splitVariantProps(rest)

  return h(as, {
    ...otherProps,
    class: [heading(headingProps), otherProps.class],
  })
}
