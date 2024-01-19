import { ObservableReadonly } from 'oby'
import { useMemo } from 'vitro'
import type { Assign } from '../types'
import { mergeProps } from '@vitro/zag'
import { applyChildren } from '../utils'
import { useFileUploadContext } from './file-upload-context'
export type FileUploadItemGroupProps = Assign<
	JSX.IntrinsicElements['ul'],
	{
		children?:
			| JSX.Element
			| ((state: ObservableReadonly<File[]>) => JSX.Element)
	}
>

export const FileUploadItemGroup = ({
	children,
	...props
}: FileUploadItemGroupProps) => {
	const api = useFileUploadContext()
	const mergedProps = mergeProps(props, () => api().itemGroupProps)
	const files = useMemo(() => api().files)

	return <ul {...mergedProps}>{applyChildren(children, files)}</ul>
}
