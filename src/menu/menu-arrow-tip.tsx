import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

export type MenuArrowTipProps = JSX.IntrinsicElements['div']

export const MenuArrowTip: JSX.Component<MenuArrowTipProps> = (props) => {
	const menu = useMenuContext()
	const mergedProps = mergeProps(props, () => menu?.().arrowTipProps)

	return <div {...mergedProps} />
}
