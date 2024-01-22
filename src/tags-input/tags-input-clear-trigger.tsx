import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputClearTriggerProps = JSX.IntrinsicElements['button']

export const TagsInputClearTrigger : JSX.Component<TagsInputClearTriggerProps> = (props) => {
	const api = useTagsInputContext()
	const mergedProps = mergeProps(props, () => api().clearTriggerProps)

	return <button {...mergedProps} />
}
