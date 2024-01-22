import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useMenuContext } from './menu-context'
import { type UseMenuReturn } from './use-menu'

type MenuItemGroupParams = Parameters<
	ReturnType<ReturnType<UseMenuReturn>['api']>['getItemGroupProps']
>[0]

export type MenuItemGroupProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<MenuItemGroupParams>
>

export const MenuItemGroup: JSX.Component<MenuItemGroupProps> = ({
	id,
	...props
}) => {
	const menu = useMenuContext()

	const mergedProps = mergeProps(props, () =>
		menu?.().getItemGroupProps({ id: $$(id) }),
	)

	return <div {...mergedProps} />
}
