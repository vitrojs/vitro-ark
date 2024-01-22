import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemDeleteTriggerProps = JSX.IntrinsicElements['button']

export const FileUploadItemDeleteTrigger: JSX.Component<
	FileUploadItemDeleteTriggerProps
> = (props) => {
	const api = useFileUploadContext()
	const item = useFileUploadItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemDeleteTriggerProps(item()),
	)

	return <button {...mergedProps} />
}
