import * as radio from '@zag-js/radio-group'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseRadioGroupProps extends Optional<radio.Context, 'id'> {}
export interface UseRadioGroupReturn extends Accessor<radio.Api<PropTypes>> {}

export const useRadioGroup = (
	props: Observify<UseRadioGroupProps>,
): UseRadioGroupReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, radio.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => radio.connect(state(), send, normalizeProps))
}
