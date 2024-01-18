import type { Observify } from '@vitro/zag'
import type { ItemProps, ItemState } from '@zag-js/accordion'
import { deepEqual as equals } from 'fast-equals'
import { $$, ObservableReadonly, useMemo } from 'vitro'
import {
  PresenceProvider,
  usePresence,
  usePresencePropsContext,
} from '../presence'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { useAccordionContext } from './accordion-context'
import { AccordionItemProvider } from './accordion-item-context'

export type AccordionItemProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<ItemProps> & {
    children?:
      | JSX.Element
      | ((state: ObservableReadonly<ItemState>) => JSX.Element)
  }
>

export const AccordionItem = ({
  value,
  disabled,
  children,
  ...props
}: AccordionItemProps) => {
  const api = useAccordionContext()
  const presenceProps = usePresencePropsContext()
  const getItemProps = () => ({
    value: $$(value),
    disabled: $$(disabled),
  })

  const presenceApi = usePresence(
    Object.assign(presenceProps, {
      present: useMemo(() => api().getItemState(getItemProps()).isOpen),
    }),
  )

  const mergedProps = mergeProps(props, () =>
    api().getItemProps(getItemProps()),
  )

  const childrenApi = useMemo(() => api().getItemState(getItemProps()), {
    equals,
  })

  return (
    <AccordionItemProvider value={getItemProps}>
      <PresenceProvider value={presenceApi}>
        <div {...mergedProps}>{applyChildren(children, childrenApi)}</div>
      </PresenceProvider>
    </AccordionItemProvider>
  )
}
