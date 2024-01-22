import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useMenuContext } from './menu-context'

export type MenuContentProps = JSX.IntrinsicElements['div']

export const MenuContent: JSX.Component<MenuContentProps> = (props) => {
	const api = useMenuContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().contentProps,
		() => presenceApi().presenceProps,
	)

	return (
		<If when={() => !presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
