import type { ItemProps } from '@zag-js/radio-group'

import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface RadioGroupItemContext extends ItemProps {}

export const [RadioGroupItemProvider, useRadioGroupItemContext] = createContext<
  Accessor<RadioGroupItemContext>
>({
  hookName: 'useRadioGroupItemContext',
  providerName: '<RadioGroupItemProvider />',
})
