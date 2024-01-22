import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { useMenuContext } from './menu-context'

export type MenuPositionerProps = JSX.IntrinsicElements['div']

export const MenuPositioner: JSX.Component<MenuPositionerProps> = (props) => {
	const api = useMenuContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(props, () => api().positionerProps)

	return (
		<If when={!presenceApi().isUnmounted}>
			<div {...mergedProps} />
		</If>
	)
}
