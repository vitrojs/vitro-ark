import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '../utils'
import { AvatarProvider } from './avatar-context'
import { useAvatar, type UseAvatarProps } from './use-avatar'

export type AvatarProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseAvatarProps>
>

export const Avatar = ({
  dir,
  getRootNode,
  id,
  onLoadingStatusChange,
  // ----
  ...props
}: AvatarProps) => {
  const api = useAvatar({ dir, getRootNode, id, onLoadingStatusChange })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <AvatarProvider value={api}>
      <div {...mergedProps} />
    </AvatarProvider>
  )
}
