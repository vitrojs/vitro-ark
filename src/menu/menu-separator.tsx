import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

export type MenuSeparatorProps = JSX.IntrinsicElements['hr']

export const MenuSeparator: JSX.Component<MenuSeparatorProps> = (props) => {
	const menu = useMenuContext()
	const mergedProps = mergeProps(props, () => menu?.().separatorProps)

	return <hr {...mergedProps} />
}
