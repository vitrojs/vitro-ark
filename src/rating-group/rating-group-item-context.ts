import { type ItemProps } from '@zag-js/rating-group'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface RatingGroupItemContext extends ItemProps {}

export const [RatingGroupItemProvider, useRatingGroupItemContext] =
  createContext<Accessor<RatingGroupItemContext>>({
    hookName: 'useRatingGroupItemContext',
    providerName: '<RatingGroupItemProvider />',
  })
