import { CheckboxProvider } from './checkbox-context'
import {
	useCheckbox,
	type UseCheckboxProps,
	type UseCheckboxReturn,
} from './use-checkbox'

import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'

export type CheckboxProps = UseCheckboxProps & {
	style?: JSX.Style
	class?: JSX.Class
	children?: JSX.Element | ((api: UseCheckboxReturn) => JSX.Element)
}

export const Checkbox = ({
	children,
	checked,
	dir,
	disabled,
	form,
	getRootNode,
	id,
	ids,
	invalid,
	name,
	onCheckedChange,
	required,
	value,

	...props
}: CheckboxProps) => {
	const api = useCheckbox({
		checked,
		dir,
		disabled,
		form,
		getRootNode,
		id,
		ids,
		invalid,
		name,
		onCheckedChange,
		required,
		value,
	})

	const labelProps = mergeProps(props, () => api().labelProps)

	return (
		<CheckboxProvider value={api}>
			<label {...labelProps}>{applyChildren(children, api)}</label>
		</CheckboxProvider>
	)
}
