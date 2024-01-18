import type { Observify } from '@vitro/zag'
import {
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'

import { useMemo } from 'vitro'
import type { Assign, CollectionItem } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { SelectProvider } from './select-context'
import {
  useSelect,
  type UseSelectProps,
  type UseSelectReturn,
} from './use-select'

export type SelectProps<T extends CollectionItem> = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseSelectProps<T> & UsePresenceProps> & {
    children?: JSX.Element | ((api: UseSelectReturn<T>) => JSX.Element)
  }
>

export const Select = <T extends CollectionItem>({
  // ----
  // Presence
  lazyMount,
  onExitComplete,
  present,
  unmountOnExit,
  // ----
  closeOnSelect,
  dir,
  disabled,
  form,
  getRootNode,
  highlightedValue,
  id,
  ids,
  invalid,
  isItemDisabled,
  items,
  itemToString,
  itemToValue,
  loop,
  multiple,
  name,
  onFocusOutside,
  onHighlightChange,
  onInteractOutside,
  onOpenChange,
  onPointerDownOutside,
  onValueChange,
  open,
  positioning,
  readOnly,
  selectOnBlur,
  value,
  // ----
  children,
  ...props
}: SelectProps<T>) => {
  const api = useSelect({
    closeOnSelect,
    dir,
    disabled,
    form,
    getRootNode,
    highlightedValue,
    id,
    ids,
    invalid,
    isItemDisabled,
    items,
    itemToString,
    itemToValue,
    loop,
    multiple,
    name,
    onFocusOutside,
    onHighlightChange,
    onInteractOutside,
    onOpenChange,
    onPointerDownOutside,
    onValueChange,
    open,
    positioning,
    readOnly,
    selectOnBlur,
    value,
  })

  const presenceApi = usePresence({
    lazyMount,
    onExitComplete,
    unmountOnExit,
    present: useMemo(() => api().isOpen),
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <SelectProvider value={api}>
      <PresenceProvider value={presenceApi}>
        <div {...mergedProps}>{applyChildren(children, api)}</div>
      </PresenceProvider>
    </SelectProvider>
  )
}
