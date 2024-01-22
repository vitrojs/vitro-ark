import { mergeProps } from '@vitro/zag'
import { If } from 'vitro'
import { Assign } from '../types'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

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

export const FileUploadItemPreview: JSX.Component<FileUploadItemPreviewProps> =
	({ type, ...props }) => {
		const api = useFileUploadContext()
		const item = useFileUploadItemContext()
		const mergedProps = mergeProps(props, () =>
			api().getItemPreviewProps(item()),
		)

		return (
			<If when={() => item().file.type.match(type ?? '.*')}>
				<div {...mergedProps} />
			</If>
		)
	}
