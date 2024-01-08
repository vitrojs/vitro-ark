import type { ItemProps } from '@zag-js/radio-group'

import { createContext } from '../create-context'
import { Accessor } from '../types'

export type SegmentGroupItemContext = ItemProps

export const [SegmentGroupItemProvider, useSegmentGroupItemContext] =
  createContext<Accessor<SegmentGroupItemContext>>({
    hookName: 'useSegmentGroupItemContext',
    providerName: '<SegmentGroupItemProvider />',
  })
