import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'
import { useTagsInputItemContext } from './tags-input-item-context'

export type TagsInputItemDeleteTriggerProps = JSX.IntrinsicElements['button']

export const TagsInputItemDeleteTrigger: JSX.Component<
	TagsInputItemDeleteTriggerProps
> = (props) => {
	const api = useTagsInputContext()
	const itemProps = useTagsInputItemContext()
	const mergedProps = mergeProps(props, () =>
		api().getItemDeleteTriggerProps(itemProps()),
	)

	return <button {...mergedProps} />
}
