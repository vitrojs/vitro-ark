import { usePresenceContext } from '../presence'
import { mergeProps } from '../utils'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export type AccordionItemTriggerProps = JSX.IntrinsicElements['button']

export const AccordionItemTrigger = (props: AccordionItemTriggerProps = {}) => {
  const api = useAccordionContext()
  const itemProps = useAccordionItemContext()
  const presenceApi = usePresenceContext()

  const mergedProps = mergeProps(
    props,
    () => api().getItemTriggerProps(itemProps()),
    { 'aria-controls': () => presenceApi().isUnmounted && null },
  )

  // @ts-expect-error we want aria-controls to be null to remove them if the popover if lazy mounted
  return <button {...mergedProps} />
}
