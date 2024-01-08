import { type CommonProperties } from '@zag-js/types'
import { createContext } from '../create-context'

export type EnvironmentContext = Exclude<
  CommonProperties['getRootNode'],
  undefined
>

export const [EnvironmentProvider, useEnvironmentContext] =
  createContext<EnvironmentContext>({
    hookName: 'useEnvironmentContext',
    providerName: '<EnvironmentProvider />',
  })
