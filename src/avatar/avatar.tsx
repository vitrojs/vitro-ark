import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { Component } from 'vitro'
import type { Assign } from '../types'
import { AvatarProvider } from './avatar-context'
import { useAvatar, type UseAvatarProps } from './use-avatar'

export type AvatarProps = Assign<
	JSX.IntrinsicElements['div'],
	Observify<UseAvatarProps>
>

export const Avatar: Component<AvatarProps> = ({
	dir,
	getRootNode,
	id,
	onLoadingStatusChange,
	// ----
	...props
}) => {
	const api = useAvatar({ dir, getRootNode, id, onLoadingStatusChange })
	const mergedProps = mergeProps(props, () => api().rootProps)

	return (
		<AvatarProvider value={api}>
			<div {...mergedProps} />
		</AvatarProvider>
	)
}
