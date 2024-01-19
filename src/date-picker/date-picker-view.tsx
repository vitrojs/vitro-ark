import { datePickerAnatomy } from '@ark-ui/anatomy'
import type { ViewProps } from '@zag-js/date-picker'

import { $$, useMemo } from 'vitro'
import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { applyChildren } from '../utils'
import { useDatePickerContext } from './date-picker-context'
import { DatePickerViewProvider } from './date-picker-view-context'
import type { UseDatePickerReturn } from './use-date-picker'

export type DatePickerViewProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<Required<ViewProps>> & {
		children?: JSX.Element | ((api: UseDatePickerReturn) => JSX.Element)
	}
>

export const DatePickerView = ({
	view,
	// ----
	children,
	...props
}: DatePickerViewProps) => {
	const viewProps = () => ({
		view: $$(view),
	})
	const api = useDatePickerContext()

	const hidden = useMemo(() => api().view !== $$(view))

	return (
		<DatePickerViewProvider value={viewProps}>
			<div {...props} hidden={hidden} {...datePickerAnatomy.build().view.attrs}>
				{applyChildren(children, api)}
			</div>
		</DatePickerViewProvider>
	)
}
