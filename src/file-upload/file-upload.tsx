import type { Observify } from '@vitro/zag'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { FileUploadProvider } from './file-upload-context'
import {
  useFileUpload,
  type UseFileUploadProps,
  type UseFileUploadReturn,
} from './use-file-upload'

export type FileUploadProps = Assign<
  JSX.IntrinsicElements['div'],
  Observify<UseFileUploadProps> & {
    children?: ((api: UseFileUploadReturn) => JSX.Element) | JSX.Element
  }
>

export const FileUpload = ({
  // ----
  accept,
  allowDrop,
  dir,
  disabled,
  files,
  getRootNode,
  id,
  ids,
  locale,
  maxFiles,
  maxFileSize,
  minFileSize,
  name,
  onFileAccept,
  onFileReject,
  onFilesChange,
  translations,
  validate,
  // ----
  children,
  ...props
}: FileUploadProps) => {
  const api = useFileUpload({
    accept,
    allowDrop,
    dir,
    disabled,
    files,
    getRootNode,
    id,
    ids,
    locale,
    maxFiles,
    maxFileSize,
    minFileSize,
    name,
    onFileAccept,
    onFileReject,
    onFilesChange,
    translations,
    validate,
  })
  const mergedProps = mergeProps(props, () => api().rootProps)

  return (
    <FileUploadProvider value={api}>
      <div {...mergedProps}>{applyChildren(children, api)}</div>
    </FileUploadProvider>
  )
}
