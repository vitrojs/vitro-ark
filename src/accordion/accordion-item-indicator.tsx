import { mergeProps } from '../utils'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export type AccordionItemIndicatorProps = JSX.IntrinsicElements['div']

export const AccordionItemIndicator = (props: AccordionItemIndicatorProps) => {
  const api = useAccordionContext()
  const itemParams = useAccordionItemContext()

  const mergedProps = mergeProps(props, () =>
    api().getItemIndicatorProps(itemParams()),
  )

  return <div {...mergedProps} />
}
