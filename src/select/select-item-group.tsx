import type { ItemGroupProps } from '@zag-js/select'
import { $$ } from 'vitro'
import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { useSelectContext } from './select-context'

export type SelectItemGroupProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupProps>
>

export const SelectItemGroup = ({ id, ...props }: SelectItemGroupProps) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemGroupProps({ id: $$(id) }),
	)

	return <div {...mergedProps} />
}
