import type { ItemProps } from '@zag-js/combobox'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface ComboboxItemContext extends ItemProps {}

export const [ComboboxItemProvider, useComboboxItemContext] = createContext<
	Accessor<ComboboxItemContext>
>({
	hookName: 'useComboboxItemContext',
	providerName: '<ComboboxItemProvider />',
})
