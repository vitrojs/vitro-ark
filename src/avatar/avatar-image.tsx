import { mergeProps } from '../utils'
import { useAvatarContext } from './avatar-context'

export type AvatarImageProps = JSX.IntrinsicElements['img']

export const AvatarImage = (props: AvatarImageProps) => {
  const avatar = useAvatarContext()
  const mergedProps = mergeProps(props, () => avatar().imageProps)

  return <img {...mergedProps} />
}
