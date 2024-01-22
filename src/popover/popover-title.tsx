import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverTitleProps = JSX.IntrinsicElements['div']

export const PopoverTitle: JSX.Component<PopoverTitleProps> = (props) => {
	const api = usePopoverContext()
	const mergedProps = mergeProps(props, () => api().titleProps)

	return <div {...mergedProps} />
}
