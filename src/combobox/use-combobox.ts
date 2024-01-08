import type { CollectionOptions } from '@zag-js/combobox'
import * as combobox from '@zag-js/combobox'

import { $$, useMemo } from 'vitro'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useEnvironmentContext } from '../environment'
import type { Accessor, CollectionItem, Optional } from '../types'
import { createUniqueId } from '../utils'

export type UseComboboxProps<T extends CollectionItem> = CollectionOptions<T> &
  Omit<Optional<combobox.Context<T>, 'id'>, 'collection'>

export type UseComboboxReturn<T extends CollectionItem> = Accessor<
  combobox.Api<PropTypes, T>
>

export const useCombobox = <T extends CollectionItem>({
  isItemDisabled,
  itemToValue,
  itemToString,
  items,

  ...props
}: Observify<UseComboboxProps<T>>): UseComboboxReturn<T> => {
  const getRootNode = useEnvironmentContext()
  const collection = useMemo(() =>
    combobox.collection({
      isItemDisabled,
      itemToValue,
      itemToString,
      items: $$(items),
    }),
  )
  const [state, send] = useMachine(
    {
      ...props,
      collection,
    },
    // @ts-ignore
    combobox.machine,
    {
      id: createUniqueId(),
      getRootNode,
    },
  )

  return useMemo(() =>
    combobox.connect<PropTypes, T>(
      // @ts-ignore
      state(),
      send,
      normalizeProps,
    ),
  )
}
