import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

export type MenuPositionerProps = JSX.IntrinsicElements['div']

export const MenuPositioner = (props: MenuPositionerProps) => {
  const api = useMenuContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(props, () => api().positionerProps)

  return (
    <If when={!presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
