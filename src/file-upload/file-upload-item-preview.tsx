import type { Observify } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'
import { mergeProps } from '../utils'
import { If } from 'vitro'
import { Assign } from '../types'

export type FileUploadItemPreviewProps = Assign<
  JSX.IntrinsicElements['div'],
  {
    /**
     * The file type to match against. Matches all file types by default.
     * @default '.*'
     */
    type?: string
  }
>

export const FileUploadItemPreview = ({
  type,
  ...props
}: FileUploadItemPreviewProps) => {
  const api = useFileUploadContext()
  const item = useFileUploadItemContext()
  const mergedProps = mergeProps(props, () => api().getItemPreviewProps(item()))

  return (
    <If when={() => item().file.type.match(type ?? '.*')}>
      <div {...mergedProps} />
    </If>
  )
}
