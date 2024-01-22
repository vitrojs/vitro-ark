import { mergeProps } from '@vitro/zag'
import { useTooltipContext } from './tooltip-context'

export type TooltipTriggerProps = JSX.IntrinsicElements['button']

export const TooltipTrigger: JSX.Component<TooltipTriggerProps> = (props: TooltipTriggerProps) => {
	const api = useTooltipContext()
	const mergedProps = mergeProps(props, () => api().triggerProps)

	return <button {...mergedProps} />
}
