import { selectAnatomy } from '@ark-ui/anatomy'

import { $$, FunctionMaybe, useMemo } from 'vitro'
import { useSelectContext } from './select-context'
import { Assign } from '../types'

export type SelectValueTextProps = Assign<
	JSX.IntrinsicElements['span'],
	{
		placeholder?: FunctionMaybe<string>
	}
>

export const SelectValueText = ({
	placeholder,
	...props
}: SelectValueTextProps) => {
	const api = useSelectContext()
	const children = useMemo(() => api().valueAsString || $$(placeholder))
	return (
		<span {...props} {...selectAnatomy.build().valueText.attrs}>
			{children}
		</span>
	)
}
