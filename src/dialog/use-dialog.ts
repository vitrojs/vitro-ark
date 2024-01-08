import * as dialog from '@zag-js/dialog'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseDialogProps extends Optional<dialog.Context, 'id'> {}
export interface UseDialogReturn
  extends ObservableReadonly<dialog.Api<PropTypes>> {}

export const useDialog = (
  props: Observify<UseDialogProps>,
): UseDialogReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, dialog.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => dialog.connect(state(), send, normalizeProps))
}
