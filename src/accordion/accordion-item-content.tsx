import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export type AccordionItemContentProps = JSX.IntrinsicElements['div']

export const AccordionItemContent = (props: AccordionItemContentProps) => {
  const api = useAccordionContext()
  const accordionItem = useAccordionItemContext()
  const presenceApi = usePresenceContext()

  const mergedProps = mergeProps(
    props,
    () => api().getItemContentProps(accordionItem()),
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
