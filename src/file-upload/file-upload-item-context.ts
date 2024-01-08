import { type ItemProps } from '@zag-js/file-upload'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface FileUploadItemContext extends ItemProps {}

export const [FileUploadItemProvider, useFileUploadItemContext] = createContext<
  Accessor<FileUploadItemContext>
>({
  hookName: 'useFileUploadItemContext',
  providerName: '<FileUploadItemProvider />',
})
