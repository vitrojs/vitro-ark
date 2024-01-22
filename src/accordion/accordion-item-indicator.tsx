import { mergeProps } from '@vitro/zag'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export type AccordionItemIndicatorProps = JSX.IntrinsicElements['div']

export const AccordionItemIndicator: JSX.Component<
	AccordionItemIndicatorProps
> = (props) => {
	const api = useAccordionContext()
	const itemParams = useAccordionItemContext()

	const mergedProps = mergeProps(props, () =>
		api().getItemIndicatorProps(itemParams()),
	)

	return <div {...mergedProps} />
}
