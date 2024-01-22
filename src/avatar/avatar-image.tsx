import { mergeProps } from '@vitro/zag'
import { Component } from 'vitro'
import { useAvatarContext } from './avatar-context'

export type AvatarImageProps = JSX.IntrinsicElements['img']

export const AvatarImage: Component<AvatarImageProps> = (props) => {
	const avatar = useAvatarContext()
	const mergedProps = mergeProps(props, () => avatar().imageProps)

	return <img {...mergedProps} />
}
