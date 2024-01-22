import type { ItemProps } from '@zag-js/menu'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useMenuContext } from './menu-context'

export type MenuItemProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemProps>
>

export const MenuItem: JSX.Component<MenuItemProps> = ({
	id,
	disabled,
	valueText,
	closeOnSelect,
	// ----
	...props
}) => {
	const menu = useMenuContext()

	const mergedProps = mergeProps(
		props,

		() =>
			menu?.().getItemProps({
				id: $$(id),
				disabled: $$(disabled),
				valueText: $$(valueText),
				closeOnSelect: $$(closeOnSelect),
			}),
	)

	return <div {...mergedProps} />
}
