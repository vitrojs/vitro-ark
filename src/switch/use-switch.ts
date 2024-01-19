import * as zagSwitch from '@zag-js/switch'

import {
	Observify,
	normalizeProps,
	useMachine,
	type PropTypes,
} from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'

export type UseSwitchProps = Optional<zagSwitch.Context, 'id'>
export type UseSwitchReturn = Accessor<zagSwitch.Api<PropTypes>>

export const useSwitch = (
	props: Observify<UseSwitchProps>,
): UseSwitchReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, zagSwitch.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => zagSwitch.connect(state(), send, normalizeProps))
}
