import * as tooltip from '@zag-js/tooltip'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createUniqueId } from '../utils'
export interface UseTooltipProps extends Optional<tooltip.Context, 'id'> {}
export interface UseTooltipReturn extends Accessor<tooltip.Api<PropTypes>> {}

export const useTooltip = (
  props: Observify<UseTooltipProps>,
): UseTooltipReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, tooltip.machine, {
    id: createUniqueId(),
    getRootNode,
  })
  return useMemo(() => tooltip.connect(state(), send, normalizeProps))
}
