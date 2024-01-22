import { mergeProps } from '@vitro/zag'
import { $, useEffect } from 'vitro'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export type FileUploadItemPreviewImageProps = JSX.IntrinsicElements['img']

export const FileUploadItemPreviewImage: JSX.Component<
	FileUploadItemPreviewImageProps
> = (props) => {
	const api = useFileUploadContext()
	const item = useFileUploadItemContext()
	const url = $<string>('')

	useEffect(
		() => {
			api().createFileUrl(item().file, (it) => url(it))
		},
		{ sync: 'init' },
	)

	const mergedProps = mergeProps(props, () =>
		api().getItemPreviewImageProps({ ...item(), url: url() }),
	)

	return <img {...mergedProps} />
}
