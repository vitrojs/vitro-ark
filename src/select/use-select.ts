import type { CollectionOptions } from '@zag-js/select'
import * as select from '@zag-js/select'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { $$, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional, type CollectionItem } from '../types'
import { createUniqueId } from '../utils'

export type UseSelectProps<T extends CollectionItem> = CollectionOptions<T> &
  Omit<Optional<select.Context<T>, 'id'>, 'collection'>

export interface UseSelectReturn<T extends CollectionItem>
  extends Accessor<select.Api<PropTypes, T>> {}

export const useSelect = <T extends CollectionItem>({
  isItemDisabled,
  itemToValue,
  itemToString,
  items,
  ...props
}: Observify<UseSelectProps<T>>): UseSelectReturn<T> => {
  const collection = select.collection({
    isItemDisabled,
    itemToValue,
    itemToString,
    items: $$(items),
  })

  const getRootNode = useEnvironmentContext()
  const [state, send] = useMachine(
    // @ts-ignore
    collection,
    select.machine,
    {
      id: createUniqueId(),
      getRootNode,
      ...props,
    },
  )

  return useMemo(() =>
    select.connect<PropTypes, T>(
      // @ts-ignore
      state(),
      send,
      normalizeProps,
    ),
  )
}
