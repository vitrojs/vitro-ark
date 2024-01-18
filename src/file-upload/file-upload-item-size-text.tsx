import { $$ } from 'vitro'
import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemSizeTextProps = JSX.IntrinsicElements['div']

export const FileUploadItemSizeText = ({
  children,
  ...props
}: FileUploadItemSizeTextProps) => {
  const api = useFileUploadContext()
  const item = useFileUploadItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemSizeTextProps(item()),
  )

  return (
    <div {...mergedProps}>
      {() => $$(children) || api().getFileSize(item().file)}
    </div>
  )
}
