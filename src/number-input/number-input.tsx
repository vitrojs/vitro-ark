import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { NumberInputProvider } from './number-input-context'
import {
	useNumberInput,
	type UseNumberInputProps,
	type UseNumberInputReturn,
} from './use-number-input'

export type NumberInputProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseNumberInputProps> & {
		children?: JSX.Element | ((api: UseNumberInputReturn) => JSX.Element)
	}
>

export const NumberInput: JSX.Component<NumberInputProps> = ({
	allowMouseWheel,
	allowOverflow,
	clampValueOnBlur,
	dir,
	disabled,
	focusInputOnChange,
	form,
	formatOptions,
	getRootNode,
	id,
	ids,
	inputMode,
	invalid,
	locale,
	max,
	min,
	name,
	onFocusChange,
	onValueChange,
	onValueInvalid,
	pattern,
	readOnly,
	spinOnPress,
	step,
	translations,
	value,

	// ----
	children,
	...props
}) => {
	const api = useNumberInput({
		allowMouseWheel,
		allowOverflow,
		clampValueOnBlur,
		dir,
		disabled,
		focusInputOnChange,
		form,
		formatOptions,
		getRootNode,
		id,
		ids,
		inputMode,
		invalid,
		locale,
		max,
		min,
		name,
		onFocusChange,
		onValueChange,
		onValueInvalid,
		pattern,
		readOnly,
		spinOnPress,
		step,
		translations,
		value,
	})
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<NumberInputProvider value={api}>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
		</NumberInputProvider>
	)
}
