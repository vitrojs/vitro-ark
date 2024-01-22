import type { ItemProps } from '@zag-js/file-upload'

import type { Observify } from '@vitro/zag'
import { mergeProps } from '@vitro/zag'
import { $$ } from 'vitro'
import type { Assign } from '../types'
import { useFileUploadContext } from './file-upload-context'
import { FileUploadItemProvider } from './file-upload-item-context'

export type FileUploadItemProps = Assign<
	JSX.IntrinsicElements['li'],
	Observify<ItemProps>
>

export const FileUploadItem: JSX.Component<FileUploadItemProps> = ({
	file,
	// ----
	children,
	...props
}) => {
	const api = useFileUploadContext()

	const itemProps = () => ({
		file: $$(file),
	})
	const mergedProps = mergeProps(props, () => api().getItemProps(itemProps()))
	return (
		<FileUploadItemProvider value={itemProps}>
			<li {...mergedProps}>{children}</li>
		</FileUploadItemProvider>
	)
}
