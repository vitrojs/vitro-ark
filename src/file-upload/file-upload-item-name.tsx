import { $$ } from 'vitro'
import { mergeProps } from '@vitro/zag'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemNameProps = JSX.IntrinsicElements['div']

export const FileUploadItemName = ({
	children,
	...props
}: FileUploadItemNameProps) => {
	const api = useFileUploadContext()
	const item = useFileUploadItemContext()
	const mergedProps = mergeProps(props, () => api().getItemNameProps(item()))

	return <div {...mergedProps}>{() => $$(children) ?? item().file.name}</div>
}
