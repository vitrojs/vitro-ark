import type { Observify } from '@vitro/zag'
import { normalizeProps, useMachine } from '@vitro/zag'
import * as presence from '@zag-js/presence'
import { $, $$, useEffect, useMemo } from 'vitro'
import { Optional } from '../types'

export type UsePresenceProps = Optional<presence.Context, 'present'> & {
  /**
   * Whether to enable lazy mounting
   * @default false
   */
  lazyMount?: boolean
  /**
   * Whether to unmount on exit.
   * @default false
   */
  unmountOnExit?: boolean
}

export interface UsePresenceReturn extends ReturnType<typeof usePresence> {}

export const usePresence = ({
  lazyMount,
  unmountOnExit,
  ...props
}: Observify<UsePresenceProps>) => {
  const wasEverPresent = $(false)
  const [state, send] = useMachine(props, presence.machine)
  const api = useMemo(() => presence.connect(state(), send, normalizeProps))
  useEffect(() => {
    const isPresent = api().isPresent
    if (isPresent) wasEverPresent(true)
  })

  return useMemo(() => ({
    isUnmounted:
      (!api().isPresent && !wasEverPresent() && $$(lazyMount)) ||
      ($$(unmountOnExit) && !api().isPresent && wasEverPresent()),
    isPresent: api().isPresent,
    presenceProps: {
      ref: api().setNode,
      hidden: !api().isPresent,
      'data-state': $$(props.present) ? 'open' : 'closed',
    },
  }))
}
