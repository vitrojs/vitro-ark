import * as toggleGroup from '@zag-js/toggle-group'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseToggleGroupProps
  extends Optional<toggleGroup.Context, 'id'> {}
export interface UseToggleGroupReturn
  extends Accessor<toggleGroup.Api<PropTypes>> {}

export const useToggleGroup = (
  props: Observify<UseToggleGroupProps>,
): UseToggleGroupReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, toggleGroup.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => toggleGroup.connect(state(), send, normalizeProps))
}
