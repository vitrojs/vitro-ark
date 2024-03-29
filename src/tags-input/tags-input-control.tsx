import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputControlProps = JSX.IntrinsicElements['div']

export const TagsInputControl: JSX.Component<TagsInputControlProps> = (
	props,
) => {
	const api = useTagsInputContext()
	const mergedProps = mergeProps(props, () => api().controlProps)

	return <div {...mergedProps} />
}
