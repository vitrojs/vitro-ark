import { mergeProps } from '../utils'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemDeleteTriggerProps = JSX.IntrinsicElements['button']

export const FileUploadItemDeleteTrigger = (
  props: FileUploadItemDeleteTriggerProps,
) => {
  const api = useFileUploadContext()
  const item = useFileUploadItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemDeleteTriggerProps(item()),
  )

  return <button {...mergedProps} />
}
