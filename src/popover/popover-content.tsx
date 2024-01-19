import { If } from 'vitro'
import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'
export type PopoverContentProps = JSX.IntrinsicElements['div']

export const PopoverContent = (props: PopoverContentProps) => {
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
