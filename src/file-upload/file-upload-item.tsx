import type { ItemProps } from '@zag-js/file-upload'

import type { Assign } from '../types'
import { useFileUploadContext } from './file-upload-context'
import { FileUploadItemProvider } from './file-upload-item-context'
import type { Observify } from '@vitro/zag'
import { $$ } from 'vitro'
import { mergeProps } from '@vitro/zag'

export type FileUploadItemProps = Assign<
	JSX.IntrinsicElements['li'],
	Observify<ItemProps>
>

export const FileUploadItem = ({
	file,
	// ----
	children,
	...props
}: FileUploadItemProps) => {
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
