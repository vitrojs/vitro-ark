import type { ItemProps } from '@zag-js/select'

import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface SelectItemContext extends ItemProps {}

export const [SelectItemProvider, useSelectItemContext] = createContext<
  Accessor<SelectItemContext>
>({
  hookName: 'useSelectItemContext',
  providerName: '<SelectItemProvider />',
})
