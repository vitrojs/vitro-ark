import { mergeProps } from '@vitro/zag'
import { useToastContext } from './toast-context'

export type ToastProps = JSX.IntrinsicElements['li']

export const Toast = (props: ToastProps) => {
	const api = useToastContext()
	const mergedProps = mergeProps(props, () => api().rootProps)

	return <li {...mergedProps} />
}
