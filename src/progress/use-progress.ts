import * as progress from '@zag-js/progress'

import { PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, type Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseProgressProps extends Optional<progress.Context, 'id'> {}
export interface UseProgressReturn extends Accessor<progress.Api<PropTypes>> {}

export const useProgress = (props: UseProgressProps): UseProgressReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, progress.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => progress.connect(state(), send, normalizeProps))
}
