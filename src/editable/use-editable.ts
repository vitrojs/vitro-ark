import type { Observify } from '@vitro/zag'
import * as editable from '@zag-js/editable'
import { useEnvironmentContext } from '../environment'
import { createUniqueId } from '../utils'

import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { Accessor, Optional } from '../types'
export interface UseEditableProps extends Optional<editable.Context, 'id'> {}
export interface UseEditableReturn extends Accessor<editable.Api<PropTypes>> {}

export const useEditable = (props: Observify<UseEditableProps>) => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, editable.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => editable.connect(state(), send, normalizeProps))
}
