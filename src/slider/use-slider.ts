import * as slider from '@zag-js/slider'

import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine, type PropTypes } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createSequenceId } from '../utils'
export interface UseSliderProps extends Optional<slider.Context, 'id'> {}
export interface UseSliderReturn extends Accessor<slider.Api<PropTypes>> {}

export const useSlider = (
	props: Observify<UseSliderProps>,
): UseSliderReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, slider.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => slider.connect(state(), send, normalizeProps))
}
