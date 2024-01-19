import * as checkbox from '@zag-js/checkbox'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { ObservableReadonly, useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'
import { createSequenceId } from '../utils'

export type UseCheckboxProps = Observify<Optional<checkbox.Context, 'id'>>
export interface UseCheckboxReturn
	extends ObservableReadonly<checkbox.Api<PropTypes>> {}

export const useCheckbox = (
	props: Observify<UseCheckboxProps>,
): UseCheckboxReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, checkbox.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => checkbox.connect(state(), send, normalizeProps))
}
