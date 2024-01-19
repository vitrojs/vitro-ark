import * as toast from '@zag-js/toast'
import { useEnvironmentContext } from '../environment'

import {
  Observify,
  PropTypes,
  mergeProps,
  normalizeProps,
  useMachine,
} from '@vitro/zag'
import { $, $$, For, useEffect, useMemo } from 'vitro'
import type { Accessor, Optional } from '../types'
import { ToastProvider, type Options } from './toast-context'
import { ToastGroup } from './toast-group'

type GroupContext = Partial<toast.GroupMachineContext>

export interface CreateToasterProps
  extends Omit<Optional<GroupContext, 'id'>, 'render'> {
  placement: toast.Placement
  render: (api: Accessor<toast.Api<PropTypes, Options>>) => JSX.Element
}

export type CreateToasterReturn = [
  (props: JSX.IntrinsicElements['ol']) => JSX.Element,
  Accessor<toast.GroupApi<PropTypes, Options>>,
]

export const createToaster = (
  props: Observify<CreateToasterProps>,
): CreateToasterReturn => {
  const getRootNode = $<() => Node | ShadowRoot | Document>()

  const [state, send] = useMachine(
    {
      ...props,
      getRootNode,
    },
    // @ts-ignore
    toast.group.machine,
    {
      id: '1',
    },
  )

  const api = useMemo(() =>
    toast.group.connect(
      // @ts-ignore
      state(),
      send,
      normalizeProps,
    ),
  ) as Accessor<toast.GroupApi<PropTypes, Options>>

  const Toaster = (toasterProps: JSX.IntrinsicElements['ol']) => {
    getRootNode(useEnvironmentContext())

    const mergedProps = mergeProps(toasterProps, () =>
      api().getGroupProps({ placement: $$(props.placement) }),
    )
    const items = useMemo(
      () => api().toastsByPlacement[$$(props.placement)] ?? [],
    )

    return (
      <ToastGroup {...mergedProps}>
        <For values={items}>
          {(toast) => <ToastProviderFactory service={toast} />}
        </For>
      </ToastGroup>
    )
  }

  return [Toaster, api]
}

interface ToastProviderFactoryProps {
  service: toast.Service<Options>
}

const ToastProviderFactory = (props: ToastProviderFactoryProps) => {
  const state = $(props.service.getState())

  useEffect(
    () => {
      const unsubscribe = props.service.subscribe((nextState) => {
        state(nextState)
      })
      return () => {
        unsubscribe()
      }
    },
    { sync: 'init' },
  )

  const api = useMemo(() =>
    toast.connect(state(), props.service.send, normalizeProps),
  )

  return (
    <ToastProvider value={api}>{state().context.render?.(api)}</ToastProvider>
  )
}
