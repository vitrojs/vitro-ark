import { mergeProps } from '../utils'
import { useMenuContext } from './menu-context'

export type MenuArrowTipProps = JSX.IntrinsicElements['div']

export const MenuArrowTip = (props: MenuArrowTipProps) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(props, () => menu?.().arrowTipProps)

  return <div {...mergedProps} />
}
