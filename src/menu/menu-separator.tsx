import { mergeProps } from '../utils'
import { useMenuContext } from './menu-context'

export type MenuSeparatorProps = JSX.IntrinsicElements['hr']

export const MenuSeparator = (props: MenuSeparatorProps) => {
  const menu = useMenuContext()
  const mergedProps = mergeProps(props, () => menu?.().separatorProps)

  return <hr {...mergedProps} />
}
