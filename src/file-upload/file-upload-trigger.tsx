import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'

export type FileUploadTriggerProps = JSX.IntrinsicElements['button']

export const FileUploadTrigger: JSX.Component<FileUploadTriggerProps> = (
	props,
) => {
	const api = useFileUploadContext()
	const mergedProps = mergeProps(props, () => api().triggerProps)

	return <button {...mergedProps} />
}
