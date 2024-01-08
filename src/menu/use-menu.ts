import * as menu from '@zag-js/menu'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseMenuProps extends Optional<menu.Context, 'id'> {}

export type UseMenuReturn = () => {
  machine: ReturnType<typeof menu.machine>
  api: Accessor<menu.Api<PropTypes>>
}

export const useMenu = (props: Observify<UseMenuProps>): UseMenuReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send, machine] = useMachine(props, menu.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => ({
    api: () => menu.connect(state(), send, normalizeProps),
    machine: machine,
  }))
}
