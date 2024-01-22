import type { Observify } from '@vitro/zag'
import {
	PresenceProvider,
	usePresence,
	type UsePresenceProps,
} from '../presence'

import { mergeProps } from '@vitro/zag'
import { useMemo } from 'vitro'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { DatePickerProvider } from './date-picker-context'
import {
	useDatePicker,
	type UseDatePickerProps,
	type UseDatePickerReturn,
} from './use-date-picker'

export type DatePickerProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseDatePickerProps & UsePresenceProps> & {
		children?: JSX.Element | ((api: UseDatePickerReturn) => JSX.Element)
	}
>

export const DatePicker: JSX.Component<DatePickerProps> = ({
	lazyMount,
	onExitComplete,
	present,
	unmountOnExit,
	// ----
	closeOnSelect,
	dir,
	disabled,
	fixedWeeks,
	focusedValue,
	format,
	getRootNode,
	id,
	ids,
	isDateUnavailable,
	locale,
	max,
	min,
	modal,
	name,
	numOfMonths,
	onFocusChange,
	onOpenChange,
	onValueChange,
	onViewChange,
	open,
	parse,
	positioning,
	readOnly,
	selectionMode,
	startOfWeek,
	timeZone,
	translations,
	value,
	view,
	// ----
	children,
	...props
}) => {
	const api = useDatePicker({
		closeOnSelect,
		dir,
		disabled,
		fixedWeeks,
		focusedValue,
		format,
		getRootNode,
		id,
		ids,
		isDateUnavailable,
		locale,
		max,
		min,
		modal,
		name,
		numOfMonths,
		onFocusChange,
		onOpenChange,
		onValueChange,
		onViewChange,
		open,
		parse,
		positioning,
		readOnly,
		selectionMode,
		startOfWeek,
		timeZone,
		translations,
		value,
		view,
	})
	const apiPresence = usePresence({
		lazyMount,
		onExitComplete,
		unmountOnExit,
		present: useMemo(() => api().isOpen),
	})
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<DatePickerProvider value={api}>
			<PresenceProvider value={apiPresence}>
				<div {...mergedProps}>{applyChildren(children, api)}</div>
			</PresenceProvider>
		</DatePickerProvider>
	)
}
