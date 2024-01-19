import * as pinInput from '@zag-js/pin-input'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UsePinInputProps extends Optional<pinInput.Context, 'id'> {}
export interface UsePinInputReturn extends Accessor<pinInput.Api<PropTypes>> {}

export const usePinInput = (
	props: Observify<UsePinInputProps>,
): UsePinInputReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, pinInput.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => pinInput.connect(state(), send, normalizeProps))
}
