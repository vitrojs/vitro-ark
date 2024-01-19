import { usePresenceContext } from '../presence'
import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverTriggerProps = JSX.IntrinsicElements['button']

export const PopoverTrigger = (props: PopoverTriggerProps) => {
	const api = usePopoverContext()
	const presenceApi = usePresenceContext()
	const mergedProps = mergeProps(
		props,
		() => api().triggerProps,
		() => ({ 'aria-controls': presenceApi().isUnmounted && null }),
	)

	// @ts-expect-error we want aria-controls to be null to remove them if the popover if lazy mounted
	return <button {...mergedProps} />
}
