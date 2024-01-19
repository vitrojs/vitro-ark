import type { ItemProps } from '@zag-js/accordion'

import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface AccordionItemContext extends ItemProps {}

export const [AccordionItemProvider, useAccordionItemContext] = createContext<
	Accessor<AccordionItemContext>
>({
	hookName: 'useAccordionItemContext',
	providerName: '<AccordionItemProvider />',
})
