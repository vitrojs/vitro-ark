import { mergeProps } from '../utils'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputControlProps = JSX.IntrinsicElements['div']

export const TagsInputControl = (props: TagsInputControlProps) => {
  const api = useTagsInputContext()
  const mergedProps = mergeProps(props, () => api().controlProps)

  return <div {...mergedProps} />
}
