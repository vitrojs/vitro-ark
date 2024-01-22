import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverAnchorProps = JSX.IntrinsicElements['div']

export const PopoverAnchor: JSX.Component<PopoverAnchorProps> = (props) => {
	const api = usePopoverContext()
	const mergedProps = mergeProps(props, () => api().anchorProps)

	return <div {...mergedProps} />
}
