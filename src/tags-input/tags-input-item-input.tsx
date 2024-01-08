import { mergeProps } from '../utils'
import { useTagsInputContext } from './tags-input-context'
import { useTagsInputItemContext } from './tags-input-item-context'

export type TagsInputItemInputProps = JSX.IntrinsicElements['input']

export const TagsInputItemInput = (props: TagsInputItemInputProps) => {
  const api = useTagsInputContext()
  const itemProps = useTagsInputItemContext()
  const mergedProps = mergeProps(props, () =>
    api().getItemInputProps(itemProps()),
  )

  return <input {...mergedProps} />
}
