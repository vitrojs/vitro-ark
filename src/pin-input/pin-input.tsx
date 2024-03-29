import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { Assign } from '../types'
import { PinInputProvider } from './pin-input-context'
import { usePinInput, type UsePinInputProps } from './use-pin-input'

export type PinInputProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UsePinInputProps>
>

export const PinInput: JSX.Component<PinInputProps> = ({
	autoFocus,
	blurOnComplete,
	dir,
	disabled,
	form,
	getRootNode,
	id,
	ids,
	invalid,
	mask,
	name,
	onValueChange,
	onValueComplete,
	onValueInvalid,
	otp,
	pattern,
	placeholder,
	selectOnFocus,
	translations,
	type,
	value,
	// ----
	...props
}) => {
	const api = usePinInput({
		autoFocus,
		blurOnComplete,
		dir,
		disabled,
		form,
		getRootNode,
		id,
		ids,
		invalid,
		mask,
		name,
		onValueChange,
		onValueComplete,
		onValueInvalid,
		otp,
		pattern,
		placeholder,
		selectOnFocus,
		translations,
		type,
		value,
	})
	const mergedProps = mergeProps(props, () => api().rootProps)
	const hiddenInputProps = mergeProps({}, () => api().hiddenInputProps)
	return (
		<PinInputProvider value={api}>
			<div {...mergedProps} />
			<input {...hiddenInputProps} />
		</PinInputProvider>
	)
}
