import * as numberInput from '@zag-js/number-input'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { createUniqueId } from '../utils'

export interface UseNumberInputProps
  extends Optional<numberInput.Context, 'id'> {}
export type UseNumberInputReturn = ObservableReadonly<
  numberInput.Api<PropTypes>
>

export const useNumberInput = (
  props: Observify<UseNumberInputProps>,
): UseNumberInputReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, numberInput.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => numberInput.connect(state(), send, normalizeProps))
}
