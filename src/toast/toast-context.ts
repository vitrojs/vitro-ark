import * as toast from '@zag-js/toast'

import { PropTypes } from '@vitro/zag'
import { createContext } from '../create-context'
import { Accessor } from '../types'

export interface Options {
  render: (api: Accessor<toast.Api<PropTypes, Options>>) => JSX.Element
  title: JSX.Element
  description: JSX.Element
}

export interface ToastContext extends Accessor<toast.Api<PropTypes, Options>> {}

export const [ToastProvider, useToastContext] = createContext<ToastContext>({
  hookName: 'useToastContext',
  providerName: '<ToastProvider />',
})
