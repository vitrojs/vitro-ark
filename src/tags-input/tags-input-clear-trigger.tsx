import { mergeProps } from '../utils'
import { useTagsInputContext } from './tags-input-context'

export type TagsInputClearTriggerProps = JSX.IntrinsicElements['button']

export const TagsInputClearTrigger = (props: TagsInputClearTriggerProps) => {
  const api = useTagsInputContext()
  const mergedProps = mergeProps(props, () => api().clearTriggerProps)

  return <button {...mergedProps} />
}
