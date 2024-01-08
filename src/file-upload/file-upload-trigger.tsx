import { mergeProps } from '../utils'
import { useFileUploadContext } from './file-upload-context'

export type FileUploadTriggerProps = JSX.IntrinsicElements['button']

export const FileUploadTrigger = (props: FileUploadTriggerProps) => {
  const api = useFileUploadContext()
  const mergedProps = mergeProps(props, () => api().triggerProps)

  return <button {...mergedProps} />
}
