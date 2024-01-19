import * as popover from '@zag-js/popover'

import { useMemo } from 'vitro'

import {
    Observify,
    normalizeProps,
    useMachine,
    type PropTypes,
} from '@vitro/zag'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UsePopoverProps extends Optional<popover.Context, 'id'> {}
export interface UsePopoverReturn extends Accessor<popover.Api<PropTypes>> {}

export const usePopover = (
  props: Observify<UsePopoverProps>,
): UsePopoverReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, popover.machine, {
    id: createSequenceId(),
    getRootNode,
  })
  return useMemo(() => popover.connect(state(), send, normalizeProps))
}
