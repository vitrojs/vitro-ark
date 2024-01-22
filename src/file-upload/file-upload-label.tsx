import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'

export type FileUploadLabelProps = JSX.IntrinsicElements['label']

export const FileUploadLabel: JSX.Component<FileUploadLabelProps> = (props) => {
	const api = useFileUploadContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
