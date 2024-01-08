import { Observify, PropTypes, normalizeProps, useMachine } from '@vitro/zag'
import * as avatar from '@zag-js/avatar'
import { useMemo } from 'vitro'
import { useEnvironmentContext } from '../environment'
import { Accessor, Optional } from '../types'
import { createUniqueId } from '../utils'

export type UseAvatarProps = Optional<avatar.Context, 'id'>
export type UseAvatarReturn = Accessor<avatar.Api<PropTypes>>

export const useAvatar = (
  props: Observify<UseAvatarProps>,
): UseAvatarReturn => {
  const getRootNode = useEnvironmentContext()

  const [state, send] = useMachine(props, avatar.machine, {
    id: createUniqueId(),
    getRootNode,
  })

  return useMemo(() => avatar.connect(state(), send, normalizeProps))
}
