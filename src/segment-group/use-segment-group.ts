import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import * as segment from '@zag-js/radio-group'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'

export type UseSegmentGroupProps = Optional<segment.Context, 'id'>
export type UseSegmentGroupReturn = Accessor<segment.Api<PropTypes>>

export const useSegmentGroup = (
  props: Observify<UseSegmentGroupProps>,
): UseSegmentGroupReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, segment.machine, {
    id: createSequenceId(),
    getRootNode,
  })

  return useMemo(() => segment.connect(state(), send, normalizeProps))
}
