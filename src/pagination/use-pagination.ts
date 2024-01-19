import * as pagination from '@zag-js/pagination'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UsePaginationProps
  extends Optional<pagination.Context, 'id'> {}
export interface UsePaginationReturn
  extends ObservableReadonly<pagination.Api<PropTypes>> {}

export const usePagination = (
  props: Observify<UsePaginationProps>,
): UsePaginationReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, pagination.machine, {
    id: createSequenceId(),
    getRootNode,
  })
  return useMemo(() => pagination.connect(state(), send, normalizeProps))
}
