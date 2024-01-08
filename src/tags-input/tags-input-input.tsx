import { mergeProps } from '../utils'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputInputProps = JSX.IntrinsicElements['input']

export const TagsInputInput = (props: TagsInputInputProps) => {
  const api = useTagsInputContext()
  const mergedProps = mergeProps(props, () => api().inputProps)

  return <input {...mergedProps} />
}
