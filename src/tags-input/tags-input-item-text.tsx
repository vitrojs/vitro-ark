import { mergeProps } from '@vitro/zag'
import { useTagsInputContext } from './tags-input-context'
import { useTagsInputItemContext } from './tags-input-item-context'

export type TagsInputItemTextProps = JSX.IntrinsicElements['span']

export const TagsInputItemText = (props: TagsInputItemTextProps) => {
  const api = useTagsInputContext()
  const itemProps = useTagsInputItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemTextProps(itemProps()),
  )

  return <span {...mergedProps} />
}
