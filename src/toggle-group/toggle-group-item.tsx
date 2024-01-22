import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { ItemProps } from '@zag-js/toggle-group'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useToggleGroupContext } from './toggle-group-context'

export type ToggleGroupItemProps = Assign<
	JSX.IntrinsicElements['button'],
	Observify<ItemProps>
>

export const ToggleGroupItem: JSX.Component<ToggleGroupItemProps> = ({
	value,
	disabled,

	...props
}) => {
	const getToggleProps = () => ({
		value: $$(value),
		disabled: $$(disabled),
	})

	const api = useToggleGroupContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemProps(getToggleProps()),
	)

	return <button {...mergedProps} />
}
