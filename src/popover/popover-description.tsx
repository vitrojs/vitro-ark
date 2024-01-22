import { mergeProps } from '@vitro/zag'
import { usePopoverContext } from './popover-context'

export type PopoverDescriptionProps = JSX.IntrinsicElements['p']

export const PopoverDescription: JSX.Component<PopoverDescriptionProps> = (
	props,
) => {
	const api = usePopoverContext()
	const mergedProps = mergeProps(props, () => api().descriptionProps)

	return <p {...mergedProps} />
}
