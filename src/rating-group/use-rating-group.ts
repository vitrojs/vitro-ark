import * as rating from '@zag-js/rating-group'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseRatingGroupProps extends Optional<rating.Context, 'id'> {}
export interface UseRatingGroupReturn
  extends ObservableReadonly<rating.Api<PropTypes>> {}

export const useRatingGroup = (
  props: Observify<UseRatingGroupProps>,
): UseRatingGroupReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, rating.machine, {
    id: createSequenceId(),
    getRootNode,
  })

  return useMemo(() => rating.connect(state(), send, normalizeProps))
}
