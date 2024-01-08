import { mergeProps } from '../utils'
import { useFileUploadContext } from './file-upload-context'

export type FileUploadLabelProps = JSX.IntrinsicElements['label']

export const FileUploadLabel = (props: FileUploadLabelProps) => {
  const api = useFileUploadContext()
  const mergedProps = mergeProps(props, () => api().labelProps)

  return <label {...mergedProps} />
}
