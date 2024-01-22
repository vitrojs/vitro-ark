import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { usePopoverContext } from './popover-context'
export type PopoverContentProps = JSX.IntrinsicElements['div']

export const PopoverContent: JSX.Component<PopoverContentProps> = (props) => {
	const api = usePopoverContext()
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
