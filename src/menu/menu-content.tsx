import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { useMenuContext } from './menu-context'

export type MenuContentProps = JSX.IntrinsicElements['div']

export const MenuContent = (props: MenuContentProps) => {
  const api = useMenuContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(
    props,
    () => api().contentProps,
    () => presenceApi().presenceProps,
  )

  return (
    <If when={() => !presenceApi().isUnmounted}>
      <div {...mergedProps} />
    </If>
  )
}
