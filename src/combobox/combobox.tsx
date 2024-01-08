import {
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'

import type { Observify } from '@vitro/zag'
import { useMemo } from 'vitro'
import type { Assign, CollectionItem } from '../types'
import { applyChildren, mergeProps } from '../utils'
import { ComboboxProvider } from './combobox-context'
import {
  useCombobox,
  type UseComboboxProps,
  type UseComboboxReturn,
} from './use-combobox'

export type ComboboxProps<T extends CollectionItem> = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseComboboxProps<T> & UsePresenceProps> & {
    children?: JSX.Element | ((api: UseComboboxReturn<T>) => JSX.Element)
  }
>

export const Combobox = <T extends CollectionItem>({
  lazyMount,
  onExitComplete,
  present,
  unmountOnExit,
  // ----------
  allowCustomValue,
  autoFocus,
  closeOnSelect,
  dir,
  disabled,
  form,
  getRootNode,
  highlightedValue,
  id,
  ids,
  inputBehavior,
  inputValue,
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
  onInputValueChange,
  onInteractOutside,
  onOpenChange,
  onPointerDownOutside,
  onValueChange,
  openOnClick,
  placeholder,
  positioning,
  readOnly,
  selectionBehavior,
  selectOnBlur,
  translations,
  value,

  // ----------
  children,
  ...props
}: ComboboxProps<T>) => {
  const api = useCombobox({
    allowCustomValue,
    autoFocus,
    closeOnSelect,
    dir,
    disabled,
    form,
    getRootNode,
    highlightedValue,
    id,
    ids,
    inputBehavior,
    inputValue,
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
    onInputValueChange,
    onInteractOutside,
    onOpenChange,
    onPointerDownOutside,
    onValueChange,
    openOnClick,
    placeholder,
    positioning,
    readOnly,
    selectionBehavior,
    selectOnBlur,
    translations,
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
    <ComboboxProvider value={api}>
      <PresenceProvider value={apiPresence}>
        <div {...mergedProps}>{applyChildren(children, api)}</div>
      </PresenceProvider>
    </ComboboxProvider>
  )
}
