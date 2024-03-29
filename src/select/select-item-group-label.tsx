import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useSelectContext } from './select-context'

interface ItemGroupLabelProps {
	for: string
}

export type SelectItemGroupLabelProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupLabelProps>
>

export const SelectItemGroupLabel: JSX.Component<SelectItemGroupLabelProps> = ({
	for: _for,
	...props
}) => {
	const api = useSelectContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemGroupLabelProps({ htmlFor: $$(_for) }),
	)

	return <div {...mergedProps} />
}
