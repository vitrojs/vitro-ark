import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'
import { useTagsInputItemContext } from './tags-input-item-context'

export type TagsInputItemInputProps = JSX.IntrinsicElements['input']

export const TagsInputItemInput: JSX.Component<TagsInputItemInputProps> = (props) => {
	const api = useTagsInputContext()
	const itemProps = useTagsInputItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemInputProps(itemProps()),
	)

	return <input {...mergedProps} />
}
