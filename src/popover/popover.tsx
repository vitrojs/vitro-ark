import { useMemo } from 'vitro'
import {
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'
import { applyChildren } from '../utils'

import { PopoverProvider } from './popover-context'
import {
  usePopover,
  type UsePopoverProps,
  type UsePopoverReturn,
} from './use-popover'
import type { Observify } from '@vitro/zag'

export type PopoverProps = Observify<UsePopoverProps & UsePresenceProps> & {
  children?: JSX.Element | ((api: UsePopoverReturn) => JSX.Element)
}

export const Popover = ({
  lazyMount,
  onExitComplete,
  // present,
  unmountOnExit,
  // ----
  autoFocus,
  closeOnEsc,
  closeOnInteractOutside,
  dir,
  getRootNode,
  id,
  ids,
  initialFocusEl,
  modal,
  onEscapeKeyDown,
  onFocusOutside,
  onInteractOutside,
  onOpenChange,
  onPointerDownOutside,
  open,
  portalled,
  positioning,
  // ----
  children,
}: PopoverProps) => {
  const usePopoverProps = {
    autoFocus,
    closeOnEsc,
    closeOnInteractOutside,
    dir,
    getRootNode,
    id,
    ids,
    initialFocusEl,
    modal,
    onEscapeKeyDown,
    onFocusOutside,
    onInteractOutside,
    onOpenChange,
    onPointerDownOutside,
    open,
    portalled,
    positioning,
  }
  const api = usePopover(usePopoverProps)
  const apiPresence = usePresence({
    lazyMount,
    onExitComplete,
    unmountOnExit,
    present: useMemo(() => api().isOpen),
  })

  return (
    <PopoverProvider value={api}>
      <PresenceProvider value={apiPresence}>
        {applyChildren(children, api)}
      </PresenceProvider>
    </PopoverProvider>
  )
}
