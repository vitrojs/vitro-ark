import { mergeProps } from '@vitro/zag'
import { useToastContext } from './toast-context'

export type ToastDescriptionProps = JSX.IntrinsicElements['div']

export const ToastDescription = (props: ToastDescriptionProps) => {
  const api = useToastContext()
  const mergedProps = mergeProps(props, () => api().descriptionProps)

  return <div {...mergedProps} />
}
