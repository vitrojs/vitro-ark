import type { Observify } from '@vitro/zag'
import { If } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { usePresence, type UsePresenceProps } from './use-presence'

export interface PresenceProps
  extends Assign<JSX.IntrinsicElements['div'], Observify<UsePresenceProps>> {}

export const Presence = ({
  lazyMount,
  onExitComplete,
  present,
  unmountOnExit,
  ...props
}: PresenceProps) => {
  const api = usePresence({
    lazyMount,
    onExitComplete,
    present,
    unmountOnExit,
  })

  const mergeedProps = mergeProps(props, () => api().presenceProps)

  return (
    <If when={() => !api().isUnmounted}>
      <div {...mergeedProps} data-scope='presence' data-part='root' />
    </If>
  )
}
