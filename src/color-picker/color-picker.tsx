import type { Observify } from '@vitro/zag'
import {
	PresenceProvider,
	usePresence,
	type UsePresenceProps,
} from '../presence'

import { mergeProps } from '@vitro/zag'
import { useMemo } from 'vitro'
import { type Assign } from '../types'
import { applyChildren } from '../utils'
import { ColorPickerProvider } from './color-picker-context'
import {
	useColorPicker,
	type UseColorPickerProps,
	type UseColorPickerReturn,
} from './use-color-picker'

export type ColorPickerProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseColorPickerProps & UsePresenceProps> & {
		children?: JSX.Element | ((api: UseColorPickerReturn) => JSX.Element)
	}
>

export const ColorPicker: JSX.Component<ColorPickerProps> = ({
	// ----
	lazyMount,
	onExitComplete,
	present,
	unmountOnExit,

	// ----
	closeOnSelect,
	dir,
	disabled,
	format,
	getRootNode,
	id,
	ids,
	initialFocusEl,
	name,
	onFocusOutside,
	onFormatChange,
	onInteractOutside,
	onOpenChange,
	onPointerDownOutside,
	onValueChange,
	onValueChangeEnd,
	open,
	positioning,
	readOnly,
	value,

	// ----
	children,
	...props
}) => {
	const api = useColorPicker({
		closeOnSelect,
		dir,
		disabled,
		format,
		getRootNode,
		id,
		ids,
		initialFocusEl,
		name,
		onFocusOutside,
		onFormatChange,
		onInteractOutside,
		onOpenChange,
		onPointerDownOutside,
		onValueChange,
		onValueChangeEnd,
		open,
		positioning,
		readOnly,
		value,
	})
	const apiPresence = usePresence({
		lazyMount,
		onExitComplete,
		unmountOnExit,
		present: useMemo(() => api().isOpen),
	})

	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<ColorPickerProvider value={api}>
			<PresenceProvider value={apiPresence}>
				<div {...mergedProps}>{applyChildren(children, api)}</div>
			</PresenceProvider>
			<input {...api().hiddenInputProps} />
		</ColorPickerProvider>
	)
}
