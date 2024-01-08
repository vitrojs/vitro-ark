import { mergeProps } from '../utils'
import { useMenuContext } from './menu-context'

export type MenuArrowProps = JSX.IntrinsicElements['div']

export const MenuArrow = (props: MenuArrowProps) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(props, () => menu?.().arrowProps)

  return <div {...mergedProps} />
}
