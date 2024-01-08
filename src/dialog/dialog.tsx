import type { Observify } from '@vitro/zag'
import {
  PresencePropsProvider,
  PresenceProvider,
  usePresence,
  type UsePresenceProps,
} from '../presence'

import { useMemo } from 'vitro'
import { applyChildren } from '../utils'
import { DialogProvider } from './dialog-context'
import {
  useDialog,
  type UseDialogProps,
  type UseDialogReturn,
} from './use-dialog'

export type DialogProps = Observify<UseDialogProps & UsePresenceProps> & {
  children?: JSX.Element | ((api: UseDialogReturn) => JSX.Element)
}

export const Dialog = ({
  // ----
  lazyMount,
  onExitComplete,
  // present,
  unmountOnExit,
  // ----
  'aria-label': ariaLabel,
  closeOnEscapeKeyDown,
  closeOnInteractOutside,
  dir,
  finalFocusEl,
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
  preventScroll,
  restoreFocus,
  role,
  trapFocus,
  // ----
  children,
}: DialogProps) => {
  const api = useDialog({
    'aria-label': ariaLabel,
    closeOnEscapeKeyDown,
    closeOnInteractOutside,
    dir,
    finalFocusEl,
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
    preventScroll,
    restoreFocus,
    role,
    trapFocus,
  })
  const presenceProps = {
    lazyMount,
    onExitComplete,
    unmountOnExit,
    present: useMemo(() => api().isOpen),
  }
  const apiPresence = usePresence(presenceProps)

  return (
    <DialogProvider value={api}>
      <PresencePropsProvider value={presenceProps}>
        <PresenceProvider value={apiPresence}>
          {applyChildren(children, api)}
        </PresenceProvider>
      </PresencePropsProvider>
    </DialogProvider>
  )
}
