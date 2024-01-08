import { mergeProps } from '../utils'
import { useTagsInputContext } from './tags-input-context'
import { useTagsInputItemContext } from './tags-input-item-context'

export type TagsInputItemDeleteTriggerProps = JSX.IntrinsicElements['button']

export const TagsInputItemDeleteTrigger = (
  props: TagsInputItemDeleteTriggerProps,
) => {
  const api = useTagsInputContext()
  const itemProps = useTagsInputItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemDeleteTriggerProps(itemProps()),
  )

  return <button {...mergedProps} />
}
