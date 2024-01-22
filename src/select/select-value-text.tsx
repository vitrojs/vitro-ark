import { selectAnatomy } from '@ark-ui/anatomy'

import { $$, FunctionMaybe, useMemo } from 'vitro'
import { Assign } from '../types'
import { useSelectContext } from './select-context'

export type SelectValueTextProps = Assign<
	JSX.IntrinsicElements['span'],
	{
		placeholder?: FunctionMaybe<string>
	}
>

export const SelectValueText: JSX.Component<SelectValueTextProps> = ({
	placeholder,
	...props
}) => {
	const api = useSelectContext()
	const children = useMemo(() => api().valueAsString || $$(placeholder))
	return (
		<span {...props} {...selectAnatomy.build().valueText.attrs}>
			{children}
		</span>
	)
}
