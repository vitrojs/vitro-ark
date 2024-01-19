import * as tabs from '@zag-js/tabs'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'

export type UseTabsProps = Optional<tabs.Context, 'id'>
export interface UseTabsReturn extends Accessor<tabs.Api<PropTypes>> {}

export const useTabs = (props: Observify<UseTabsProps>): UseTabsReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, tabs.machine, {
    id: createSequenceId(),
    getRootNode,
  })

  return useMemo(() => tabs.connect(state(), send, normalizeProps))
}
