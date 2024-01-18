import * as toast from '@zag-js/toast'
import { useEnvironmentContext } from '../environment'

import { $, $$, For, useCleanup, useEffect, useMemo } from 'vitro'
import { Observify, PropTypes, normalizeProps } from '@vitro/zag'
import type { Accessor, Optional } from '../types'
import { toRecord, mergeProps } from '@vitro/zag'
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
  const service = toast.group
    .machine<Options>(Object.assign(toRecord(props), { id: '1' }))
    .start()

  const state = $(service.getState())

  useEffect(
    () => {
      const unsubscribe = service.subscribe((nextState) => {
        state(nextState)
      })

      useCleanup(() => {
        unsubscribe()
      })
    },
    { sync: 'init' },
  )

  useEffect(() => {
    const context = Object.assign(toRecord(props), { id: '1' })
    service.setContext(context)
  })

  const api = useMemo(() =>
    toast.group.connect(state(), service.send, normalizeProps),
  )

  const Toaster = (toasterProps: JSX.IntrinsicElements['ol']) => {
    const getRootNode = useEnvironmentContext()

    useEffect(() => {
      service.setContext({ getRootNode })
      useCleanup(() => service.stop())
    })

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
