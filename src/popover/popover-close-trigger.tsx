import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverCloseTriggerProps = JSX.IntrinsicElements['button']

export const PopoverCloseTrigger:JSX.Component<PopoverCloseTriggerProps> = (props) => {
	const api = usePopoverContext()
	const mergedProps = mergeProps(props, () => api().closeTriggerProps)

	return <button {...mergedProps} />
}
