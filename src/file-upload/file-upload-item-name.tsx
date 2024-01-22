import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemNameProps = JSX.IntrinsicElements['div']

export const FileUploadItemName: JSX.Component<FileUploadItemNameProps> = ({
	children,
	...props
}) => {
	const api = useFileUploadContext()
	const item = useFileUploadItemContext()
	const mergedProps = mergeProps(props, () => api().getItemNameProps(item()))

	return <div {...mergedProps}>{() => $$(children) ?? item().file.name}</div>
}
