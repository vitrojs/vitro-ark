import { mergeProps } from '@vitro/zag'
import { useAvatarContext } from './avatar-context'

export type AvatarFallbackProps = JSX.IntrinsicElements['span']

export const AvatarFallback = (props: AvatarFallbackProps) => {
  const avatar = useAvatarContext()
  const mergedProps = mergeProps(props, () => avatar().fallbackProps)

  return <span {...mergedProps} />
}
