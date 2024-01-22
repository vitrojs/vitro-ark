import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputInputProps = JSX.IntrinsicElements['input']

export const TagsInputInput: JSX.Component<TagsInputInputProps> = (props) => {
	const api = useTagsInputContext()
	const mergedProps = mergeProps(props, () => api().inputProps)

	return <input {...mergedProps} />
}
