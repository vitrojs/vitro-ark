import { useMenuTriggerItemContext } from './menu-context'

export type MenuTriggerItemProps = JSX.IntrinsicElements['div']

export const MenuTriggerItem: JSX.Component<MenuTriggerItemProps> = (props) => {
	const getTriggerItemProps = useMenuTriggerItemContext()
	const mergedProps = Object.assign(() => getTriggerItemProps?.(), props)

	return <div {...mergedProps} />
}
