import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useComboboxContext } from './combobox-context'

interface ItemGroupLabelProps {
	for: string
}

export type ComboboxItemGroupLabelProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<ItemGroupLabelProps>
>

export const ComboboxItemGroupLabel: JSX.Component<
	ComboboxItemGroupLabelProps
> = ({ for: _for, ...props }) => {
	const labelProps = () => ({ for: $$(_for) })

	const api = useComboboxContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemGroupLabelProps({ htmlFor: labelProps().for }),
	)

	return <div {...mergedProps} />
}
