import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { TagsInputProvider } from './tags-input-context'
import {
	useTagsInput,
	type UseTagsInputProps,
	type UseTagsInputReturn,
} from './use-tags-input'

export type TagsInputProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseTagsInputProps> & {
		children?: JSX.Element | ((api: UseTagsInputReturn) => JSX.Element)
	}
>

export const TagsInput: JSX.Component<TagsInputProps> = ({
	addOnPaste,
	allowEditTag,
	allowOverflow,
	autoFocus,
	blurBehavior,
	delimiter,
	dir,
	disabled,
	form,
	getRootNode,
	id,
	ids,
	inputValue,
	invalid,
	max,
	maxLength,
	name,
	onFocusOutside,
	onHighlightChange,
	onInteractOutside,
	onPointerDownOutside,
	onValueChange,
	onValueInvalid,
	readOnly,
	translations,
	validate,
	value,
	// ----
	children,
	...props
}) => {
	const api = useTagsInput({
		addOnPaste,
		allowEditTag,
		allowOverflow,
		autoFocus,
		blurBehavior,
		delimiter,
		dir,
		disabled,
		form,
		getRootNode,
		id,
		ids,
		inputValue,
		invalid,
		max,
		maxLength,
		name,
		onFocusOutside,
		onHighlightChange,
		onInteractOutside,
		onPointerDownOutside,
		onValueChange,
		onValueInvalid,
		readOnly,
		translations,
		validate,
		value,
	})
	const mergedProps = mergeProps(props, () => api().rootProps)
	const hiddenInputProps = mergeProps({}, () => api().hiddenInputProps)
	return (
		<TagsInputProvider value={api}>
			<div {...mergedProps}>{applyChildren(children, api)}</div>
			<input {...hiddenInputProps} />
		</TagsInputProvider>
	)
}
