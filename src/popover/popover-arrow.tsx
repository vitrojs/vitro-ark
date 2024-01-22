import { usePopoverContext } from './popover-context'

export type PopoverArrowProps = JSX.IntrinsicElements['div']

export const PopoverArrow: JSX.Component<PopoverArrowProps> = (props) => {
	const popover = usePopoverContext()
	const mergedProps = Object.assign(props, () => popover().arrowProps)

	return <div {...mergedProps} />
}
