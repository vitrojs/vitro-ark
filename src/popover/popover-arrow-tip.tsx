import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverArrowTipProps = JSX.IntrinsicElements['div']

export const PopoverArrowTip:JSX.Component<PopoverArrowTipProps> = (props) => {
	const popover = usePopoverContext()
	const mergedProps = mergeProps(props, () => popover().arrowTipProps)

	return <div {...mergedProps} />
}
