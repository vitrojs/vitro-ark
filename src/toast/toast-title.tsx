import { mergeProps } from '@vitro/zag'
import { useToastContext } from './toast-context'

export type ToastTitleProps = JSX.IntrinsicElements['div']

export const ToastTitle = (props: ToastTitleProps) => {
	const api = useToastContext()
	const mergedProps = mergeProps(props, () => api().titleProps)

	return <div {...mergedProps} />
}
