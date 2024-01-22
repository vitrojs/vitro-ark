import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'

export type FileUploadDropzoneProps = JSX.IntrinsicElements['div']

export const FileUploadDropzone: JSX.Component<FileUploadDropzoneProps> = (
	props,
) => {
	const api = useFileUploadContext()

	const mergedProps = mergeProps(props, () => api().dropzoneProps)
	return (
		<>
			<div {...mergedProps} />
			<input {...api().hiddenInputProps} />
		</>
	)
}
