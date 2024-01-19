import * as tagsInput from '@zag-js/tags-input'

import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, type Optional } from '../types'
import { createSequenceId } from '../utils'

export interface UseTagsInputProps extends Optional<tagsInput.Context, 'id'> {}
export interface UseTagsInputReturn
	extends Accessor<tagsInput.Api<PropTypes>> {}

export const useTagsInput = (
	props: Observify<UseTagsInputProps>,
): UseTagsInputReturn => {
	const getRootNode = useEnvironmentContext()

	const [state, send] = useMachine(props, tagsInput.machine, {
		id: createSequenceId(),
		getRootNode,
	})

	return useMemo(() => tagsInput.connect(state(), send, normalizeProps))
}
