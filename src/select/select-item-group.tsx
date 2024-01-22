import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { ItemGroupProps } from '@zag-js/select'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSelectContext } from './select-context'

export type SelectItemGroupProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupProps>
>

export const SelectItemGroup: JSX.Component<SelectItemGroupProps> = ({
	id,
	...props
}) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemGroupProps({ id: $$(id) }),
	)

	return <div {...mergedProps} />
}
