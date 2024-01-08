import type { ItemProps } from '@zag-js/tags-input'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface TagsInputItemContext extends ItemProps {}

export const [TagsInputItemProvider, useTagsInputItemContext] = createContext<
  Accessor<TagsInputItemContext>
>({
  hookName: 'useTagsInputItemContext',
  providerName: '<TagsInputItemProvider />',
})
