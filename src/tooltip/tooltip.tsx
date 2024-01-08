import type { Observify } from '@vitro/zag'
import {
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'

import { TooltipProvider } from './tooltip-context'
import {
  useTooltip,
  type UseTooltipProps,
  type UseTooltipReturn,
} from './use-tooltip'
import { applyChildren } from '../utils'
import { useMemo } from 'vitro'

export type TooltipProps = Observify<UseTooltipProps & UsePresenceProps> & {
  children?: JSX.Element | ((api: UseTooltipReturn) => JSX.Element)
}

export const Tooltip = ({
  lazyMount,
  onExitComplete,
  present,
  unmountOnExit,

  // ----
  'aria-label': ariaLabel,
  closeDelay,
  closeOnEsc,
  closeOnPointerDown,
  dir,
  disabled,
  getRootNode,
  id,
  ids,
  interactive,
  onOpenChange,
  open,
  openDelay,
  positioning,

  // ---
  children,
}: TooltipProps) => {
  const presenceProps = {
    lazyMount,
    onExitComplete,
    present,
    unmountOnExit,
  }
  const useTooltipProps = {
    'aria-label': ariaLabel,
    closeDelay,
    closeOnEsc,
    closeOnPointerDown,
    dir,
    disabled,
    getRootNode,
    id,
    ids,
    interactive,
    onOpenChange,
    open,
    openDelay,
    positioning,
  }

  const api = useTooltip(useTooltipProps)
  const apiPresence = usePresence(
    Object.assign(presenceProps, { present: useMemo(() => api().isOpen) }),
  )

  return (
    <TooltipProvider value={api}>
      <PresenceProvider value={apiPresence}>
        {applyChildren(children, api)}
      </PresenceProvider>
    </TooltipProvider>
  )
}
