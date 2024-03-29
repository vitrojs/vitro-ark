import { mergeProps } from '@vitro/zag'
import { usePresenceContext } from '../presence'
import { useMenuContext } from './menu-context'

export type MenuTriggerProps = JSX.IntrinsicElements['button']

export const MenuTrigger: JSX.Component<MenuTriggerProps> = (props) => {
	const api = useMenuContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().triggerProps,
		() => ({ 'aria-controls': presenceApi().isUnmounted && null }),
	)

	// @ts-expect-error we want aria-controls to be null to remove them if the popover if lazy mounted
	return <button {...mergedProps} />
}
