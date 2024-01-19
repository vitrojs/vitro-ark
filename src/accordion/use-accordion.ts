import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import * as accordion from '@zag-js/accordion'
import { ObservableReadonly, useMemo } from 'vitro'

import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseAccordionProps extends Optional<accordion.Context, 'id'> {}
export interface UseAccordionReturn
  extends ObservableReadonly<accordion.Api<PropTypes>> {}

export const useAccordion = (
  props: Observify<UseAccordionProps>,
): UseAccordionReturn => {
  const getRootNode = useEnvironmentContext()
  const [state, send] = useMachine(props, accordion.machine, {
    id: createSequenceId(),
    getRootNode,
  })

  return useMemo(() => accordion.connect(state(), send, normalizeProps))
}
