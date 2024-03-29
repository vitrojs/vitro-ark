import type { Observify } from '@vitro/zag'

import { mergeProps } from '@vitro/zag'
import { PresencePropsProvider, type UsePresenceProps } from '../presence'
import type { Assign } from '../types'
import { AccordionProvider } from './accordion-context'
import { useAccordion, type UseAccordionProps } from './use-accordion'

export type AccordionProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseAccordionProps & UsePresenceProps>
>

export const Accordion: JSX.Component<AccordionProps> = ({
	// -----
	lazyMount,
	onExitComplete,
	present,
	unmountOnExit,
	// -----
	collapsible,
	dir,
	disabled,
	getRootNode,
	id,
	ids,
	multiple,
	onFocusChange,
	onValueChange,
	orientation,
	value,
	// -----
	...props
}) => {
	const presenceProps = { lazyMount, onExitComplete, present, unmountOnExit }

	const accordionProps = {
		collapsible,
		dir,
		disabled,
		getRootNode,
		id,
		ids,
		multiple,
		onFocusChange,
		onValueChange,
		orientation,
		value,
	}
	const api = useAccordion(accordionProps)
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<AccordionProvider value={api}>
			<PresencePropsProvider value={presenceProps}>
				<div {...mergedProps} />
			</PresencePropsProvider>
		</AccordionProvider>
	)
}
