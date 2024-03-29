import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

export type MenuContextTriggerProps = JSX.IntrinsicElements['button']

export const MenuContextTrigger: JSX.Component<MenuContextTriggerProps> = (
	props,
) => {
	const menu = useMenuContext()
	const mergedProps = mergeProps(props, () => menu?.().contextTriggerProps)

	return <button {...mergedProps} />
}
