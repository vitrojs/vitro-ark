import { mergeProps } from '@vitro/zag'
import { Component } from 'vitro'
import { useAvatarContext } from './avatar-context'

export type AvatarFallbackProps = JSX.IntrinsicElements['span']

export const AvatarFallback: Component<AvatarFallbackProps> = (props) => {
	const avatar = useAvatarContext()
	const mergedProps = mergeProps(props, () => avatar().fallbackProps)

	return <span {...mergedProps} />
}
