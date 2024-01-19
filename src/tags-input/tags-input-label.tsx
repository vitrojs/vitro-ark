import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputLabelProps = JSX.IntrinsicElements['label']

export const TagsInputLabel = (props: TagsInputLabelProps) => {
	const api = useTagsInputContext()
	const mergedProps = mergeProps(props, () => api().labelProps)

	return <label {...mergedProps} />
}
