import * as splitter from '@zag-js/splitter'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseSplitterProps extends Optional<splitter.Context, 'id'> {}
export interface UseSplitterReturn extends Accessor<splitter.Api<PropTypes>> {}

export const useSplitter = (
	props: Observify<UseSplitterProps>,
): UseSplitterReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, splitter.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => splitter.connect(state(), send, normalizeProps))
}
