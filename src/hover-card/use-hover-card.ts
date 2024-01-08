import * as hoverCard from '@zag-js/hover-card'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createUniqueId } from '../utils'
export interface UseHoverCardProps extends Optional<hoverCard.Context, 'id'> {}
export interface UseHoverCardReturn
  extends Accessor<hoverCard.Api<PropTypes>> {}

export const useHoverCard = (
  props: Observify<UseHoverCardProps>,
): UseHoverCardReturn => {
  const getRootNode = useEnvironmentContext()
  const [state, send] = useMachine(props, hoverCard.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => hoverCard.connect(state(), send, normalizeProps))
}
