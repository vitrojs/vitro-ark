import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

interface ItemGroupLabelProps {
	for: string
}
export type MenuItemGroupLabelProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupLabelProps>
>

export const MenuItemGroupLabel = ({
	for: _for,
	...props
}: MenuItemGroupLabelProps) => {
	const menu = useMenuContext()

	const mergedProps = mergeProps(props, () =>
		menu?.().getItemGroupLabelProps({ htmlFor: $$(_for) }),
	)

	return <div {...mergedProps} />
}
