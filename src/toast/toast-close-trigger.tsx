import { mergeProps } from '@vitro/zag'
import { useToastContext } from './toast-context'

export type ToastCloseTriggerProps = JSX.IntrinsicElements['button']

export const ToastCloseTrigger: JSX.Component<ToastCloseTriggerProps> = (
	props,
) => {
	const api = useToastContext()
	const mergedProps = mergeProps(props, () => api().closeTriggerProps)

	return <button {...mergedProps} />
}
